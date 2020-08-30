<?php

if (empty($GLOBALS['Session']) || !$GLOBALS['Session']->Person || !$GLOBALS['Session']->hasAccountLevel('Staff')) {
    return;
}
//Duplicate the row below to add links to the tools menu that only staff will see.
//Slate\UI\Tools::$tools['<name>'] = '<URL>';
Slate\UI\Tools::$tools = array_merge(Slate\UI\Tools::$tools, [
    'Staff Dashboards' => [
        'Progress Lookup' => '/cbl/dashboards/staff/progress-lookup',
    ]
]);