// gerade Zahlen
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert( i );
  }
}

// ungerade Zahlen
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) continue; // continue == next in ruby =)
  alert(i);
  }
}

// einfache Zahlen
nextNumber: //metka
    for (let n = 2; n <= 20; n++) {
      for (let j = 2; j < n; j++) {
        if (n % j == 0) continue nextNumber;
      }
      alert(n);
    }
