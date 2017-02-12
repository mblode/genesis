<?php

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/db.php
 */

return array(
     // All environments
    '*' => array(
        'tablePrefix' => 'craft',
        'server' => getenv('CRAFTENV_DB_HOST'),
        'database' => getenv('CRAFTENV_DB_NAME'),
        'user' => getenv('CRAFTENV_DB_USER'),
        'password' => getenv('CRAFTENV_DB_PASS'),
        // to be compatible with MySQL 5.7, requires 2.6.2949 or greater
        'initSQLs'     => ["SET SESSION sql_mode='STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';"],
    ),
    // Live (production) environment
    'live'  => array(
    ),
    // Staging (pre-production) environment
    'staging'  => array(
    ),
    // Local (development) environment
    'local'  => array(
    ),

);
