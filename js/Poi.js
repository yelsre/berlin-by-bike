class Poi {
  constructor() {
    this.x = WIDTH / 3;
    this.y = HEIGHT / 3;
    this.width = 10;
    this.height = 10;
    // this.lat = 52.5162781;
    // this.lon = 13.3777055;
  }

  movePoi(playerX, playerY, playerWidth, playerHeight) {
    // let currentTile =
    //   bgArray[this.background.columnTile][this.background.rowTile];
    // if(this.poi.lat2tile())
    // console.log(currentTile)
    // Travelling East
    if (playerX + playerWidth >= WIDTH - MAPLIMIT && keyIsDown(ARROWRIGHT)) {
      this.x -= STEP;
    }
    //  Travelling West
    if (playerX <= MAPLIMIT && keyIsDown(ARROWLEFT)) {
      this.x += STEP;
    }
    // Travelling North
    if (playerY <= MAPLIMIT && keyIsDown(ARROWUP)) {
      this.y += STEP;
    }
    // Travelling South
    if (playerY + playerHeight >= HEIGHT - MAPLIMIT && keyIsDown(ARROWDOWN)) {
      this.y -= STEP;
    }
  }

  draw() {
    rect(this.x, this.y, this.width, this.height);
  }
}
