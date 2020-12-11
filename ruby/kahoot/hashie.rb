hashie = Hash.new { |hash, key| hash[key] = "No key #{key}"}
p hashie[:hoge]
hashie[:brown] = "Fried"
hashie[:huga] = "Huga"
p hashie
hashie.default(:brown)
p hashie

hoge = Hash.new('a')
#p hoge.default
hoge[:mogo] = 'mogo'
#p hoge.default(:mogo)
#p hoge
