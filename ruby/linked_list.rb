require './node'

class LinkedList
  def initialize
    @head = nil      
  end

  def append(value, next_node: nil)
    if @head
      find_tail.next = Node.new(value)
    else
      @head = Node.new(value)
    end
    if next_node
      find_tail.next = next_node
    end
  end

  def find_tail
    node = @head
    return node if !node.next
    return node if !node.next while (node = node.next)
  end

  def append_after(target, value)
    return false unless node = find(target)

    old_next = node.next
    node.next = Node.new(value)
    node.next.next = old_next
  end

  def find(value)
    node = @head

    while node
      return node if node.value == value
      node = node.next
    end
  end

  def delete(value)
    target = find(value)
    return false unless target

    before_node = find_before(value)
    unless before_node
      @head = @head.next
      return true
    end

    before_node.next = target.next
    return true
  end

  def cycle?
    node = @head
    array = []
    while node
      return true if array.include?(node)
      array.push(node)
      node = node.next
    end
    false
  end

  def index_of_cycle
    node = @head
    array = [node]
    while node = node.next
      if index = array.index(node)
        return index
      end
      array.push(node)
    end
    -1
  end

  def delete_duplicate
    return unless @head
    node = @head
    hash = {}
    hash[node.value] = 1
    while node
      break unless node.next
      if hash.key?(node.next.value)
        node.next = find_next_not_duplicated_node(hash, node)
      end
      hash[node.next.value] = 1 if node.next
      node = node.next
    end
    true
  end

  def find_next_not_duplicated_node(hash, node)
    if node.next && hash.key?(node.next.value)
      find_next_not_duplicated_node(hash, node.next)
    else
      node.next
    end
  end

  def delete_duplicate_all
    return unless @head
    node = @head
    hash = {}
    hash[node.value] = 1
    if hash.key?(node.next&.value)
      @head = find_next_not_duplicated_node(hash, node)
      hash[@head.value] = 1
      delete_duplicated_own_and_next_node_of_head(hash, @head)
      node = @head
    end

    while node
      break unless node.next
      hash[node.next.value] = 1
      delete_duplicated_own_and_next_node(hash, node)
      node = node.next
    end
  end

  def delete_duplicated_own_and_next_node_of_head(hash, node)
    if hash.key?(node.next&.value)
      @head = find_next_not_duplicated_node(hash, node.next)
      hash[@head.value] = 1
      delete_duplicated_own_and_next_node(hash, @head)
    end
  end

  def delete_duplicated_own_and_next_node(hash, node)
    if hash.key?(node.next&.next&.value)
      node.next = find_next_not_duplicated_node(hash, node)
      hash[node.next.value] = 1
      delete_duplicated_own_and_next_node(hash, node)
    end
  end

  def find_before(value)
    node = @head

    return unless node.next
    while node
      return node if node&.next&.value == value
      node = node.next
    end
  end

  def array_values
    node = @head
    array = []
    while node
      array.push(node.value)
      node = node.next
    end
    array
  end

  def hash_nodes
    node = @head
    hash = {}
    while node
      hash[node.value.to_s.to_sym] = node.next&.value&.to_s
      node = node.next
    end
    hash
  end

  def self.add_two_numbers(l1, l2)
    # validate - 1 digit number
    l1_values = l2.array_values.inject(0, :+)
    l2_values = l2.array_values.inject(0, :+)
    sum = l1_values + l2_values
    list = self.new

    sum.digits.each do |num|
      puts num
      list.append(num)
    end
    return list
  end
end
