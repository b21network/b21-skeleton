<?php

if (empty($GLOBALS['Session']) || !$GLOBALS['Session']->Person || !$GLOBALS['Session']->hasAccountLevel('Administrator')) {
    return;
}
//Duplicate the row below to add links to the tools menu that only administrators will see.
//Slate\UI\Tools::$tools['<name>'] = '<URL>';
Slate\UI\Tools::$tools = array_merge(Slate\UI\Tools::$tools, [
    'School Compass' => [
        'Progress and Ratings' => '/cbl/dashboards/admin/progress-ratings',
        'School Health' => '/cbl/dashboards/admin/school-health',
        'Walk-throughs' => '/cbl/dashboards/admin/walkthroughs'
    ]
]);
