<?php

namespace Slate\Connectors\DataWarehouse;

use ActiveRecord;
use DB;
use Exception;
use Site;

use Emergence\Connectors\IJob;
use Emergence\Database\PostgresConnection;

use Psr\Log\LogLevel;

class Connector extends \Emergence\Connectors\AbstractConnector implements \Emergence\Connectors\ISynchronize
{
    public static $title = 'Data Warehouse';
    public static $connectorId = 'data-warehouse';

    // warehouse postgres config
    public static $postgresHost;
    public static $postgresPort;
    public static $postgresUsername;
    public static $postgresPassword;
    public static $postgresDatabase;
    public static $postgresSchema;

    public static $chunkInserts = 1000;

    public static $exports = [
        'slate-cbl/student-portfolios' => [
            'table' => 'studentportfolio',
            'query' => [],
            'headers' => [
                'StudentNumber' => 'studentnumber',
                'ContentAreaCode' => 'competencyarea',
                'Level' => 'portfolio',
                'DemonstrationsAverage' => 'performancelevel',
                'Growth' => 'growth',
                'Progress' => 'progress',
                'DemonstrationsRequired' => 'totaler',
                'DemonstrationsComplete' => 'completeder',
                'DemonstrationsMissed' => 'misseder',
                'DemonstrationOpportunities' => 'totalopportunities'
            ]
        ],
        'slate-cbl/student-competencies' => [
            'table' => 'studentcompetency',
            'query' => [],
            'headers' => [
                'ID' => 'studentcompetencyslatepk',
                'StudentNumber' => 'studentnumber',
                'CompetencyCode' => 'competency',
                'Level' => 'portfolio',
                'BaselineRating' => 'baseline',
                'DemonstrationsAverage' => 'performancelevel',
                'Growth' => 'growth',
                'Progress' => 'progress',
                'DemonstrationsRequired' => 'totaler',
                'DemonstrationsComplete' => 'completeder',
                'DemonstrationsMissed' => 'misseder',
                'DemonstrationOpportunities' => 'totalopportunities'
            ]
        ],
        'slate-cbl/student-tasks' => [
            'table' => 'studenttask',
            'query' => [
                'term' => '*current-master'
            ],
            'headers' => [
                'StudentTaskID' => 'studenttaskslatepk',
                'StudentNumber' => 'studentnumber',
                'TaskTitle' => 'tasktitle',
                'TaskExperienceType' => 'experiencetype',
                'CreatorUsername' => 'teacherstafffk',
                'Created' => 'created',
                'SectionTitle' => 'experiencename',
                'Status' => 'currentstatusoftask',
                'DueDate' => 'duedate',
                'ExpirationDate' => 'expirationdate',
                'SubmittedDate' => 'submitteddate',
                'SkillCodes' => 'skillscodes',
                'CourseCode' => 'coursenumber',
                'TermHandle' => 'term',
                'AssignedDate' => 'assigneddate',
                'TaskID' => 'taskid',
                'ParentTaskID' => 'parenttaskid',
                'ClonedTaskID' => 'clonedtaskid',
                'DemonstrationID' => 'demonstrationid',
                'SectionCode' => 'sectionnumber',
                'CourseTitle' => 'coursename',
                'TeacherAttachments' => 'teacherattachments',
                'StudentAttachments' => 'studentattachments'
            ]
        ],
        'slate/terms' => [
            'table' => 'learningcycle',
            'query' => [
                'master-term' => '*current-master'
            ],
            'headers' => [
                'Title' => 'term',
                'StartDate' => 'startdate',
                'EndDate' => 'enddate',
                'TermType' => 'termtype'
            ]
        ],
        'slate-cbl/demonstrations' => [
            'table' => 'studentrating',
            'query' => [
                'term' => '*current-master'
            ],
            'headers' => [
                'StudentNumber' => 'studentnumber',
                'Created' => 'created',
                'DemonstrationSkillID' => 'studentratingslatepk',
                'CreatorUsername' => 'teacherstafffk',
                'Context' => 'experiencename',
                'PerformanceType' => 'tasktitle',
                'ArtifactURL' => 'artifact',
                'Competency' => 'competency',
                'Standard' => 'skill',
                'Rating' => 'rating',
                'Level' => 'portfolio',
                'DemonstrationID' => 'demonstrationid',
                'StudentTaskID' => 'studenttaskid',
                'CourseCode' => 'coursenumber',
                'SectionCode' => 'sectionnumber'
            ]
        ]
    ];

    // workflow implementations
    protected static function _getJobConfig(array $requestData)
    {
        $config = parent::_getJobConfig($requestData);

        $config['exports'] = $requestData['exports'];
        $config['leaveBackups'] = !empty($requestData['leaveBackups']);

        return $config;
    }

    public static function synchronize(IJob $Job, $pretend = true)
    {
        if ($Job->Status != 'Pending' && $Job->Status != 'Completed') {
            return static::throwError('Cannot execute job, status is not Pending or Complete');
        }

        if (empty($Job->Config['exports'])) {
            return static::throwError('Cannot execute job, at least one export must be selected.');
        }

        $Job->Status = 'Pending';

        if (!$pretend) {
            $Job->save();
        }

        // init results struct
        $results = [];

        try {
            $results['push-exports'] = static::pushExports($Job, $pretend);
            $Job->Status = 'Completed';
        } catch (\Exception $e) {
            $Job->logException($e);
            $Job->Status = 'Failed';
        } finally {
            $Job->Results = $results;

            if (!$pretend) {
                $Job->save();
            }

            return true;
        }
    }

    // task handlers
    public static function pushExports(IJob $Job, $pretend = true)
    {
        //init results struct
        $results = [];

        $configuredExports = static::$exports;

        // performance enhancers
        DB::suspendQueryLogging();
        ActiveRecord::$useCache = true;
        set_time_limit(0);

        foreach ($Job->Config['exports'] as $exportScriptKey) {
            if (!isset($configuredExports[$exportScriptKey])) {
                throw new Exception("Export script $exportScriptKey does not exist or has not yet been configured");
            }

            $exportScriptConfig = $configuredExports[$exportScriptKey];
            $results[$exportScriptKey] = static::pushExport($Job, $exportScriptKey, $exportScriptConfig, $pretend);
            $backupTables[] = $results[$exportScriptKey]['tempTable'];
        }

        DB::resumeQueryLogging();

        if (!$pretend && $Job->Config['leaveBackups'] !== true) {
            static::dropBackupTables(static::getPdo(), $backupTables);
            $Job->log(
                LogLevel::DEBUG,
                'Deleted backup tables',
                [
                    'backupTables' => $backupTables
                ]
            );
        }


        return $results;
    }


    public static function pushExport(IJob $Job, $scriptKey, array $scriptConfig = [], $pretend = true)
    {
        if (empty($scriptPath = $scriptConfig['scriptPath'])) {
            $scriptPath = $scriptKey;
        }

        $scriptNode = Site::resolvePath("data-exporters/{$scriptPath}.php");

        if (!$scriptNode) {
            throw Exception("Script data-exporters/$scriptPath was not found.");
        }

        // load config
        $exportConfig = include($scriptNode->RealPath);

        // check config
        if (empty($exportConfig['buildRows']) || !is_callable($exportConfig['buildRows'])) {
            throw new Exception("Script data-exporters/$scriptPath does not have a callable buildRows method");
        }

        if (empty($exportConfig['headers']) || !is_array($exportConfig['headers'])) {
            throw new Exception("Script data-exporters/$scriptPath does not have a headers array");
        }

        // read query
        if (is_callable($exportConfig['readQuery'])) {
            $query = call_user_func($exportConfig['readQuery'], $scriptConfig['query'], $exportConfig);
            ksort($query);
        } else {
            $query = [];
        }

        $exportRows = call_user_func($exportConfig['buildRows'], $query, $exportConfig);

        $Pdo = static::getPdo();

        $columnMappings = array_filter($scriptConfig['headers']);
        $rowColumns = static::generateRowColumnsSQL($Pdo, array_values($columnMappings));
        $rows = [];


        if (!$pretend) {
            $tempTable = static::createBackupTableAndCopyData($Pdo, $scriptConfig);
        } else {
            $tempTable = $scriptConfig['table'] . '_bak';
        }

        $Job->log(
            LogLevel::DEBUG,
            'Created backup table "{backupTableName}" for {tableName} {pretendMode}',
            [
                'tableName' => $scriptConfig['table'],
                'backupTableName' => $tempTable,
                'pretendMode' => $pretend ? '(pretend-mode)' : ''
            ]
        );

        if (!$pretend) {
            static::truncateOriginalTable($Pdo, $scriptConfig);
        }

        $Job->log(
            LogLevel::DEBUG,
            'Truncated original table {tableName} {pretendMode}',
            [
                'tableName' => $scriptConfig['table'],
                'pretendMode' => $pretend ? '(pretend-mode)' : ''
            ]
        );

        $results = [
            'exported' => 0,
            'tempTable' => $tempTable
        ];

        foreach ($exportRows as $row) {
            $results['exported']++;

            if (!$pretend) {
                $rows[] = static::generateRowSQL($Pdo, static::translateRow($row, $columnMappings));
                if (static::$chunkInserts && count($rows) >= static::$chunkInserts) {
                    static::exportRows($Pdo, $scriptConfig, $rowColumns, $rows);

                    $Job->log(
                        LogLevel::DEBUG,
                        'Wrote chunk of {rowsCount} rows to {tableName} table, {totalRowsExported} total rows exported so far',
                        [
                            'rowsCount' => count($rows),
                            'tableName' => $scriptConfig['table'],
                            'totalRowsExported' => $results['exported']
                        ]
                    );

                    $rows = [];
                }
            }
        }

        if (!$pretend) {
            if (count($rows)) {
                static::exportRows($Pdo, $scriptConfig, $rowColumns, $rows);

                $Job->log(
                    LogLevel::DEBUG,
                    'Wrote final chunk of {rowsCount} rows to {tableName} table, {totalRowsExported} total rows exported',
                    [
                        'rowsCount' => count($rows),
                        'tableName' => $scriptConfig['table'],
                        'totalRowsExported' => $results['exported']
                    ]
                );

                $rows = null;
            }
        }

        $Job->log(
            LogLevel::INFO,
            'Exported a total of {totalRowsExported} record(s) to table {tableName} {pretendMode}',
            [
                'totalRowsExported' => $results['exported'],
                'tableName' => $scriptConfig['table'],
                'pretendMode' => $pretend ? '(pretend-mode)' : ''
            ]
        );

        return $results;
    }

    // helper methods
    public static function getPdo()
    {
        static $Pdo;

        if ($Pdo === null) {
            $Pdo = PostgresConnection::createInstance([
                'host' => static::$postgresHost,
                'port' => static::$postgresPort,
                'username' => static::$postgresUsername,
                'password' => static::$postgresPassword,
                'database' => static::$postgresDatabase,
                'search_path' => [static::$postgresSchema]
            ]);
        }

        return $Pdo;
    }

    protected static function exportRows(PostgresConnection $Pdo, array $scriptCfg, $rowColumns, array $rows)
    {
        $query = '';

        if (!empty($rows)) {
            $query .= 'INSERT INTO ' . $Pdo->quoteIdentifier($scriptCfg['table']);
            $query .= ' ';
            $query .= $rowColumns;
            $query .= ' VALUES ';

            $Pdo->execute($query . implode(', ', $rows));
        }
    }

    protected static function translateRow(array $row, array $columnMappings)
    {
        $translated = [];
        foreach ($columnMappings as $inputKey => $outputKey) {
            $translated[$outputKey] = array_key_exists($inputKey, $row) ? $row[$inputKey] : null;
        }
        return $translated;
    }

    protected static function generateRowColumnsSQL(PostgresConnection $Pdo, array $columns)
    {
        return ' (' . implode(',', array_map([$Pdo, 'quoteIdentifier'], $columns)) . ')';
    }

    protected static function generateRowSQL(PostgresConnection $Pdo, array $record)
    {
        return '('. implode(', ', array_map([$Pdo, 'quoteValue'], array_values($record))).')';
    }

    protected static function createBackupTableAndCopyData(PostgresConnection $Pdo, array $scriptCfg)
    {
        $schema = static::$postgresSchema;
        $tempTable = $scriptCfg['table'] . '_bak';
        $tempTableExists = $Pdo->oneRow("SELECT to_regclass('{$schema}.{$tempTable}') as exists");

        if (empty($tempTableExists['exists'])) {
            // create backup table
            $Pdo->execute("CREATE TABLE $schema.{$tempTable} (like $schema.{$scriptCfg['table']} including all)");
        } else {
            $Pdo->execute("TRUNCATE TABLE $schema.$tempTable");
        }

        // copy data
        $Pdo->execute("INSERT INTO $schema.{$tempTable} SELECT * FROM $schema.{$scriptCfg['table']}");

        return $tempTable;
    }

    protected static function truncateOriginalTable(PostgresConnection $Pdo, array $scriptCfg)
    {
        $schema = static::$postgresSchema;
        // truncate original table, and insert rows
        $Pdo->execute("TRUNCATE TABLE $schema.{$scriptCfg['table']} RESTART IDENTITY");
    }

    protected static function dropBackupTables(PostgresConnection $Pdo, array $backupTables)
    {
        $schema = static::$postgresSchema;
        foreach ($backupTables as $backup) {
            $Pdo->execute("DROP TABLE $schema.$backup");
        }
    }
}
