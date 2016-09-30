<?php
// config/config.php

$dir = __DIR__ . '/../app';

$iterator = Symfony\Component\Finder\Finder::create()
    ->files()
    ->name('*.php')
    ->exclude('Commands')
    ->exclude('Console')
    ->in($dir);

$options = [
    'theme'                => 'default',
    'title'                => 'Kescrow Source Documentation',
    'build_dir'            => __DIR__ . '/../public/build/docs/source',
    'cache_dir'            => __DIR__ . '/../public/cache/docs/source',
];

$sami = new Sami\Sami($iterator, $options);

return $sami;
