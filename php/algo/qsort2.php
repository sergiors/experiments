<?php

function qsort(array $xss)
{
    if ([] === $xss) {
        return [];
    }

    $pv = array_values(array_slice($xss, 0, 1))[0];
    $xs = array_slice($xss, 1);

    $lt = function ($x) use ($pv) {
        return $x < $pv;
    };
    $gte = function ($x) use ($pv) {
        return $x >= $pv;
    };

    return array_merge(
        qsort(array_filter($xs, $lt)),
        [$pv],
        qsort(array_filter($xs, $gte))
    );
}

assert(qsort([2, 1, 4, 100, 77, 3, 99, 5]) === [1, 2, 3, 4, 5, 77, 99, 100]);
