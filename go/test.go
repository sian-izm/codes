package main

import (
  "testing"
  "github.com/stretchr/testify/assert"
  "./isStringPalindrome"
)

func TestIsStringPalindrome(t *testing.T) {
	type args struct {
		str string
	}
	tests := []struct {
		name string
		args args
		want bool
	}{
		{name: "emptyString", args: args{""}, want: true},
		{name: "singleCharacter", args: args{"a"}, want: true},
		{name: "palindromeString", args: args{"abccba"}, want: true},
		{name: "repeatedCharactersString", args: args{"aaaaaaaaaaaa"}, want: true},
		{name: "allSpacesString", args: args{"          "}, want: true},
		{name: "notPalindromeString", args: args{"notApalindromeString"}, want: false},
		{name: "randomNotPalindromeString", args: args{"abcdefaa"}, want: false},
		{name: "caseSensitiveNotPalindromeString", args: args{"abccbA"}, want: false},
	}
	for _, tc := range tests {
		t.Run(tc.name, func(t *testing.T) {
			assert.Equal(t, tc.want, isStringPalindrome.Run(tc.args.str))
		})
	}
}
