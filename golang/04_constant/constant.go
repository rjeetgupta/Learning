package main

import "fmt"

const age = 30

// name := "golang" ===> Can't do like this

func main() {

	// := Using the I can not declear the value out side the funtion

	// const name = "golang"
	// const age = 30

	// fmt.Println(name)

	// declearing multiple constant at once.

	const (
		port = 3000
		host = "localhost"
	)

	fmt.Println(port, host)
}