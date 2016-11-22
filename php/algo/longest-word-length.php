<?php

require __DIR__.'/vendor/autoload.php';

use function Prelude\reduce;
use function Prelude\split;

$longestWordLength = function ($str) {
    $largest = function ($x, $y) {
        return strlen($x) > strlen($y) ? $x : $y;
    };
    return strlen(reduce($largest, split($str, ' ')));
};

assert($longestWordLength('The quick brown fox jumped over the lazy dog') === 6);
