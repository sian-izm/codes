class MyCommandHandler
  def initialize(repository, adapter)
    @repository = repository
    @adapter = adapter
    make_threadsafe_by_stateless
  end

  def call(cmd)
    obj = @repository.find(cmd.id)
    obj.do_something
    @repository.update(obj)
    @adapter.notify(SomethingHappened.new(cmd.id))
  end

  private

  def make_threadsafe_by_stateless
    freeze
  end
end

class Hoge
  def self.something
    p 'hoge'
  end
end

command = MyCommandHandler.new
command.call(Hoge)
