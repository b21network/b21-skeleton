<?php

if (empty($GLOBALS['Session']) || !$GLOBALS['Session']->Person || !$GLOBALS['Session']->Person->isA(Slate\People\Student::class)) {
    return;
}
//Duplicate the row below to add links to the tools menu that only students will see.
//Slate\UI\Tools::$tools['<name>'] = '<URL>';
Slate\UI\Tools::$tools = array_merge(Slate\UI\Tools::$tools, [

]);
