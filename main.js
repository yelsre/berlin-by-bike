//to do
// add countdown timer
// make the sight appear at the top of the list
// add the change in velocity

const game = new Game();
let started = false;

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

  bgTilesLoaded = bgTiles.map((column) =>
    column.map((tile) => loadImage(tile))
  );
}

function draw() {
  if (started) {
    game.draw();
  }
}

function start() {
  started = true;
  loop();
}

function setup() {
  const gameCanvas = createCanvas(WIDTH, HEIGHT);
  const docCanvas = document.getElementById("defaultCanvas0");
  const button = document.createElement("button");
  const poiVisited = document.createElement("ul");

  gameCanvas.parent("game");
  docScore.innerText = game.score;
  docCanvas.style.display = "none";
  button.innerText = `Play game`;
  docGame.appendChild(button);
  button.onclick = () => {
    docCanvas.style.display = "";
    start();
    button.parentNode.removeChild(button);
  };
  noLoop();
  poiVisited.setAttribute("id", "poi-visited");
  document.body.appendChild(poiVisited);
}
