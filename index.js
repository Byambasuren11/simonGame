let contains = document.getElementById("maincontain");
let baruundeed = document.createElement("button");
baruundeed.id = "right-top";
let zuundeed = document.createElement("button");
zuundeed.id = "left-top";
let baruundood = document.createElement("button");
baruundood.id = "right-bottom";
let zuundood = document.createElement("button");
zuundood.id = "left-bottom";
document.getElementById("maincontain").appendChild(baruundeed);
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
// midCircle_dood.type="number";
// midCircle_dood.min="1";
// midCircle_dood.max="5"
baruundeed = 1;
baruundood = 2;
zuundeed = 3;
zuundood = 4;
document.getElementById("midCircle").appendChild(midCircle_garchig);
document.getElementById("midCircle").appendChild(midCircle_dund);
document.getElementById("midCircle").appendChild(midCircle_dood);

midCircle_dund.addEventListener("click", startFunction);
function startFunction() {
  midCircle_dood.innerHTML="1"
  let random = [];
  do {
    let randomToo = Math.floor(Math.random() * 4) + 1;
    if (randomToo === 4) {
      document.getElementById("right-top").style.animation =
        "ajillah4 1s linear";
    } else if (randomToo === 3) {
      document.getElementById("left-top").style.animation =
        "ajillah3 1s linear";
    } else if (randomToo === 2) {
      document.getElementById("right-bottom").style.animation =
        "ajillah2 1s linear";
    } else if (randomToo === 1) {
      document.getElementById("left-bottom").style.animation =
        "ajillah1 1s linear";
    }
    random.push(randomToo);
    clickButton();
    console.log(random);
  } while (random.length < 5);
  {
    console.log("hello world");
  }
}
function clickButton(){
  
}

// document.getElementById("right-top").style.animation="ajillah 1s linear";

// zuundood=4
// if(midCircle_dund===4) {
//     zuundood.style.backgroundColor="white";
// }
