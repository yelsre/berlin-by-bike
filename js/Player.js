class Player {
  constructor() {
    this.x = WIDTH / 2;
    this.y = HEIGHT / 2;
    this.width = 70;
    this.height = 40;
    this.orientation = EAST;
  }

  draw() {
    // move the player depending on the key pressed, and then change orientation
    // make sure only one key is pressed
    const isArrowUp = keyIsDown(ARROWUP);
    const isArrowDown = keyIsDown(ARROWDOWN);
    const isArrowLeft = keyIsDown(ARROWLEFT);
    const isArrowRight = keyIsDown(ARROWRIGHT);
    if (isArrowUp && !isArrowDown && !isArrowLeft && !isArrowRight) {
      this.moveNorth(STEP);
      this.height = 70;
    }
    if (isArrowDown && !isArrowUp && !isArrowLeft && !isArrowRight) {
      this.moveSouth(STEP);
      this.height = 70;
    }
    if (isArrowRight && !isArrowUp && !isArrowDown && !isArrowLeft) {
      this.moveEast(STEP);
      this.height = 40;
    }
    if (isArrowLeft && !isArrowUp && !isArrowDown && !isArrowRight) {
      this.moveWest(STEP);
      this.height = 40;
    }
    // account for the case where two keys are pressed ensuring same velocity (pythagoras)
    // https://p5.readthedocs.io/en/latest/tutorials/vector.html
    if (isArrowUp && isArrowRight) {
      this.moveNorth(STEPDIAGONAL, NORTHEAST);
      this.moveEast(STEPDIAGONAL, NORTHEAST);
      this.height = 70;
    }
    if (isArrowUp && isArrowLeft) {
      this.moveNorth(STEPDIAGONAL, NORTHWEST);
      this.moveWest(STEPDIAGONAL, NORTHWEST);
      this.height = 70;
    }
    if (isArrowDown && isArrowRight) {
      this.moveSouth(STEPDIAGONAL, SOUTHEAST);
      this.moveEast(STEPDIAGONAL, SOUTHEAST);
      this.height = 70;
    }
    if (isArrowDown && isArrowLeft) {
      this.moveSouth(STEPDIAGONAL, SOUTHWEST);
      this.moveWest(STEPDIAGONAL, SOUTHWEST);
      this.height = 70;
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
}
