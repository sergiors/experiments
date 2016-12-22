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
    
    if ($mid) {
        return head($str) === last($str)
            && palindrome($mid);
    }
    
    return head($str) === last($str);
}

var_dump(palindrome('Rotor')); // => true
var_dump(palindrome('Racecar')); // => true
var_dump(palindrome('Arara')); // => true
var_dump(palindrome('my gym')); // => true
var_dump(palindrome('Red rum, sir, is murder')); // => true

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