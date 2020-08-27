<?php

if (empty($GLOBALS['Session']) || !$GLOBALS['Session']->Person || !$GLOBALS['Session']->hasAccountLevel('Administrator')) {
    return;
}
//Duplicate the row below to add links to the tools menu that only administrators will see.
//Slate\UI\Tools::$tools['<name>'] = '<URL>';
Slate\UI\Tools::$tools = array_merge(Slate\UI\Tools::$tools, [
    'School Compass' => [
        'Advisory' => '/cbl/dashboards/admin/advisory',
        'Attendance' => '/cbl/dashboards/admin/attendance',
        'Teacher Survey' => '/cbl/dashboards/admin/teacher-survey',
        'College and Career Readiness' => '/cbl/dashboards/admin/cc-readiness',
        'Correlations' => '/cbl/dashboards/admin/correlations',
    ]
]);