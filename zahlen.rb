puts "gerade Zahlen"

for i in 2...10
  if (i % 2 == 0)
    puts i
  end
end

puts "ungerade Zahlen"

for i in 0...10
  if (i % 2 == 0)
    next
  end
  puts i
end
