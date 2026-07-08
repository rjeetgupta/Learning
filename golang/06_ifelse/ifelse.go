package main

import "fmt"

func main() {

	// age := 18

	// if age >= 18 {
	// 	fmt.Println("Person is an adult")
	// } else {
	// 	fmt.Println("Person is not an adult")
	// }

	// var role = "user"
	// var hasPermission = true

	// if role == "admin" && hasPermission {
	// 	fmt.Println("You are allowed to do this")
	// } else {
	// 	fmt.Println("You are not allowed to do this.")
	// }


	// We can declear a variable inside the if
	if age := 15; age >= 18 {
		fmt.Println("Person is an adult", age)
	} else if age >= 12 {
		fmt.Println("Person is a teenager", age)
	}

	// golang does not have ternary operator, You will have to use normal if else
}