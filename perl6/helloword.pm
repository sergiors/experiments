# http://perl6intro.com

# 'hello world'.say
# say 'hello world'

say 'hello word' if True;
say 'he' x 3;


my $name = 'Sérgio';
say $name;
say $name.flip;

# arrays
my @animals = 'camel', 'vicuña', 'llama';

say 'The zoo contais ' ~ @animals.elems ~ ' animals';
say 'The animals are: ' ~ @animals;
say 'We\'re going to let go: ' ~ @animals.splice(1, 2) ~ ' and keep the ' ~ @animals;

my @array[2];
@array[0] = 'first value';
@array[1] = 'second value';
# not able to add a third value
# @array[2] = 'third value';
