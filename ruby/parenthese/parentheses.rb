class Parenthes
  OPEN_PARENTH = '('
  OPEN_BRACE = '{'
  OPEN_BRACKET = '['
  CLOSE_PARENTH = ')'
  CLOSE_BRACE = '}'
  CLOSE_BRACKET = ']'
 
  def self.valid?(s)
    corresponding_close = []
    s.each_char do |str|
      if find_corresponding_close(str)
        corresponding_close.push(find_corresponding_close(str))
      elsif (closes & corresponding_close) != []
        case str
        when *not_corresponding_close(corresponding_close)
          return false
        when corresponding_close.last
          corresponding_close.pop
        end
      elsif closes.include?(str)
        return false
      end
    end
    corresponding_close == [] ? true : false
  end

  def self.find_corresponding_close(open_str)
    case open_str
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

  def self.not_corresponding_close(close)
    closes = [:BRACE, :BRACKET, :PARENTH].map {|str| eval("CLOSE_#{str}")}
    close.each {|str| closes.delete(str) }
    closes
  end
end
