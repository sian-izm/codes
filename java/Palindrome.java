public class Palindrome {
    public static void main(String[] args) {
        Palindrome palindrome = new Palindrome();
        boolean isPalindrome = palindrome.isPalindrome("madam");
    }
     public boolean isPalindrome(String str) {
        String palindromeStr = str.replaceAll("\\s+", "").toLowerCase();
        int n = palindromeStr.length();
        for( int i = 0; i < n/2; i++ )
            if (palindromeStr .charAt(i) != palindromeStr .charAt(n-i-1))  return false;
        return true;
    }
}