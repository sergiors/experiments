<?php

require __DIR__.'/vendor/autoload.php';

use const Prelude\{_, lt, gte};
use function Prelude\{filter, head, tail, merge, placeholder};

function qsort(array $xss)
{
    if ([] === $xss) {
        return [];
    }

    $pv = head($xss);
    $xs = tail($xss);

    $lt = placeholder(lt, _, $pv);
    $gte = placeholder(gte, _, $pv);

    return merge(qsort(filter($lt, $xs)), [$pv], qsort(filter($gte, $xs)));
}

assert(qsort([2, 1, 4, 100, 77, 3, 99, 5]) === [1, 2, 3, 4, 5, 77, 99, 100]);
