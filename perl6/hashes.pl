my %capitals = UK => 'London', Germany => 'Berlin';
say %capitals;

%capitals.push: (France => 'Paris');

say %capitals.kv;
say %capitals.values;

say 'The capital of France is ' ~ %capitals<France>;
