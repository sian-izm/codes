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

  def test_delete_single_node
    list = LinkedList.new
    list.append(10)
    assert_equal false, list.delete(20)
    assert_equal true, list.delete(10)
    assert_equal({}, list.hash_nodes)
  end

  def test_delete_mutiple_nodes
    list = LinkedList.new
    list.append(10)
    list.append(20)
    list.append(30)
    assert_equal true, list.delete(20)
    hash = {:'10'=>'30', :'30'=>nil}
    assert_equal hash, list.hash_nodes
  end

  def test_delete_head_from_multiple_nodes
    list = LinkedList.new
    list.append(10)
    list.append(20)
    list.append(30)
    assert_equal true, list.delete(10)
    hash = {:'20'=>'30', :'30'=>nil}
    assert_equal hash, list.hash_nodes
    assert_equal false, list.cycle?
  end

  def test_cycle
    list = LinkedList.new
    list.append(10)
    list.append(20)
    list.append(30)
    list.append(40, next_node: list.find(20))
    assert_equal true, list.cycle?
  end

  def test_index_of_cycle
    list = LinkedList.new
    list.append(10)
    list.append(20)
    list.append(30)
    list.append(40, next_node: list.find(20))
    assert_equal true, list.cycle?
    assert_equal 1, list.index_of_cycle
  end

  def test_delete_duplicate
    list = LinkedList.new
    list.append(10)
    list.append(20)
    list.append(30)
    list.append(30)
    list.append(40)
    hash = {:'10'=>'20', :'20'=>'30', :'30'=>'40', :'40'=>nil}
    assert_equal true, list.delete_duplicate
    assert_equal hash, list.hash_nodes
    assert_equal [10,20,30,40], list.array_values
  end
end
