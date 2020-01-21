<?php

namespace Slate\CBL;

DataWarehouseExporter::$postgresHost = 'db-postgresql-nyc1-XXXXX.db.ondigitalocean.com';
DataWarehouseExporter::$postgresPort = 25060;
DataWarehouseExporter::$postgresUsername = 'XXXXX';
DataWarehouseExporter::$postgresPassword = 'XXXXX';
DataWarehouseExporter::$postgresDatabase = 'XXXXX';
DataWarehouseExporter::$postgresSchema = 'XXXXX';

$exporters = DataWarehouseExporter::$exporters;

DataWarehouseExporter::$exporters = [
    // 'slate-cbl/student-portfolios' => $exporters['slate-cbl/student-portfolios'],
    // 'slate-cbl/student-competencies' => $exporters['slate-cbl/student-competencies'],
    // 'slate-cbl/student-tasks' => $exporters['slate-cbl/student-tasks'],
    'slate/terms' => $exporters['slate/terms'],
    // 'slate-cbl/demonstrations' => $exporters['slate-cbl/demonstrations']
];