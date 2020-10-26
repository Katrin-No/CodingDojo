<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Collabsable</title>
  <link rel="stylesheet" type="text/css" href="collabsable.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> 
  <script src="collabsable.js"></script>
</head>
<body>
  <main>
    <div class="col">
      <div class="col-title">Titel 1</div>
      <div class="col-text">Lorem ipsum dolor sit amet</div>
    </div>
    <div class="col">
      <div class="col-title">Titel 2</div>
      <div class="col-text">Lorem ipsum dolor sit amet</div>
    </div>
    <div class="col">
      <div class="col-title">Titel 3</div>
      <div class="col-text">Lorem ipsum dolor sit amet</div>
    </div>
  </main>
</body>

--------------------------------CSS------------------------------------
.container {
  margin: 5rem;
}

.col-text {
  display: none;
}

.col-title {
  position: relative;
  cursor: pointer
}

.col-title:before,
.col-title:after {
  content: '';
  width: 10px;
  height: 1px;
  background-color: blue;
  position: absolute;
  margin-left: -2rem;
  margin-top: .5rem;
}

.col-title::before {
  transform: rotate(40deg);
  left: 0;
}

.col-title::after {
  transform: rotate(-40deg);
  left: 7px;
}

.col-title.active:before {
  transform: rotate(-40deg);
}

.col-title.active:after {
  transform: rotate(40deg);
}

------------------------------Js & jQ----------------------------------------
$(document).ready(function() {
  $(".col-title").click(function(event) {
    $(this).toggleClass("active").next().slideToggle(300);
  });  
});