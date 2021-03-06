class Poi {
  constructor(poix, poiy, name, wiki, wiki_img, img_att) {
    this.x = poix;
    this.y = poiy;
    this.width = 30;
    this.height = 50;
    this.name = name;
    this.wiki = wiki;
    this.wiki_img = wiki_img;
    this.img_att = img_att;
    this.status = "inactive";
  }

  //calculate x and y location of Poi

  movePoi(playerX, playerY, playerWidth, playerHeight, playerVelocity) {
    let STEP = playerVelocity;
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
      image(unseen, this.x, this.y - this.height, this.width, this.height);
    } else {
      image(seen, this.x, this.y - this.height, this.width, this.height);
    }
  }
}
