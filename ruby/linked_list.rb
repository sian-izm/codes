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

    return unless node
    return node if node.value == value
    while node = node.next
      return node if node.value == value
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
    node = @head
    hash = {}
    hash[node.value] = 1
    while node
      break unless node.next
      if hash.key?(node.next.value)
        node.next = node.next.next
      end
      hash[node.next.value] = 1
      node = node.next
    end
    true
  end

  def find_before(value)
    node = @head

    return unless node.next
    return node if node.next.value == value
    while node = node.next
      return node if node&.next&.value == value
    end
  end

  def array_values
    node = @head
    array = [node.value]
    while node = node.next
      array.push(node.value)
    end
    array
  end

  def hash_nodes
    node = @head
    return {} unless node
    hash = {node.value.to_s.to_sym => node.next&.value&.to_s}
    while node = node.next
      hash[node.value.to_s.to_sym] = node.next&.value&.to_s
    end
    hash
  end
end
