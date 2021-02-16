class Player {
    constructor() {
        this.x = WIDTH/2;
        this.y = HEIGHT/2;
        this.width = 70;
        this.height = 40; 
        this.orientation = `E`;
    }

    keyPressed() {

    }

    draw() {
        // move the player depending on the key pressed, and then change orientation
        // make sure only one key is pressed
        if (keyIsDown(ARROWUP) && !keyIsDown(ARROWDOWN) && !keyIsDown(ARROWLEFT) && !keyIsDown(ARROWRIGHT)) {
            this.moveNorth(STEP);
            this.orientation = `N`;
            this.height = 70;
        }
        if (keyIsDown(ARROWDOWN) && !keyIsDown(ARROWUP) && !keyIsDown(ARROWLEFT) && !keyIsDown(ARROWRIGHT)) {
            this.moveSouth(STEP);
            this.orientation = `S`;
            this.height = 70;
        }
        if (keyIsDown(ARROWRIGHT) && !keyIsDown(ARROWUP) && !keyIsDown(ARROWDOWN) && !keyIsDown(ARROWLEFT)) {
            this.moveEast(STEP);
            this.orientation = `E`;
            this.height = 40;
        }
        if (keyIsDown(ARROWLEFT) && !keyIsDown(ARROWUP) && !keyIsDown(ARROWDOWN) && !keyIsDown(ARROWRIGHT)) {
           this.moveWest(STEP);
           this.orientation = `W`;
           this.height = 40;
        }
        // account for the case where two keys are pressed ensuring same velocity (pythagoras)
        // https://p5.readthedocs.io/en/latest/tutorials/vector.html
        if (keyIsDown(ARROWUP) && keyIsDown(ARROWRIGHT)) {
            this.moveNorth(STEPDIAGONAL);
            this.moveEast(STEPDIAGONAL);
            this.orientation = `NE`;
            this.height = 70;
        }
        if (keyIsDown(ARROWUP) && keyIsDown(ARROWLEFT)) {
            this.moveNorth(STEPDIAGONAL);
            this.moveWest(STEPDIAGONAL);
            this.orientation = `NW`;
            this.height = 70;
        }
        if (keyIsDown(ARROWDOWN) && keyIsDown(ARROWRIGHT)) {
            this.moveSouth(STEPDIAGONAL);
            this.moveEast(STEPDIAGONAL);
            this.orientation = `SE`;
            this.height = 70;
        }
        if (keyIsDown(ARROWDOWN) && keyIsDown(ARROWLEFT)) {
            this.moveSouth(STEPDIAGONAL);
            this.moveWest(STEPDIAGONAL);
            this.orientation = `SW`;
            this.height = 70;
        }
        // change the character image depending on orientation
        if (this.orientation === `N`) {
            image (bikerN, this.x, this.y, this.width, this.height);
        } else if (this.orientation === `S`) {
            image (bikerS, this.x, this.y, this.width, this.height);
        } else if (this.orientation === `E`) {
            image (bikerE, this.x, this.y, this.width, this.height);
        } else if (this.orientation === `W`) {
            image (bikerW, this.x, this.y, this.width, this.height);
        } else if (this.orientation === `NE`) {
            image (bikerNE, this.x, this.y, this.width, this.height);
        } else if (this.orientation === `NW`) {
            image (bikerNW, this.x, this.y, this.width, this.height);
        } else if (this.orientation === `SE`) {
            image (bikerSE, this.x, this.y, this.width, this.height);
        } else if (this.orientation === `SW`) {
            image (bikerSW, this.x, this.y, this.width, this.height);
        } else {
            // image (bikerE, this.x, this.y, this.width, this.height);
        }
    }

    // Player movements ================================== //
    moveNorth(steps) {
        this.y -= steps;
        if (this.y < MAPLIMIT) {
            this.y = MAPLIMIT;
        }
    }
    moveSouth(steps) {
        this.y += steps;
        if (this.y + this.height > (HEIGHT - MAPLIMIT)) {
            this.y = (HEIGHT - MAPLIMIT) - this.height;
        }
    }
    moveEast(steps) {
        this.x += steps;
        if (this.x + this.width > (WIDTH - MAPLIMIT)) {
            this.x = (WIDTH - MAPLIMIT) - this.width
        }
    }
    moveWest(steps) {
        this.x -= steps;
        if (this.x < MAPLIMIT) {
            this.x = MAPLIMIT
        }
    }
}