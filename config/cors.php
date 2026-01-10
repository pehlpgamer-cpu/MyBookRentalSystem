<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may configure your settings for cross-origin resource sharing
    | or "CORS". This determines what cross-origin operations may execute
    | in web browsers. You are free to adjust these settings as needed.
    |
    | To learn more: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    |
    */
    //default
    //'paths' => ['api/*', 'sanctum/csrf-cookie'],
    //'allowed_methods' => ['*'],
    //'allowed_origins' => ['*'],
    //'allowed_origins_patterns' => [],
    //'allowed_headers' => ['*'],
    //'exposed_headers' => [],
    //'max_age' => 0,
    //'supports_credentials' => false,


    // stackoverflow.com/questions/79639332/how-to-correctly-configure-cors-in-laravel-12-13-with-the-handlecors-middleware

    'paths' => ['api/*', 'sanctum/csrf-cookie'],
    'allowed_methods'   => ['*'],
    'allowed_origins'   => [
        'https://annaponsprojects.com',
        'http://localhost:5173',
    ],
    'allowed_origins_patterns' => [
        '/^https?:\/\/([a-z0-9-]+\.)?annaponsprojects\.com$/',
    ],
    'allowed_headers'   => ['*'],
    'exposed_headers'   => [],
    'max_age'           => 3600,
    'supports_credentials' => false,

];

