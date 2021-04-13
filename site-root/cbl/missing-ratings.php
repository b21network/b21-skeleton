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
} else if (!empty($GLOBALS['Session']->Person->Wards)) { // this is a parent account
    $wardIds = array_map(function($ward) {
        return $ward->ID;
    }, $GLOBALS['Session']->Person->Wards);

    if (
        !($Student = Student::getByHandle($_REQUEST['student'])) ||
        !in_array($Student->ID, $wardIds)
    ) {
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
          JOIN `%5$s` demonstrations
            ON demonstrations.ID = student_tasks.DemonstrationID
         WHERE terms.ID IN (%6$s)
           AND student_tasks.StudentID = %7$u
           AND student_tasks.DemonstrationID IS NOT NULL
         ORDER BY sections.Title, demonstrations.Demonstrated
    ',
    [
        StudentTask::$tableName,
        Task::$tableName,
        Section::$tableName,
        Term::$tableName,
        Demonstration::$tableName,
        join(',', Term::getClosestMasterContainedTermIDs()),
        $Student->ID
    ]
);

$skills = DemonstrationSkill::getAllByQuery(
    '
        SELECT *
          FROM `%1$s`
         WHERE DemonstrationID IN (%2$s)
           AND DemonstratedLevel = 0
         ORDER BY FIELD(DemonstrationID, %2$s)
    ',
    [
        DemonstrationSkill::$tableName,
        !empty($studentTasks) ? join(',', array_keys($studentTasks)) : '0',

    ]
);

$responseData = [];

foreach ($skills as $demoSkill) {
    $studentTask = $studentTasks[$demoSkill->DemonstrationID];
    $responseData[] = [
        'studio' => $demoSkill->Demonstration->Context,
        'teacher' => $studentTask->Creator->Username,
        'task' => $studentTask->Task->Title,
        'skill' => $demoSkill->Skill->Code,
        'demonstration_demonstrated_date' => $demoSkill->Demonstration->Demonstrated,
        'demonstrated_level' => $demoSkill->DemonstratedLevel,
        'link' => sprintf('/cbl/dashboards/tasks/student#%s/%s', $Student == $GLOBALS['Session']->Person ? 'me' : $Student->Username, $studentTask->Task->Section->Code)
    ];
}

RequestHandler::respond('missing-ratings', [
    'data' => $responseData,
    'student' => $Student
], $responseFormat);