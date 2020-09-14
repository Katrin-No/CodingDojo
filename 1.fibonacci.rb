a = 1
b = 1
c = a + b
puts (c = a + b)
a = c
puts (c = a + b)
b = c
puts (c = a + b)
a = c
puts (c = a + b)
b = c
puts (c = a + b)
a = c
puts (c = a + b)
b = c
puts (c = a + b)
a = c
puts (c = a + b)
b = c
puts (c = a + b)
a = c
puts (c = a + b)
b = c
puts (c = a + b)

puts "jetzt kommt die falsche Schleife"
aa = 1
bb = 1
cc = aa + bb
while (aa <= 1000)
  puts cc
  cc = aa + bb
  aa = cc
  cc = aa + bb
  bb = cc
  cc = aa + bb
end

puts "endlich kommt die richtige"
a2 = 0
b2 = 1
c2 = a2 + b2
while (c2 <= 1000)
  puts c2
  c2 = a2 + b2
  a2 = b2
  b2 = c2
end
