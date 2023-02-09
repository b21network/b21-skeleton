<?php

use Emergence\Mailer\Mailer;
use Emergence\People\User;

use Slate\Connectors\DataWarehouse\Connector;
use Slate\Connectors\Job;

printf("Beginning sync at %s\n", date('Y-m-d H:i:s'));

printf("Logging in as system user...\n");
$_SESSION['User'] = User::getByUsername('system'); // run as system user

$notifyEmails = [
    'dashboard-errors@b-21.org'
];

printf("Creating job...\n");
$Job = Job::create([
    'Connector' => Connector::class,
    'Config' => [
        'reportTo' => join(',', $notifyEmails),
        'exports' => array_keys(Connector::$exports)
    ]
]);

printf("Executing synchronization...\n");
Connector::synchronize($Job, false);

// email report
if (!empty($Job->Config['reportTo'])) {
    printf("Sending emails to: %s\n", $Job->Config['reportTo']);
    $result = Mailer::sendFromTemplate(
        join(',', $notifyEmails),
        'connectors/syncronizeComplete',
        [
            'Job' => $Job,
            'connectorBaseUrl' => Connector::getBaseURL(true)
        ]
    );
    printf("Sent emails, result: %s\n", var_export($result, true));
}


printf("Finished sync at %s\n", date('Y-m-d H:i:s'));
