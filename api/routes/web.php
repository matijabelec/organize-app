<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$app->get('/login', function() {
    return response()->json(['token' => 'tok1123']);
});
$app->post('/login', function() {
    return response()->json(['user' => 1]);
});

$app->post('/logout', function() {
    return response()->json(['success' => 'ok']);
});

$app->get('/', function() use ($app) {
    return $app->version();
});
