class LogLine
  include Comparable

  attr_accessor :timestamp, :message
  def initialize(timestamp, message)
    @timestamp = timestamp
    @message = message
  end

  def <=> (log_line2)
    return timestamp <=> log_line2.timestamp unless timestamp == log_line2.timestamp
    message <=> log_line2.message
  end
end

now = Time.now
time1 = now + 3
time2 = now
time3 = now + 1
log_line = LogLine.new(time1, 'ABC')
log_line2 = LogLine.new(time2, 'DEF')
log_line3 = LogLine.new(time3, 'GHI')

p [log_line, log_line2, log_line3].sort
p log_line < log_line2
