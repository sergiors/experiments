<?php

require __DIR__.'/vendor/autoload.php';

use function Prelude\{gt, lte, head, tail, filter};

function qsort(array $xss)
{
    if ([] === $xss) {
        return [];
    }

    $pivot = head($xss);
    $xs = tail($xss);

    $greaterThanPivot = filter(gt($pivot));
    $lessThanPivot = filter(lte($pivot));

    return array_merge(
        qsort($greaterThanPivot($xs)),
        [$pivot],
        qsort($lessThanPivot($xs))
    );
}

assert(qsort([2, 1, 4, 100, 77, 3, 99, 5]) === [1, 2, 3, 4, 5, 77, 99, 100]);
