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
  gameCanvas.parent("game-div");
  score.innerText = game.score;
  const gameDiv = document.getElementById("game-div");
  const canvasDiv = document.getElementById("defaultCanvas0");
  canvasDiv.style.display = "none";
  const button = document.createElement("button");
  button.innerText = `Play game`;
  gameDiv.appendChild(button);
  button.onclick = () => {
    canvasDiv.style.display = "";
    start();
    button.parentNode.removeChild(button);
  };
  noLoop();

  const poiVisited = document.createElement("ul");
  poiVisited.setAttribute("id", "poi-visited");
  document.body.appendChild(poiVisited);
}
