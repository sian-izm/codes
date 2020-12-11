count = 0
flag = true

threads = [*1..10].map do |i|
  Thread.new do
    if flag
      count += 1
      flag = false
    end
  end
end

threads.each(&:join)
p count
