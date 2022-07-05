require './parentheses'
require 'minitest/autorun'

class TestValidParentheses < Minitest::Test
  def test_valid_single_parenthes
    str = 'abc()'
    assert_equal true, Parenthes.valid?(str)
  end

  def test_valid_single_bracket
    str = 'ab[c]'
    assert_equal true, Parenthes.valid?(str)
  end

  def test_valid_single_brace
    str = '{}abc'
    assert_equal true, Parenthes.valid?(str)
  end

  def test_valid_mutiple_type_parenthes
  end

  def test_invalid_parenthes
    str = '(a(bc'
    assert_equal false, Parenthes.valid?(str)
  end
end
