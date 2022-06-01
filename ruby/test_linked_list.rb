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
    hash = {:'10'=>'20', :'20'=>'30', :'30'=>nil}
    assert_equal hash, list.hash_nodes
  end

  def test_find
    list = LinkedList.new
    assert_nil list.find(10)
    list.append(10)
    assert_equal 10, list.find(10).value
    assert_nil list.find(20)
    list.append(20)
    assert_equal 10, list.find(10).value
    assert_equal 20, list.find(20).value
  end

  def test_append_after
    list = LinkedList.new
    assert_equal false, list.append_after(10, 30)

    list.append(10)
    list.append(20)
    list.append_after(10, 30)
    hash = {:'10'=>'30', :'30'=>'20', :'20'=>nil}
    assert_equal hash, list.hash_nodes
  end

  def test_find_before
    list = LinkedList.new
    list.append(10)
    assert_nil list.find_before(10)

    list.append(20)
    assert_equal 10, list.find_before(20).value
    assert_nil list.find_before(30)

    list.append(30)
    assert_equal 10, list.find_before(20).value
    assert_equal 20, list.find_before(30).value
  end
end
