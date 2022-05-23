# frozen_string_literal: true

require './palindrome'

RSpec.describe 'palindrome?' do
  context 'is palindrome' do
    it {
      palindromes = ['112211', "Don't nod.", 'I did, did I?', 'My gym', 'Red rum, sir, is murder', 'Step on no pets',
                     'Top spot', 'Was it a cat I saw?', 'Eva, can I see bees in a cave?', 'No lemon, no melon'].freeze
      palindromes.each do |p|
        expect(palindrome?(p)).to be_truthy
      end
    }
  end

  context 'is not palindrome' do
    it {
      not_palindromes = ['ABC', 'sagaspohqwpoqw', '123321231', 'this is definitely a palindrome'].freeze
      not_palindromes.each do |np|
        expect(palindrome?(np)).to be_falsey
      end
    }
  end
end
