
#$ is used for scalars
#@ is used for arrays
#% is used for hashes

# string
my $str = 'Text';
say $str;
say $str.WHAT;

# doesn't work
# my Int $num = 'Text';
my Int $num = 10;
say $num;
say $num.WHAT;

# array
my Int @intArr = 1,2,3;
say @intArr;
say @intArr.WHAT;

# hash
my Str %capitals = UK => 'London', Germany => 'Berlin';
say %capitals;
say %capitals.WHAT;

my Int %countryCodes = UK => 44, Germany => 49, Brazil => 55;
say %countryCodes;
say %countryCodes.WHAT;
