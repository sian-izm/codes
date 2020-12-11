package isStringPalindrome

func Run(str string) bool {
	n := len(str)
	for i := 0; i < len(str)/2; i++ {
		if str[i] != str[n-1-i] {
			return false
		}
	}
	return true
}
