class Game {
    constructor() {
        this.background = new Background();
        this.player = new Player();
    }

    setup() {}

    keyPressed() {
        this.player.keyPressed();
    }

    moveBackground() {
        // each background move consists of two things, moving the background by a step when the bike nears the edge of the screen, then swapping the tile to load new ones
        // Travelling East
        if((this.player.x + this.player.width >= (WIDTH - MAPLIMIT)) && keyIsDown(ARROWRIGHT)) {
            this.background.x -= STEP;
        }
        if(this.background.x <= -this.background.width) {
            this.background.rowTile += 1;
            this.background.x = 0;
        }
        // Travelling West
        if((this.player.x <= (MAPLIMIT)) && keyIsDown(ARROWLEFT)) {
            this.background.x += STEP;
        }
        if(this.background.x >= this.background.width) {
            this.background.rowTile -= 1;
            this.background.x = 0;
            console.log(this.background.rowTile);
        }
        // Travelling North
        if((this.player.y <= (MAPLIMIT)) && keyIsDown(ARROWUP)) {
            this.background.y += STEP;
        }
        if(this.background.y >= this.background.height) {
            this.background.columnTile -= 1;
            this.background.y = 0;
            console.log(this.background.columnTile);

        }
        // Travelling South
        if((this.player.y + this.player.height >= (HEIGHT - MAPLIMIT)) && keyIsDown(ARROWDOWN)) {
            this.background.y -= STEP;
        }
        if(this.background.y <= -this.background.height) {
            this.background.columnTile += 1;
            this.background.y = 0;
        }

    }


    draw() {
        clear();
        this.moveBackground();
        this.background.draw();
        this.player.draw();
    }
}