<?php

require __DIR__.'/vendor/autoload.php';

use function Prelude\map;
use function Prelude\reduce;

$largestNumbersOfArrays = map(reduce('max'));

assert($largestNumbersOfArrays([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]) === [27, 5, 39, 1001]);
