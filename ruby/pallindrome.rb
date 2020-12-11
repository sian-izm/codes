# frozen_string_literal: true

def palindrome?(str)
  raise ArgumentError, 'not a string' unless str.is_a?(String)

  str = str.downcase.gsub(/\s+/, '')
  length = str.length
  return false if length < 2

  (0...length / 2).none? { |i| str[i] != str[length - i - 1] }
end
