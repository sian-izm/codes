require './node'

class LinkedList
  def initialize
    @head = nil      
  end

  def append(value)
    if @head
      find_tail.next = Node.new(value)
    else
      @head = Node.new(value)
    end
  end

  def find_tail
    node = @head
    return node if !node.next
    return node if !node.next while (node = node.next)
  end

  def append_after(target, value)
  end

  def find(value)
  end

  def delete(value)
  end

  def find_before(value)
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
    puts node
    hash = {node.value.to_s.to_sym => node.next&.value&.to_s}
    while node = node.next
      hash[node.value.to_s.to_sym] = node.next&.value&.to_s
    end
    hash
  end
end
