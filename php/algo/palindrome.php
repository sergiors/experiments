<?php

function head($str)
{
    return substr($str, 0, 1);
}

function last($str)
{
    return substr($str, -1);
}

function init($str)
{
    return substr($str, 0, -1);
}

function tail($str)
{
    return substr($str, 1);
}

function palindrome($str)
{
    $str = preg_replace('/\W+/', '', strtolower($str));
    $mid = init(tail($str));
    $eq = head($str) === last($str);

    if ($mid) {
        return $eq && palindrome($mid);
    }

    return $eq;
}

assert(true === palindrome('Rotor'));
assert(true === palindrome('Racecar'));
assert(true === palindrome('Arara'));
assert(true === palindrome('my gym'));
assert(true === palindrome('Red rum, sir, is murder'));

/*
http://examples.yourdictionary.com/palindrome-examples.html
/*

/*
               Head=1
               |
               | __________Tail=[2,3,4,5]
               ||
              [1,2,3,4,5]
[1,2,3,4]=Init________||
                       |
                       |
                  5=Last
*/
