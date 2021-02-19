// change the player image depending on button pressed
// 2. player switch between several background images
// 3. create sightseeing objects
// 4. collide identification with sightseeing objects

const game = new Game();

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

  // bgTilesLoaded = bgTiles[4].map(tile => loadImage(tile));
  bgTilesLoaded = bgTiles.map((column) =>
    column.map((tile) => loadImage(tile))
  );
}

function draw() {
  game.draw();
}

function setup() {
  createCanvas(WIDTH, HEIGHT);
  score.innerText = game.score;
}
