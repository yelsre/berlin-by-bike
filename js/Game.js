class Game {
  constructor() {
    this.background = new Background();
    this.player = new Player();
    this.poiArray = poiArray.map(
      (element) =>
        new Poi(
          element[0].poixy[0],
          element[0].poixy[1],
          element[0].element.properties.name,
          element[0].element.properties.wiki,
          element[0].element.properties.wiki_img
        )
    );
    this.score = 0;
  }

  moveBackground() {
    // each background move consists of two things, moving the background by a step when the bike nears the edge of the screen, then swapping the tile to load new ones, but not trying to load tiles which dont exist
    // Travelling East
    if (
      this.player.x + this.player.width >= WIDTH - MAPLIMIT &&
      keyIsDown(ARROWRIGHT)
    ) {
      this.background.x -= STEP;
    }
    if (
      this.background.x <= -this.background.width &&
      this.background.rowTile < bgTiles[0].length - 3
    ) {
      this.background.rowTile += 1;
      this.background.x = 0;
    }
    // Travelling West
    if (this.player.x <= MAPLIMIT && keyIsDown(ARROWLEFT)) {
      this.background.x += STEP;
    }
    if (
      this.background.x >= this.background.width &&
      this.background.rowTile > 1
    ) {
      this.background.rowTile -= 1;
      this.background.x = 0;
    }
    // Travelling North
    if (this.player.y <= MAPLIMIT && keyIsDown(ARROWUP)) {
      this.background.y += STEP;
    }
    if (
      this.background.y >= this.background.height &&
      this.background.columnTile > 1
    ) {
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
    if (
      this.background.y <= -this.background.height &&
      this.background.columnTile < bgTiles.length - 2
    ) {
      this.background.columnTile += 1;
      this.background.y = 0;
    }
  }

  movePoi() {
    this.poiArray.forEach((poi) =>
      poi.movePoi(
        this.player.x,
        this.player.y,
        this.player.width,
        this.player.height
      )
    );
  }

  inCanvas() {
    this.player.inCanvas(
      this.background.x,
      this.background.y,
      this.background.width,
      this.background.height,
      this.background.columnTile,
      this.background.rowTile
    );
  }

  collisionCheck(player, poi) {
    const playerTopArea = player.y;
    const playerLeftArea = player.x;
    const playerRightArea = player.x + player.height;
    const playerBottomArea = player.y + player.height;

    const poiTopArea = poi.y;
    const poiLeftArea = poi.x;
    const poiRightArea = poi.x + poi.width;
    const poiBottomArea = poi.y + poi.height;

    const isTouchingOnLeft = poiRightArea > playerLeftArea;
    const isTouchingOnBottom = poiTopArea < playerBottomArea;
    const isTouchingOnRight = poiLeftArea < playerRightArea;
    const isTouchingOnTop = poiBottomArea > playerTopArea;

    return (
      isTouchingOnBottom &&
      isTouchingOnLeft &&
      isTouchingOnRight &&
      isTouchingOnTop
    );
  }

  calculateSightsSeen() {
    let sightsSeen = 0;
    for (i = 0; i < this.poiArray.length; i++) {
      if (this.poiArray[i].status === "active") {
        sightsSeen++;
      }
      this.score = sightsSeen;
    }
  }

  draw() {
    clear();
    this.inCanvas();
    if (this.player.isInCanvas) {
      this.moveBackground();
      this.movePoi();
    }
    this.background.draw();
    this.poiArray.forEach((poi) => poi.draw());
    this.player.draw();
    this.poiArray.forEach((poi) => {
      if (this.collisionCheck(this.player, poi)) {
        poi.status = "active";
      }
    });
    this.calculateSightsSeen();
    score.innerText = this.score;
  }
}
