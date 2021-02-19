class Poi {
  constructor(poix, poiy, name, wiki, wiki_img) {
    this.x = poix;
    this.y = poiy;
    this.width = 10;
    this.height = 10;
    this.name = name;
    this.wiki = wiki;
    this.wiki_img = wiki_img;
    this.status = "inactive";
  }

  //calculate x and y location of Poi

  movePoi(playerX, playerY, playerWidth, playerHeight) {
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
    if (this.status === "inactive") {
      rect(
        this.x - this.width / 2,
        this.y - this.height / 2,
        this.width,
        this.height
      );
    } else {
      rect(
        this.x - this.width / 2,
        this.y - this.height / 2,
        this.width * 2,
        this.height * 2
      );
    }
  }
}
