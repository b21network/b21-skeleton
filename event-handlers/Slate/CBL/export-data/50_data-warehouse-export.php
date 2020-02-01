<?php

use Emergence\Mailer\Mailer;
use Emergence\People\User;

use Slate\Connectors\DataWarehouse\Connector;
use Slate\Connectors\Job;

$_SESSION['User'] = User::getByUsername('system'); // run as system user

$notifyEmails = [
    'tom@b-21.org',
    'eric@b-21.org',
    'sandra@b-21.org',
    'nafis@jarv.us'
];

$Job = Job::create([
    'Connector' => Connector::class,
    'Config' => [
        'reportTo' => join(',', $notifyEmails),
        'exports' => array_keys(Connector::$exports)
    ]
]);

Connector::synchronize($Job, false);

// email report
if (!empty($Job->Config['reportTo'])) {
    Mailer::sendFromTemplate(
        $Job->Config['reportTo'],
        'connectors/syncronizeComplete',
        [
            'Job' => $Job,
            'connectorBaseUrl' => Connector::getBaseURL(true)
        ]
    );
}