let hour = 9;
if (hour < 10 || hour > 18) {
  alert('Wir sind geschlossen');
}

let hour = 12;
let minute = 30;
if (hour == 12 && minute == 30) {
  alert('Es ist 12:30 Uhr');
}

// age ist nicht  zw 14 и 90
if(!(age >= 14 && age <= 90)) // oder
if (age < 14 || age > 90)
