class Parenthes
  OPEN_PARENTH = '('
  OPEN_BRACE = '{'
  OPEN_BRACKET = '['
  CLOSE_PARENTH = ')'
  CLOSE_BRACE = '}'
  CLOSE_BRACKET = ']'
 
  def self.valid?(s)
    corresponding_close = ''
    s.each_char do |str|
      if corresponding_close == ''
        corresponding_close = case str
                when OPEN_BRACE
                  CLOSE_BRACE
                when OPEN_BRACKET
                  CLOSE_BRACE
                when OPEN_PARENTH
                  CLOSE_PARENTH
                end
      elsif [CLOSE_BRACE, CLOSE_BRACKET, CLOSE_PARENTH].include?(corresponding_close)
        case str
        when OPEN_BRACE, OPEN_BRACKET, OPEN_PARENTH, *not_corresponding_close(corresponding_close)
          return false
        when corresponding_close
          corresponding_close = ''
        end        
      end
    end
    true
  end

  def self.not_corresponding_close(close)
    closes = [CLOSE_BRACE, CLOSE_BRACKET, CLOSE_PARENTH]
    closes.delete(close)
    closes
  end
end
