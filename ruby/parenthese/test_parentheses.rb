require './parentheses'
require 'minitest/autorun'

class TestValidParentheses < Minitest::Test
  def test_valid_single_parenthes
    str = '(abc)'
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
    str = '(ab)cd{ef}'
    assert_equal true, Parenthes.valid?(str)
  end

  def test_invalid_parenthes
    str = '(a(bc'
    assert_equal false, Parenthes.valid?(str)
  end

  def test_invalid_opens
    str = '(a{b]c}'
    assert_equal false, Parenthes.valid?(str)
  end

  def test_no_parenthes
    str = ''
    assert_equal true, Parenthes.valid?(str)
  end

  def test_only_multiple_parentes
    str = '(){}[]'
    assert_equal true, Parenthes.valid?(str)
  end

  def test_nested_parenthes
    str = '{[]}'
    assert_equal true, Parenthes.valid?(str)
  end
end
