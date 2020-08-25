<?php

/*Slate\UI\Omnibar::$sources[] = [
    'Google' => 'https://google.com'
];*/


/*Slate\UI\Omnibar::$sources[] = [
    'Jarvus' => [
        // this is optional, the Jarvus header can just be a menu and not a link too
        '_href' => 'https://jarv.us',

        'Consulting' => 'https://jarv.us/consulting',
        'Education' => 'https://jarv.us/education',
        'About' => 'https://jarv.us/about',

        'Slate' => [
            // Slate won't get its own entry unless you set an _href
            // '_href' => 'http://slate.is',

            'About' => 'http://slate.is/home',
            'Tools' => 'http://slate.is/tools',
            'Get Slate' => 'http://slate.is/get'
        ]
    ]
];*/

if ($GLOBALS['Session']->hasAccountLevel('Staff')) {
    Slate\UI\Omnibar::$sources[] = [
        'Dashboards' => [
            // this is optional, the Jarvus header can just be a menu and not a link too
            //'_href' => 'https://jarv.us',
        ]
    ];
} elseif ($GLOBALS['Session']->Person && $GLOBALS['Session']->Person->isA(Slate\People\Student::class)) {
    Slate\UI\Omnibar::$sources[] = [
        'My PLP' => [
            // this is optional, the Jarvus header can just be a menu and not a link too
            //'_href' => 'https://jarv.us',
    
            'My Progress' => '/cbl/dashboards/plp/progress',
            'My Goals' => '/cbl/dashboards/plp/goals',
            'My Behavior' => '/cbl/dashboards/plp/behavior',
            'My Experience' => '/cbl/dashboards/plp/experience',
            'My Plan' => '/cbl/dashboards/plp/plan',
            'My Attendance' => '/cbl/dashboards/plp/attendance',
            'My Studios' => '/cbl/dashboards/plp/studios',
            'My Productivity' => '/cbl/dashboards/plp/productivity',
        ]
    ];
}

