<?php

if (empty($GLOBALS['Session'])) {
    return;
}


$cblTools = &Slate\UI\Tools::$tools['Competency-Based Learning'];

if ($GLOBALS['Session']->hasAccountLevel('Staff')) {
    $cblTools['Missing Ratings'] = '/cbl/missing-ratings';

} elseif ($GLOBALS['Session']->Person && $GLOBALS['Session']->Person->isA(Slate\People\Student::class)) {
    $cblTools['Missing Ratings'] = '/cbl/missing-ratings';
}

if ($GLOBALS['Session']->Person && !empty($GLOBALS['Session']->Person->Wards)) {
    foreach ($GLOBALS['Session']->Person->Wards as $Ward) {
        if (!$Ward instanceof \Slate\People\Student || $Ward->AccountLevel == 'Disabled') {
            continue;
        }

        $cblTools[$Ward->FirstNamePossessive . ' Missing Ratings'] = '/cbl/missing-ratings?student='.$Ward->Username;
    }
}
