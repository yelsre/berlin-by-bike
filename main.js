//to do
// add countdown timer
// make the sight appear at the top of the list
// add the change in velocity

const game = new Game();
let started = false;
let loading = true;

function preload() {
  biker = loadImage("./img/player/player.png");
  bikerN = loadImage(`./img/player/playerN.png`);
  bikerS = loadImage("./img/player/playerS.png");
  bikerE = loadImage("./img/player/playerE.png");
  bikerW = loadImage("./img/player/playerW.png");
  bikerNE = loadImage("./img/player/playerNE.png");
  bikerNW = loadImage("./img/player/playerNW.png");
  bikerSE = loadImage("./img/player/playerSE.png");
  bikerSW = loadImage("./img/player/playerSW.png");
  unseen = loadImage("./img/theme/unseen.png");
  seen = loadImage("./img/theme/seen.png");

  bgTilesLoaded = bgTiles.map((column) =>
    column.map((tile) => loadImage(tile))
  );

  loading = false;
}

function draw() {
  if (started && !loading) {
    game.draw();
  } else {
    background(0, 3, 0);
  }
}

function start() {
  started = true;
  loop();
}

function setup() {
  const gameCanvas = createCanvas(WIDTH, HEIGHT);
  const docCanvas = document.getElementById("defaultCanvas0");
  const docStart = document.createElement("div");
  const docInstructions = document.createElement("div");
  const button = document.createElement("button");

  gameCanvas.parent("game");
  docScore.innerText = game.score;
  docCanvas.style.display = "none";
  docStart.setAttribute("id", "start");
  docStart.classList.add("start-end");
  docInstructions.setAttribute("id", "instructions");
  docInstructions.innerHTML =
    "<h1> Instructions </h1>" +
    "<h2> 1. Explore Berlin by bike </h2>" +
    "<div>" +
    `<img src="img/player/playerE.png" alt="Bike player" width="70" height="70">` +
    "</div>" +
    `<h2> 2. See as many sights as you can <img src="img/theme/unseen.png" alt="Bike player" width="30" height="50"> </h2> ` +
    "<h2> 3. Before it gets dark </h2>";

  button.innerText = `Play.`;
  docGame.appendChild(docStart);
  docStart.appendChild(docInstructions);
  docInstructions.appendChild(button);
  button.onclick = () => {
    docCanvas.style.display = "";
    start();
    docStart.style.display = "none";
  };
  noLoop();
}
