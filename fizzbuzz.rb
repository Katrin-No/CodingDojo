for a in 1...100
  if (a % 5) == 0 && (a % 3) == 0
    puts "FizzBuzz"
  elsif (a % 5) == 0
    puts "Buzz"
  elsif (a % 3) == 0
    puts "Fizz"
  else
    puts a
  end
end

a = 1
while (a <= 100)
  if (a % 5) == 0 && (a % 3) == 0
    puts "FizzBuzz"
  elsif (a % 5) == 0
    puts "Buzz"
  elsif (a % 3) == 0
    puts "Fizz"
  else
    puts a
  end
  a = a + 1
end
