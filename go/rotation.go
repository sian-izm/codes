package main

import "fmt"

var arr = [][]float64{{1, 2, 3}, {4, 5, 6}, {7}}

func main() {
	if cap(arr) == 0 || cap(arr[0]) == 0 {
		return
	}

	result := make([][]float64, len(arr[0]))
	for i := range result {
		result[i] = make([]float64, len(arr))
	}

	for i, row := range arr {
		for j, v := range row {
			result[len(arr[0])-1-j][i] = v
		}
	}
	fmt.Println(result)
}
