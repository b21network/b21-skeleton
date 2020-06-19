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

Slate\UI\Omnibar::$sources[] = [
    'My PLP' => [
        // this is optional, the Jarvus header can just be a menu and not a link too
        //'_href' => 'https://jarv.us',

        'My Progress' => 'http://slate-sandbox.b-21.org:7080/looker-progress',
        'My Goals' => 'http://slate-sandbox.b-21.org:7080/looker-goals',
        'My Behavior' => 'http://slate-sandbox.b-21.org:7080/looker-behavior',
        'My Experience' => 'http://slate-sandbox.b-21.org:7080/looker-experience',
        'My Plan' => 'http://slate-sandbox.b-21.org:7080/looker-plan',
        'My Attendance' => 'http://slate-sandbox.b-21.org:7080/looker-attendance',
        'My Studios' => 'http://slate-sandbox.b-21.org:7080/looker-studios',
        'My Productivity' => 'http://slate-sandbox.b-21.org:7080/looker-productivity',
    ]
];