import unittest
from palindrome import Palindrome


class TestPalindrome(unittest.TestCase):
    def test_aba(self):
        actual = Palindrome().is_palindrome("aba")
        self.assertTrue(actual)

    def test_abba(self):
        actual = Palindrome().is_palindrome("abba")
        self.assertTrue(actual)

    def test_abc(self):
        actual = Palindrome().is_palindrome("abc")
        self.assertFalse(actual)


if __name__ == "__main__":
    unittest.main()
