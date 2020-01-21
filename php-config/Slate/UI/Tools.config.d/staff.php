<?php

if (empty($GLOBALS['Session']) || !$GLOBALS['Session']->Person || !$GLOBALS['Session']->hasAccountLevel('Staff')) {
    return;
}
//Duplicate the row below to add links to the tools menu that only staff will see.
//Slate\UI\Tools::$tools['<name>'] = '<URL>';