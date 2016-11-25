void main() {
    import std.stdio: writeln;
    import std.algorithm: filter, equal;

    int[] numbers = [1, 2, 3, 4, 5];

    auto lessThen = numbers.filter!(x => x < 3);

    writeln(lessThen.equal([1, 2]));
    writeln(lessThen);
}
