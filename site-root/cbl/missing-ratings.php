<?php

use Slate\CBL\Demonstrations\Demonstration;
use Slate\CBL\Demonstrations\DemonstrationSkill;
use Slate\CBL\Tasks\StudentTask;
use Slate\People\Student;

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

$studentTasks = StudentTask::getAllByWhere([
    'StudentID' => $Student->ID,
    'DemonstrationID IS NOT NULL'
], ['indexField' => 'DemonstrationID']);

$skills = DemonstrationSkill::getAllByWhere([
    'DemonstrationID' => [
        'operator' => 'IN',
        'values' => array_keys($studentTasks)
    ],
    'DemonstratedLevel = 0'
]);

RequestHandler::respond('missing-ratings', [
    'data' => $skills,
    'tasks' => $studentTasks,
    'Student' => $Student
]);