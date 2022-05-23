result = {}
a = {x:1, y: 1}
b = {x:2, y: 2, z: 3}
fact = 10

result.merge!(a) {|k,v1,v2| (v1 + v2) * fact}
p result
result.merge!(b) {|k,v1,v2| (v1 + v2) * fact}
p result
