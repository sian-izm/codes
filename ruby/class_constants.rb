EXTERNAL_CONSTANT = 1

class SomeClass
  def initialize(hoge)
    @hoge = hoge
  end

  def call
    EXTERNAL_CONSTANT
  end
end

obj = SomeClass.new('hoge')
p obj.call


