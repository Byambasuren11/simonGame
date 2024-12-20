<<<<<<< HEAD
// Simon Game Implementation in JavaScript

// Initialize variables
let sequence = [];
let playerSequence = [];
let level = 0;

const colors = ["leftTop", "rightTop", "leftBottom", "rightBottom"];

// Start the game
function startGame() {
  sequence = [];
  playerSequence = [];
  level = 0;
  nextLevel();
}

// Generate the next sequence
function nextLevel() {
  level++;
  playerSequence = [];
  const nextColor = colors[Math.floor(Math.random() * colors.length)];
  sequence.push(nextColor);
  playSequence();
}

// Play the current sequence
function playSequence() {
  sequence.forEach((color, index) => {
    setTimeout(() => {
      flashColor(color);
    }, (index + 1) * 1000);
  });
}

// Flash the color on the screen
function flashColor(color) {
  const button = document.getElementById(color);
  button.style.animation = `ajillah${colors.indexOf(color) + 1} 1s linear`;
  setTimeout(() => {
    button.style.animation = "none";
  }, 1000);
}

// Handle player input
function handlePlayerInput(color) {
  playerSequence.push(color);
  flashColor(color);
  checkPlayerInput();
}

// Check if the player's input is correct
function checkPlayerInput() {
  const currentIndex = playerSequence.length - 1;

  if (playerSequence[currentIndex] !== sequence[currentIndex]) {
    alert("Game Over! Try again.");
    startGame();
    return;
  }

  if (playerSequence.length === sequence.length) {
    setTimeout(nextLevel, 800);
=======
let contains = document.getElementById("maincontain");
let baruundeed = document.createElement("button");
baruundeed.id = "right-top";
baruundeed.key = "4";
let zuundeed = document.createElement("button");
zuundeed.id = "left-top";
zuundeed.key = "3";
let baruundood = document.createElement("button");
baruundood.id = "right-bottom";
baruundood.key = "2";
let zuundood = document.createElement("button");
zuundood.id = "left-bottom";
zuundood.key = "1";
const buttonArray = [baruundeed, zuundeed, zuundood, baruundood];
const baruundeed1 = document
  .getElementById("maincontain")
  .appendChild(baruundeed);
document.getElementById("maincontain").appendChild(zuundeed);
document.getElementById("maincontain").appendChild(baruundood);
document.getElementById("maincontain").appendChild(zuundood);
zuundeed.className = "block";
zuundood.className = "block";
baruundeed.className = "block";
baruundood.className = "block";
let block1 = document.querySelector(".block");
let golToirog = document.createElement("div");
golToirog.id = "midCircle";
document.getElementById("maincontain").appendChild(golToirog);
let midCircle_garchig = document.createElement("h2");
midCircle_garchig.id = "midCircle_garchig";
midCircle_garchig.innerHTML = "simon";
let midCircle_dund = document.createElement("button");
midCircle_dund.id = "midCircle_dund";
midCircle_dund.innerHTML = "start";
let midCircle_dood = document.createElement("div");
midCircle_dood.id = "midCircle_dood";

document.getElementById("midCircle").appendChild(midCircle_garchig);
document.getElementById("midCircle").appendChild(midCircle_dund);
document.getElementById("midCircle").appendChild(midCircle_dood);

midCircle_dund.addEventListener("click", startFunction);
let random = [];
let current = 0;
let previous=[];
let start=false;
let i=1;
function startFunction() {
  midCircle_dood.innerHTML = i++;
  let randomToo = Math.floor(Math.random() * 4) + 1;
  current = randomToo;
  turnOnColor(current);
  random.push(randomToo);
//setTimeout();
  // console.log(previous);
}
function turnOnColor(randomToo) {
  if (randomToo === 4) {
    document.getElementById("right-top").style.animation = "ajillah4 1s linear";
    setTimeout(() => {
      document.getElementById("right-top").style.removeProperty("animation");
    }, 1000);
  } else if (randomToo === 3) {
    document.getElementById("left-top").style.animation = "ajillah3 1s linear";
    setTimeout(() => {
      document.getElementById("left-top").style.removeProperty("animation");
    }, 1000);
  } else if (randomToo === 2) {
    document.getElementById("right-bottom").style.animation =
      "ajillah2 1s linear";
    setTimeout(() => {
      document.getElementById("right-bottom").style.removeProperty("animation");
    }, 1000);
  } else if (randomToo === 1) {
    document.getElementById("left-bottom").style.animation =
      "ajillah1 1s linear";
    setTimeout(() => {
      document.getElementById("left-bottom").style.removeProperty("animation");
    }, 1000);
>>>>>>> 5ffebd77d47e48e9ae42435cd866230c4e3b96b8
  }
}
//setTimeout(startFunction,500);
buttonArray.forEach((value, index) => {
  function buttonClick() {
    
    if (Number(value.key) === random[random.length - 1]) {
      previous.push(value.key);
      if(random.length === previous.length){ 
        if(random[index]==previous[index]){

<<<<<<< HEAD
// UI Creation Code
let rightTop = document.createElement("button");
rightTop.id = "rightTop";
let leftTop = document.createElement("button");
leftTop.id = "leftTop";
let rightBottom = document.createElement("button");
rightBottom.id = "rightBottom";
let leftBottom = document.createElement("button");
leftBottom.id = "leftBottom";

[rightTop, leftTop, rightBottom, leftBottom].forEach((button) => {
  button.className = "color-button";
  document.getElementById("mainContain").appendChild(button);
});

let midCircle = document.createElement("div");
midCircle.id = "midCircle";

let midCircleTitle = document.createElement("h2");
midCircleTitle.id = "midCircle_garchig";
midCircleTitle.innerHTML = "Simon";

let startButton = document.createElement("button");
startButton.id = "midCircle_dund";
startButton.innerHTML = "Start";
let levelUp = document.createElement("div");

midCircle.append(midCircleTitle, startButton);
document.getElementById("mainContain").appendChild(midCircle);

// Set up event listeners
startButton.addEventListener("click", startGame);
document.querySelectorAll(".color-button").forEach((button) => {
  button.addEventListener("click", () => {
    handlePlayerInput(button.id);
  });
});

// Start the game when the page loads
//window.onload = startGame;
=======
        }

      }

      console.log(random);
      console.log(previous);
      
      
      startFunction()
      // if(previous==random[j]){
      //         startFunction();
      // }
      // else {
      //   console.log("buruu bllaa");
        
      // }


    }
    else {
      alert("buruu towch darlaa")
    }
  }

  value.addEventListener("click", buttonClick);
});

>>>>>>> 5ffebd77d47e48e9ae42435cd866230c4e3b96b8
