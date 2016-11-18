void main() {
    // The import statement makes all public functions and types from the given module available.

    // The import statement can also be used to selectively import certain symbols of a module:
    import std.stdio: writeln;

    writeln("Hello World!");
}