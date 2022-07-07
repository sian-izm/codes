class Parenthes
  OPEN_PARENTH = '('
  OPEN_BRACE = '{'
  OPEN_BRACKET = '['
  CLOSE_PARENTH = ')'
  CLOSE_BRACE = '}'
  CLOSE_BRACKET = ']'
 
  def self.valid?(s)
    expected_close_patterns = []
    s.each_char do |str|
      if open_pattern?(str)
        expected_close_patterns.push(corresponding_close(str))
      elsif expected_close_patterns.any?
        case str
        when *different_close_patterns(expected_close_patterns)
          return false
        when expected_close_patterns.last
          expected_close_patterns.pop
        end
      elsif closes.include?(str)
        return false
      end
    end
    expected_close_patterns == [] ? true : false
  end

  def self.open_pattern?(str)
    corresponding_close(str) ? true : false
  end

  def self.corresponding_close(str)
    case str
    when OPEN_BRACE
      CLOSE_BRACE
    when OPEN_BRACKET
      CLOSE_BRACKET
    when OPEN_PARENTH
      CLOSE_PARENTH
    end
  end

  def self.opens
    [:BRACE, :BRACKET, :PARENTH].map {|str| eval("OPEN_#{str}")}
  end

  def self.closes
    [:BRACE, :BRACKET, :PARENTH].map {|str| eval("CLOSE_#{str}")}
  end

  def self.different_close_patterns(close)
    closes = [:BRACE, :BRACKET, :PARENTH].map {|str| eval("CLOSE_#{str}")}
    close.each {|str| closes.delete(str) }
    closes
  end
end
