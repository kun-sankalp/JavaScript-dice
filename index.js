  var name1 = prompt("Enter Player 1 name:");
  var name2 = prompt("Enter Player 2 name:");

  document.querySelector(".p1").innerHTML = name1;
  document.querySelector(".p2").innerHTML = name2;

  var randomNumber1 = (Math.floor(Math.random() * 6) + 1);
  var randomNumber2 = (Math.floor(Math.random() * 6) + 1);

  document.querySelector(".img1").src = "images/dice" + randomNumber1 + ".png";
  document.querySelector(".img2").src = "images/dice" + randomNumber2 + ".png";


  if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
  } else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "👍Player " + name1 + " Wins!";
  } else {
    document.querySelector("h1").innerHTML = "👍Player " + name2 + " Wins!";
  }
