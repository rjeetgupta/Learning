package main

import (
	"fmt"
	// "time"
)

func main() {
	// i := 5

	// switch i {
	// case 1:
	// 	fmt.Println("One")
	// case 2:
	// 	fmt.Println("Two")
	// case 3:
	// 	fmt.Println("Three")
	// default:
	// 	fmt.Println("Other")
	// }

	// multiple condition switch

	// switch time.Now().Weekday() {
	// case time.Saturday, time.Sunday:
	// 	fmt.Println("It's Weeday")
	// default:
	// 	fmt.Println("It's working day")
	// }

	// type switch

	whoAmI := func(i interface{}) {
		switch t := i.(type) {
		case int:
			fmt.Println("It's an Integer")

		case string:
			fmt.Println("It's a String")

		case bool:
			fmt.Println("It's a Boolean")
		
		default:
			fmt.Println("Other", t)
		}
	}

	whoAmI("ranjeet")
}