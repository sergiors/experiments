void main() {
    import std.stdio: writeln;
    import std.algorithm: map, equal;

    int[] numbers = [1, 2, 3, 4, 5];

    auto plus = numbers.map!(x => x + 1);

    writeln(plus.equal([2, 3, 4, 5, 6]));
    writeln(plus);
}
