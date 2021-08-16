
//<---- First Dice --->
var randomNumber1 = Math.floor(Math.random()*6) + 1;   // random a number 1-6
var randomDiceImage = "dice" + randomNumber1 + ".png"; // putting the full location dice + 1 + .png --> dice1.png
var randomImageSource = "images/" + randomDiceImage;  // connect it to the folder of images
var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);   // setting the image to the new source image after randomize it.


//<---- Second Dice ---->
var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomDiceImage = "dice" + randomNumber2 + ".png";
var randomImageSource = "images/" + randomDiceImage;

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource);

// Checking which player got the higher score and represent it on screen the winner.
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Win's!"
}else if(randomNumber2> randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 Win's! 🚩"
}else
  document.querySelector("h1").innerHTML = "Its Draw! try again"

document.querySelector(".refresh").addEventListener("click", refreshing);

function refreshing() {
  location.reload();
}

