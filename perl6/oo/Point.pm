class Dot {
    has Int $!x;
    has Int $!y;

    submethod BUILD(:$!x, :$!y) {
    }

    method getx (--> Int) {
        $!x;
    }
}

my $a = Dot.new(x => 23, y => 42);
say $a.getx;
