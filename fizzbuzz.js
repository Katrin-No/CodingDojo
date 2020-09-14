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


// gerade und ungerade Zahlen
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert( i );
  }
}

for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) continue; // continue == next in ruby =)
  alert(i);
  }
}
