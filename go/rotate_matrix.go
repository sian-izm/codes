package main

import (
	"errors"
	"fmt"
)

func main() {
	array := [][]int{
		{1, 2},
		{3, 4},
	}
	run(array)
	fmt.Print("hello")
}

func run(matrix [][]int) ([][]int, error) {
	// Not initialized matrix
	if matrix == nil {
		return nil, nil
	}

	// Empty matrix
	height := len(matrix)
	if height == 0 {
		return matrix, nil
	}

	// 1 element matrix
	width := len(matrix[0])
	if width == height && width == 1 {
		return matrix, nil
	}

	// not square matrix, for this case must allocate new array => another problem
	if height != width {
		return nil, errors.New("this method only handle square matrix")
	}

	// Rotate 90 degree counter clockwise => flip the matrix over the main diagonal than reverse it
	// Flip the matrix in place over the main diagonal
	for i := 0; i < height; i++ {
		for j := i; j < width; j++ {
			matrix[j][i], matrix[i][j] = matrix[i][j], matrix[j][i]
		}
	}
	fmt.Print(matrix)

	// Reverse the rows of the matrix
	for i := 0; i*2 <= height-1; i++ {
		matrix[i], matrix[height-i-1] = matrix[height-i-1], matrix[i]
	}
	return matrix, nil
}
