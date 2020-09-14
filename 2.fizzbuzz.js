for (var a = 1; a < 101; a++) {
  
  if (a % 3 == 0) console.log("Fizz");
  else if (a % 5 == 0) console.log("Buzz");
  else if (a % 3 == 0 && a % 5 == 0) console.log("FizzBuzz");
  else console.log(a);
} 

// mit while-Schleife
let a = 1
    while (a <= 100) {
      if (a % 3 == 0) console.log("Fizz");
      else if (a % 5 == 0) console.log("Buzz");
      else if (a % 15 == 0) console.log("FizzBazz");
      else console.log(a);
      a++;
    };
