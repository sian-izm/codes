require './linked_list'
require 'minitest/autorun'

class TestLinkedList < Minitest::Test
  def test_return_values
    list = LinkedList.new
    list.append(10)
    list.append(20)
    list.append(30)
    assert_equal [10,20,30], list.array_values
  end

  def test_pair_next_value
    list = LinkedList.new
    list.append(10)
    list.append(20)
    list.append(30)
    hash = {'10'=>'20', '20'=>'30', '30'=>nil}
    assert_equal hash, list.hash_nodes
  end
end
