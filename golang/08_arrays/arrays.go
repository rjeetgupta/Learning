package main

import "fmt"

func main() {

	// By default values are assigned zero
	var nums [4]int

	nums[0] = 1
	nums[1] = 2
	nums[3] = 3


	// printing arrays
	fmt.Println(nums)

	// finding array length
	// fmt.Println(len(nums))

	// Declearing boolean values
	// By default false are assigned
	var vals [4]bool
	fmt.Println(vals)


	// Declearing string
	// By default values are assigned ""
	var names [5]string
	fmt.Println(names)

	nums:= [4]int{1, 2, 3, 4}
	fmt.Println(nums)

	// 2D arrays

	nums:= [2][2]int {{1, 2}, {3, 4}}
	fmt.Println(nums)

	// Fixed size - that is predictable
	// Memory Optimization
	// Constant time access
}