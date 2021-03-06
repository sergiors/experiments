<?php

declare(strict_types = 1);

function rot13(string $str): string
{
    return preg_replace_callback('/[a-zA-Z]/', function (array $matches): string {
        return 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'[
            strpos('NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm', $matches[0])
        ];
    }, $str);
};

assert('uryyb' === rot13('hello'));
assert('hello' === rot13('uryyb'));
assert('URYYB' === rot13('HELLO'));
assert('HELLO' === rot13('URYYB'));
