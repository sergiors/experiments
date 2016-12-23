sub hello (Str $name) {
    'Hello ' ~ $name
}

say hello 'Sérgio';
say hello 'Rafael';

multi greet (Str $name) {
    'Good morning ' ~ $name
}

multi greet (Str $name, Str $title) {
    "Good morning $title $name"
}

say greet 'Sérgio';
say greet 'Sérgio', 'Mrs';

sub helloop (Str $name?) {
    with $name {
        return 'Hello ' ~ $name;
    }

    'Hello Human';
}

say helloop;
say helloop 'Siqueira';

sub hellodef (Str $name = 'Matt') {
    return 'Hello ' ~ $name;
}

say hellodef;
