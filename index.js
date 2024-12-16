const main = document.createElement("div");
main.id = "main";
document.getElementById("main").appendChild(main);
const topLeft = document.createElement("div");
topLeft.id = "topLeft";
topLeft.className = "block";
document.getElementById("main").appendChild(topLeft);
const topRight = document.createElement("div");
topRight.id = "topRight";
topRight.className = "block";
document.getElementById("main").appendChild(topRight);
const bottomLeft = document.createElement("div");
bottomLeft.id = "bottomLeft";
bottomLeft.className = "block";
document.getElementById("main").appendChild(bottomRight);
const bottomRight = document.createElement("div");
bottomRight.id = "bottomRight";
bottomRight.className = "block";
document.getElementById("main").appendChild(bottomRight);

// Adding CSS styles
