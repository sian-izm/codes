# frozen_string_literal: true

# def palindrome?(input)
#   input = input.gsub(/[^0-9A-Za-z]/, '').downcase
#   (0...input.size / 2).each do |i|
#     next if input[i] == input[input.size - i - 1]

#     return false
#   end
#   true
# end
def palindrome?(str)
  mid = str.size/2
  
  str[0...mid] == str[(str.size - mid)..str.size].reverse
end


require "test/unit"
class TestSample < Test::Unit::TestCase

  def test_palindrome
    assert_equal(palindrome?('aba'), true)
    assert_equal(palindrome?('ab'), false)
    assert palindrome?('aaa'), 'aaa'
    assert palindrome?('abcdedcba'), 'aaa'
    assert palindrome?('abc') == false, 'abc'
  end
end
