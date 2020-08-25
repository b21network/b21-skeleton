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

if ($GLOBALS['Session']->Person && $GLOBALS['Session']->Person->isA(Slate\People\Student::class)) {
    Slate\UI\Omnibar::$sources[] = [
        'My PLP' => [
            // this is optional, the Jarvus header can just be a menu and not a link too
            //'_href' => 'https://jarv.us',
    
            'My Progress' => '/cbl/dashboards/students/progress',
            'My Goals' => '/cbl/dashboards/students/goals',
            'My Behavior' => '/cbl/dashboards/students/behavior',
            'My Experience' => '/cbl/dashboards/students/experience',
            'My Plan' => '/cbl/dashboards/students/plan',
            'My Attendance' => '/cbl/dashboards/students/attendance',
            'My Studios' => '/cbl/dashboards/students/studios',
            'My Productivity' => '/cbl/dashboards/students/productivity',
        ]
    ];
}

