package main

import (
    "fmt"
    "example.com/greetings"
)

func main() {
    message := greetings.Hello("Sérgio")
    fmt.Println(message)
}

