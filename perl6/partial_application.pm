sub partial (Code $f, @s) {
    @s.map: { .$f }
}

sub sum (Int $x, Int $y --> Int) {
    $x + $y;
}

say partial(&sum, [1, 2]);
