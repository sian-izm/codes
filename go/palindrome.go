package palindrome

import (
	"testing"
)

//func main() {
//fmt.Print(IsPalindrome("aba"))
//	fmt.Print(IsPalindrome("ab"))
//}

func IsPalindrome(inputTxt string) bool {
	if inputTxt == "" {
		return false
	}

	lastIdx := len(inputTxt) - 1
	for idx := 0; idx < lastIdx/2; idx++ {
		if inputTxt[idx] == inputTxt[lastIdx-idx] {
			continue
		} else {
			return false
		}
	}

	return true
}

func TestIsPalindrome(t *testing.T) {
	tests := []struct {
		name     string
		inputTxt string
		want     bool
	}{
		{
			"Empty string",
			"",
			false,
		},
		{
			"Invalid 1",
			"abc",
			false,
		},
		{
			"Invalid 2",
			"aa aa bbbb",
			false,
		},
		{
			"Invalid 2",
			"ab",
			false,
		},
		{
			"Valid 1",
			"repaper",
			true,
		},
		{
			"Valid 2",
			"aba",
			true,
		},
		{
			"Valid 2",
			"aa",
			true,
		},
		{
			"Valid 3",
			"a",
			true,
		},
		{
			"Valid 4",
			"aa ,bb, aa",
			true,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := IsPalindrome(tt.inputTxt); got != tt.want {
				t.Errorf("IsPalindrome() = %v, want %v", got, tt.want)
			}
		})
	}
}
