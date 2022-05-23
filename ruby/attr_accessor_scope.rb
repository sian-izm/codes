class PublicAccessor
  attr_accessor :name, :id

  def initialize(name:, id:)
    self.name = name
    self.id = id
  end

  def hello
    'hello' + name
  end
end

class PrivateAccessor
  def initialize(name:, id:)
    @name = name
    @id = id
  end

  def hello
    'hello' + name
  end
  private
  attr_reader :name, :id
end

public_obj = PublicAccessor.new(name: 'test', id: 123)
p public_obj.name
p public_obj.hello

private_obj = PrivateAccessor.new(name: 'test', id: 123)
p private_obj.name
p private_obj.hello
