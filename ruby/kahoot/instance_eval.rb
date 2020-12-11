class A
  @x = 1
end

A.instance_eval do
  def hoge
    p 'hogehoge'
  end
  p @x
  define_method :mogomogo do
    p 'mogomogo'
  end
end

A.new.mogomogo
p A.methods
