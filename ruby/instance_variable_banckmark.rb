require 'benchmark'

def non_cache
  a = '1'
end

def cache
  @cache ||= begin
    '1'
  end
end

n = 5_000_000
Benchmark.bm do |x|
  x.report { n.times do; non_cache; end }
  x.report { n.times do; cache; end }
end

