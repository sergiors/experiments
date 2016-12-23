my @numbers = 1,2,3,4,5,6;
say [+] @numbers;
say [*] @numbers;

# other ways
say @numbers.reduce(-> $acc, $y {
    $acc + $y
});

sub inc($x) {
    return $x + 1
}

say @numbers.map(&inc);

say @numbers.map(-> $x { $x + 1 });
