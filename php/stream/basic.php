<?php

$fh = fopen('lion_king.txt',  'r');

while (true) {
    $ln = fgets($fh);

    if (false === $ln) {
        break;
    }

    echo $ln;
}

fclose($fh);
