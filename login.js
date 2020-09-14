let login = prompt("Geben Sie bitte Ihr Login ein", '');

if (login == "admin") {

  let password = prompt('Geben Sie bitte Ihr Password eiроль?', '');

  if (password == "ichbinhierchef") {
    alert("Wilkommen");
  } else if (pass == '' || pass == null) {
    alert('Abgesagt');
  } else {
    alert("Leider falsch");
  }

} else if (login == '' || login == null) {
  alert('Abgesagt');
} else {
  alert("Ich kenne Sie nicht");
}

