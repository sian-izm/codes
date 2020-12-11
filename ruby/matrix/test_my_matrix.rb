# frozen_string_literal: true

require 'minitest/autorun'
require './my_matrix'

# Test for MyMatrix
class TestMyMatrix < Minitest::Test
  def test_invalid_matrix
    assert_raises ArgumentError do
      MyMatrix.new(1)
    end
    assert_raises ArgumentError do
      MyMatrix.new('abc')
    end
    assert_raises ArgumentError do
      MyMatrix.new([1, [2, 3]])
    end
  end

  def test_rotate_counter_clockwise
    assert_equal [1], MyMatrix.new([1]).rotate_counter_clockwise
    assert_equal [[3, 6, 9], [2, 5, 8], [1, 4, 7]],
                 MyMatrix.new([[1, 2, 3], [4, 5, 6], [7, 8, 9]]).rotate_counter_clockwise
  end
end
