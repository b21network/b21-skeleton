<?php

if (empty($GLOBALS['Session'])) {
    return;
}

$cblTools = [
    '_icon' => 'cbl'
];

if ($GLOBALS['Session']->hasAccountLevel('Staff')) {
    $cblTools['Competency Dashboard'] = '/cbl/dashboards/demonstrations/teacher';
    $cblTools['Task Dashboard'] = '/cbl/dashboards/tasks/teacher';
    $cblTools['Task Library'] = '/cbl/dashboards/tasks/manager';
    $cblTools['Missing Ratings'] = '/cbl/missing-ratings';

} elseif ($GLOBALS['Session']->Person && $GLOBALS['Session']->Person->isA(Slate\People\Student::class)) {
    $cblTools['Competency Dashboard'] = '/cbl/dashboards/demonstrations/student';
    $cblTools['Task Dashboard'] = '/cbl/dashboards/tasks/student';
    $cblTools['Missing Ratings'] = '/cbl/missing-ratings';
}

if ($GLOBALS['Session']->Person && !empty($GLOBALS['Session']->Person->Wards)) {
    foreach ($GLOBALS['Session']->Person->Wards as $Ward) {
        if (!$Ward instanceof \Slate\People\Student || $Ward->AccountLevel == 'Disabled') {
            continue;
        }

        $cblTools[$Ward->FirstNamePossessive . ' Competency Dashboard'] = '/cbl/dashboards/demonstrations/student#' . $Ward->Username;
        $cblTools[$Ward->FirstNamePossessive . ' Task Dashboard'] = '/cbl/dashboards/tasks/student#'.$Ward->Username.'/all';
        $cblTools[$Ward->FirstNamePossessive . ' Missing Ratings'] = '/cbl/missing-ratings?student='.$Ward->Username;
    }
}

if ($GLOBALS['Session']->hasAccountLevel('Administrator')) {
    $cblTools['Enrollments Dashboard'] = '/cbl/dashboards/student-competencies/admin';
    $cblTools['Exports'] = [
        '_icon' => 'export',
        '_href' => '/exports'
    ];
    $cblTools['Exports (old)'] = [
        '_icon' => 'export',
        '_href' => '/cbl/exports'
    ];
}

Slate\UI\Tools::$tools['Competency-Based Learning'] = $cblTools;