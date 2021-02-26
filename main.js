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
  const docButton = document.createElement("div");
  const docInstructions = document.createElement("div");
  const button = document.createElement("button");

  gameCanvas.parent("game");
  docScore.innerText = game.score;
  docCanvas.style.display = "none";
  docStart.setAttribute("id", "start");
  docStart.classList.add("start-end");
  docInstructions.setAttribute("id", "instructions");
  docButton.setAttribute("id", "instructions-button");
  docInstructions.innerHTML =
    `<div id = "instructions-top">` + // top div
    "<div>" + // left arrow
    `<img src="img/theme/arrowUpL.png" alt="Arrow pointing to sights" width="30" height="100">` +
    "</div>" +
    "<div>" + // center top div
    "<h1> Instructions </h1>" +
    "<p> 1. Explore Berlin by bike </p>" +
    `<div id = "instructions-top-images">` +
    `<img src="img/theme/arrowRight.png" alt="Arrow pointing to player" width="40" height="60">` +
    `<img src="img/player/playerE.png" alt="Bike player" width="70" height="70">` +
    `<img src="img/theme/arrowKeys.png" alt="Arrow keys" width="70" height="50">` +
    "</div>" +
    "</div>" +
    "<div>" + // right arrow
    `<img src="img/theme/arrowUpR.png" alt="Arrow pointing to sights" width="40" height="100">` +
    "</div>" +
    "</div>" +
    `<div id = "instructions-bottom">` + // bottom div
    // `<div>` + // bottom div left
    `<img src="img/theme/unseen.png" alt="Unseen sight" width="30" height="50"></img>` +
    `<p> 2. See as many sights as you can  </p> ` +
    // "</div>" +
    // "<div>" + // bottom div right
    "<p> 3. Before it gets dark </p>" +
    `<img src="img/theme/moon.png" alt="Moon icon" width="40" height="45"></img>` +
    // "</div>" +
    "</div>";

  button.innerText = `Play.`;
  docGame.appendChild(docStart);
  docStart.appendChild(docInstructions);
  docInstructions.appendChild(docButton).appendChild(button);
  button.onclick = () => {
    docCanvas.style.display = "";
    start();
    docStart.style.display = "none";
  };

  const docEnd = document.createElement("div");
  docEnd.setAttribute("id", "end");
  docEnd.classList.add("start-end");
  docGame.appendChild(docEnd);
  docEnd.innerHTML =
    "<h1> Time to go home </h1>" +
    `<div id = "end-center">` +
    `<img src="img/theme/moon.png" alt="Moon" width="70" height="80"></img>` +
    `<div>` +
    `<p>You saw <span id="end-score"></span> sights on your journey!</p>` +
    `<br>` +
    `<p>Discover more about where you visited below.</p>` +
    `</div>` +
    `</div>` +
    `<div id = "end-bottom">` +
    `</div>`;
  docEnd.style.display = "none";
  noLoop();
}
