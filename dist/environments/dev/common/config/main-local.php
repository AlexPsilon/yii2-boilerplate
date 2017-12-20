<?php
return [
    'components' => [
        'db' => [
            'class' => 'yii\db\Connection',
            'dsn' => 'mysql:host=localhost;dbname=yii2advanced',
            'username' => 'root',
            'password' => '',
            'charset' => 'utf8',
        ],
        'mailer' => [
            'class' => 'zyx\phpmailer\Mailer',
            'viewPath' => '@common/mail',
            'useFileTransport' => false,
            'config' => [
                'mailer' => 'mail', // "mail", "sendmail", or "smtp"
                // 'host' => 'smtp.yandex.ru',
                // 'port' => '465',
                // 'smtpsecure' => 'ssl',
                // 'smtpauth' => true,
                // 'username' => 'mysmtplogin@example.ru',
                // 'password' => 'mYsmTpPassword',
            ],
            // 'messageConfig'    => [
            //     'charset' => 'UTF-8',
            //     'from' => ['mysmtplogin@example.ru' => 'myname'],
            // ],
        ],
    ],
];
