<?php

declare(ticks = 1);

$timeStart = microtime(true);

pcntl_signal(SIGINT, function () use ($timeStart) {
    $elapsed = time(true) - $timeStart;
    echo "Ran for $elapsed seconds.\n";
    exit(1);
});

for ($i = 0; ; usleep(0.5 * 1000000)) {
    echo ++$i, "\n";
}