<?php

/**
* Check a string is Palindrome
*
* @param  String  $str
* @return true|false
*/
function isPalindrome($str): bool {
    if (!is_string($str) || empty($str) || $str == '' || strpos($str, ' ') !== false) {
        throw new InvalidArgumentException(sprintf('"%s" is not a valid string', $str));
    }
    $n = strlen($str);
    for ($i = 0; $i <= $n / 2; $i++) {
        if ($str[$i] !== $str[$n-1-$i]) return false;
    }
    return true;
}
?>