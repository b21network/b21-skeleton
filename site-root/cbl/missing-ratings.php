<?php

use Slate\Courses\Section;
use Slate\CBL\Demonstrations\Demonstration;
use Slate\CBL\Demonstrations\DemonstrationSkill;
use Slate\CBL\Tasks\StudentTask;
use Slate\CBL\Tasks\Task;
use Slate\People\Student;
use Slate\Term;

$GLOBALS['Session']->requireAuthentication();

if ($GLOBALS['Session']->hasAccountLevel('Staff')) {
    if (empty($_REQUEST['student'])) {
        return RequestHandler::respond('missing-ratings');
    }

    if (!$Student = Student::getByHandle($_REQUEST['student'])) {
        return RequestHandler::throwInvalidRequestError(sprintf('student %s was not found.', $_REQUEST['student']));
    }
} else {
    $Student = $GLOBALS['Session']->Person;
}

$validResponseTypes = [
    'csv',
    'json',
    'html'
];

$responseFormat =
    !empty($_REQUEST['format']) && in_array($_REQUEST['format'], $validResponseTypes) ?
    $_REQUEST['format'] :
    'html';

$studentTasks = StudentTask::getTableByQuery('DemonstrationID',
    '
        SELECT student_tasks.*
          FROM `%1$s` student_tasks
          JOIN `%2$s` tasks
            ON tasks.ID = student_tasks.TaskID
          JOIN `%3$s` sections
            ON sections.ID = tasks.SectionID
          JOIN `%4$s` terms
            ON terms.ID = sections.TermID
         WHERE terms.ID IN (%5$s)
           AND student_tasks.StudentID = %6$u
           AND student_tasks.DemonstrationID IS NOT NULL
    ',
    [
        StudentTask::$tableName,
        Task::$tableName,
        Section::$tableName,
        Term::$tableName,
        join(',', Term::getClosestMasterContainedTermIDs()),
        $Student->ID
    ]
);

$skills = DemonstrationSkill::getAllByWhere([
    'DemonstrationID' => [
        'operator' => 'IN',
        'values' => array_keys($studentTasks)
    ],
    'DemonstratedLevel = 0'
]);

$responseData = [];

foreach ($skills as $demoSkill) {
    $studentTask = $studentTasks[$demoSkill->DemonstrationID];
    $responseData[] = [
        'studio' => $demoSkill->Demonstration->Context,
        'teacher' => $studentTask->Creator->Username,
        'task' => $studentTask->Task->Title,
        'skill' => $demoSkill->Skill->Code,
        'demonstration_created_date' => $demoSkill->Demonstration->Created,
        'demonstrated_level' => $demoSkill->DemonstratedLevel,
        'link' => sprintf('/cbl/dashboards/tasks/student#%s/%s', $Student == $GLOBALS['Session']->Person ? 'me' : $Student->Username, $studentTask->Task->Section->Code)
    ];
}

RequestHandler::respond('missing-ratings', [
    'data' => $responseData
], $responseFormat);