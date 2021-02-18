class Game {
  constructor() {
    this.background = new Background();
    this.player = new Player();
    this.poi = new Poi();
  }

  setup() {}

  moveBackground() {
    // each background move consists of two things, moving the background by a step when the bike nears the edge of the screen, then swapping the tile to load new ones
    // Travelling East
    if (
      this.player.x + this.player.width >= WIDTH - MAPLIMIT &&
      keyIsDown(ARROWRIGHT)
    ) {
      this.background.x -= STEP;
    }
    if (this.background.x <= -this.background.width) {
      this.background.rowTile += 1;
      this.background.x = 0;
    }
    // Travelling West
    if (this.player.x <= MAPLIMIT && keyIsDown(ARROWLEFT)) {
      this.background.x += STEP;
    }
    if (this.background.x >= this.background.width) {
      this.background.rowTile -= 1;
      this.background.x = 0;
    }
    // Travelling North
    if (this.player.y <= MAPLIMIT && keyIsDown(ARROWUP)) {
      this.background.y += STEP;
    }
    if (this.background.y >= this.background.height) {
      this.background.columnTile -= 1;
      this.background.y = 0;
    }
    // Travelling South
    if (
      this.player.y + this.player.height >= HEIGHT - MAPLIMIT &&
      keyIsDown(ARROWDOWN)
    ) {
      this.background.y -= STEP;
    }
    if (this.background.y <= -this.background.height) {
      this.background.columnTile += 1;
      this.background.y = 0;
    }
  }

  movePoi() {
    this.poi.movePoi(
      this.player.x,
      this.player.y,
      this.player.width,
      this.player.height
    );
    // let currentTile =
    // bgArray[this.background.columnTile][this.background.rowTile];
    // if(this.poi.lat2tile())
    // console.log(currentTile)
  }

  draw() {
    clear();
    this.moveBackground();
    this.movePoi();
    this.background.draw();
    this.poi.draw();
    this.player.draw();
  }
}
