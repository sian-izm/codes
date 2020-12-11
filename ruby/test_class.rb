module Testmod
  def client(arg)
    @credential ||= arg
  end
end


include Testmod

p client('credentialA')
p client('credentialB')
