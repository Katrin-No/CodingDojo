for (var a = 1; a < 101; a++) {
  
  if (a % 3 == 0) console.log("Fizz");
  else if (a % 5 == 0) console.log("Buzz");
  else if (a % 3 == 0 && a % 5 == 0) console.log("FizzBuzz");
  else console.log(a);
} 
