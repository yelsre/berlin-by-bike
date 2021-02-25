class Player {
  constructor() {
    this.x = WIDTH / 2;
    this.y = HEIGHT / 2;
    this.width = 70;
    this.height = 70;
    this.orientation = EAST;
    this.isInCanvas = true;
    this.velocity = 0;
  }

  inCanvas(bgX, bgY, bgWidth, bgHeight, bgColumnTile, bgRowTile) {
    if (
      (bgRowTile === bgTiles[0].length - 3 &&
        bgX <= -TILEWIDTHHEIGHT &&
        this.x >= WIDTH - MAPLIMIT - this.width) ||
      (bgRowTile === 1 && bgX >= TILEWIDTHHEIGHT && this.x <= MAPLIMIT) ||
      (bgColumnTile === bgTiles.length - 2 &&
        bgY <= -TILEWIDTHHEIGHT &&
        this.y >= HEIGHT - MAPLIMIT - this.height) ||
      (bgColumnTile === 1 && bgY >= TILEWIDTHHEIGHT && this.y <= MAPLIMIT)
    ) {
      this.isInCanvas = false;
    } else {
      this.isInCanvas = true;
    }
  }

  // Player movements ================================== //
  moveNorth(steps, orientation = NORTH) {
    this.y -= steps;
    if (this.y < MAPLIMIT) {
      this.y = MAPLIMIT;
    }
    this.orientation = orientation;
  }
  moveSouth(steps, orientation = SOUTH) {
    this.y += steps;
    if (this.y + this.height > HEIGHT - MAPLIMIT) {
      this.y = HEIGHT - MAPLIMIT - this.height;
    }
    this.orientation = orientation;
  }
  moveEast(steps, orientation = EAST) {
    this.x += steps;
    if (this.x + this.width > WIDTH - MAPLIMIT) {
      this.x = WIDTH - MAPLIMIT - this.width;
    }
    this.orientation = orientation;
  }
  moveWest(steps, orientation = WEST) {
    this.x -= steps;
    if (this.x < MAPLIMIT) {
      this.x = MAPLIMIT;
    }
    this.orientation = orientation;
  }

  draw() {
    // move the player depending on the key pressed, and then change orientation
    // make sure only one key is pressed
    let STEP = this.velocity;
    let STEPDIAGONAL = Math.sqrt((STEP * STEP) / 2);
    if (this.velocity >= MAXVELOCITY) {
      this.velocity = MAXVELOCITY;
    }
    const isArrowUp = keyIsDown(ARROWUP);
    const isArrowDown = keyIsDown(ARROWDOWN);
    const isArrowLeft = keyIsDown(ARROWLEFT);
    const isArrowRight = keyIsDown(ARROWRIGHT);
    if (isArrowUp && !isArrowDown && !isArrowLeft && !isArrowRight) {
      this.velocity += ACCELERATION;
      this.moveNorth(STEP);
    }
    if (isArrowDown && !isArrowUp && !isArrowLeft && !isArrowRight) {
      this.velocity += ACCELERATION;
      this.moveSouth(STEP);
    }
    if (isArrowRight && !isArrowUp && !isArrowDown && !isArrowLeft) {
      this.velocity += ACCELERATION;
      this.moveEast(STEP);
    }
    if (isArrowLeft && !isArrowUp && !isArrowDown && !isArrowRight) {
      this.velocity += ACCELERATION;
      this.moveWest(STEP);
    }
    // account for the case where two keys are pressed ensuring same velocity (pythagoras)
    // https://p5.readthedocs.io/en/latest/tutorials/vector.html
    if (isArrowUp && isArrowRight) {
      this.velocity += ACCELERATION;
      this.moveNorth(STEPDIAGONAL, NORTHEAST);
      this.moveEast(STEPDIAGONAL, NORTHEAST);
    }
    if (isArrowUp && isArrowLeft) {
      this.velocity += ACCELERATION;
      this.moveNorth(STEPDIAGONAL, NORTHWEST);
      this.moveWest(STEPDIAGONAL, NORTHWEST);
    }
    if (isArrowDown && isArrowRight) {
      this.velocity += ACCELERATION;
      this.moveSouth(STEPDIAGONAL, SOUTHEAST);
      this.moveEast(STEPDIAGONAL, SOUTHEAST);
    }
    if (isArrowDown && isArrowLeft) {
      this.velocity += ACCELERATION;
      this.moveSouth(STEPDIAGONAL, SOUTHWEST);
      this.moveWest(STEPDIAGONAL, SOUTHWEST);
    }
    if (!isArrowDown && !isArrowUp && !isArrowLeft && !isArrowRight) {
      this.velocity = 0;
    }
    // change the character image depending on orientation
    if (this.orientation === NORTH) {
      image(bikerN, this.x, this.y, this.width, this.height);
    } else if (this.orientation === SOUTH) {
      image(bikerS, this.x, this.y, this.width, this.height);
    } else if (this.orientation === EAST) {
      image(bikerE, this.x, this.y, this.width, this.height);
    } else if (this.orientation === WEST) {
      image(bikerW, this.x, this.y, this.width, this.height);
    } else if (this.orientation === NORTHEAST) {
      image(bikerNE, this.x, this.y, this.width, this.height);
    } else if (this.orientation === NORTHWEST) {
      image(bikerNW, this.x, this.y, this.width, this.height);
    } else if (this.orientation === SOUTHEAST) {
      image(bikerSE, this.x, this.y, this.width, this.height);
    } else if (this.orientation === SOUTHWEST) {
      image(bikerSW, this.x, this.y, this.width, this.height);
    } else {
      // image (bikerE, this.x, this.y, this.width, this.height);
    }
  }
}
