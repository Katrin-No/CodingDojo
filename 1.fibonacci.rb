a2 = 0
b2 = 1
c2 = a2 + b2
while (c2 <= 1000)
  puts c2
  c2 = a2 + b2
  a2 = b2
  b2 = c2
end


# Fibonacci
# Schreibe eine Funktion, welche prüft, ob eine gegebene Zahl eine Fibonacci Zahl ist.

def fibonacci_sequence(upper_limit)
  numbers = [0, 1]
  while numbers.last < upper_limit
    numbers << numbers.last(2).sum
  end
  numbers
end

def fib?(number)
  return false if number.nil?
  fibonacci_sequence(number).include? number
end
