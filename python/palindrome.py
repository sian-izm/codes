import math


class Palindrome():
    def is_palindrome(self, str):
        length = len(str)
        for n in range(0, int(math.floor(length/2))):
            if str[n] != str[length-n-1]:
                return False
        return True
