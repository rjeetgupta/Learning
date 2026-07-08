package main

import "fmt"

// for ==> Only construct in go for looping

func main() {
	// while loop
	// i := 1

	// for i <= 3 {
	// 	fmt.Println(i)
	// 	i = i + 1
	// }


	// // infinite loop

	// for {
	// 	fmt.Println("hello")
	// }



	// classic for loop

	// for i := 0; i < 3; i++ {
	// 	fmt.Println(i)
	// }

	// using range (it does not include the last digit)

	for i := range 10 {
		fmt.Println(i)
	}

}