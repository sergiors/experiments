#!/usr/bin/env php
<?php

require_once __DIR__.'/StripTagsFilter.php';

$in = fopen('php://stdin', 'r');
$out = fopen('php://stdout', 'w');

stream_filter_register('strip_tags', StripTagsFilter::class);
stream_filter_append($in, 'strip_tags');
stream_copy_to_stream($in, $out);
