<?php

if (empty($GLOBALS['Session']) || !$GLOBALS['Session']->Person || !$GLOBALS['Session']->Person->isA(Slate\People\Student::class)) {
    return;
}
//Duplicate the row below to add links to the tools menu that only students will see.
//Slate\UI\Tools::$tools['<name>'] = '<URL>';
Slate\UI\Tools::$tools = array_merge(Slate\UI\Tools::$tools, [
    'My PLP' => [
        'My Progress' => '/cbl/dashboards/students/progress',
        'My Goals' => '/cbl/dashboards/students/goals',
        'My Behavior' => '/cbl/dashboards/students/behavior',
        'My Experience' => '/cbl/dashboards/students/experience',
        'My Plan' => '/cbl/dashboards/students/plan',
        'My Attendance' => '/cbl/dashboards/students/attendance',
        'My Studios' => '/cbl/dashboards/students/studios',
        'My Productivity' => '/cbl/dashboards/students/productivity',
    ]
]);