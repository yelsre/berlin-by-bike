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
    let STEP = this.player.velocity;
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
        this.player.height,
        this.player.velocity
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

    const poiTopArea = poi.y - poi.height;
    const poiLeftArea = poi.x;
    const poiRightArea = poi.x + poi.width;
    const poiBottomArea = poi.y;

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

  replayGame() {
    frameCount = 0;
    this.poiArray.forEach((poi) => (poi.status = "inactive"));
    this.poiArray.forEach(
      (poi, index) => (poi.x = poiArray[index][0].poixy[0])
    );
    this.poiArray.forEach(
      (poi, index) => (poi.y = poiArray[index][0].poixy[1])
    );
    while (docSights.firstChild) {
      docSights.removeChild(docSights.firstChild);
    }
    this.background.x = STARTTILEX;
    this.background.y = STARTTILEY;
    this.background.columnTile = STARTCOLUMN;
    this.background.rowTile = STARTROW;
    this.player.x = WIDTH / 2;
    this.player.y = HEIGHT / 2;
    this.player.width = 70;
    this.player.height = 70;
    this.player.orientation = EAST;
    this.player.isInCanvas = true;
  }

  draw() {
    let secondsPassed = frameCount / FRAMERATE;
    let secondsLeftRounded = Math.round(GAMELENGTH - secondsPassed);
    const newSight = document.createElement("li");
    let numberPoiVisited = docSights.childElementCount;
    let allSightsSeen = docSights.childNodes;
    const button = document.createElement("button");
    const canvasDiv = document.getElementById("defaultCanvas0");
    const countdownDiv = document.getElementById("countdown");

    clear();
    this.inCanvas(); // calculate where the player is in relation to the map
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
        newSight.innerHTML = `<a href="${poi.wiki}" target="_blank">${poi.name}</a> 
          <img src="${poi.wiki_img}" alt="Poi image from wikipedia" height="100">
        `;
        if (numberPoiVisited < this.score) {
          allSightsSeen.forEach((node) => (node.style.display = "none"));
          docSights.insertAdjacentElement("afterbegin", newSight);
          newSight.style.display = "";
        }
      }
    });

    // calculate an update number of sights seen (score)
    this.calculateSightsSeen();
    docScore.innerText = this.score;
    docTimeLeft.innerText = secondsLeftRounded;
    countdownDiv.style.width = `${
      ((GAMELENGTH - secondsPassed) / GAMELENGTH) * 100
    }px`;
    if (secondsPassed >= GAMELENGTH) {
      noLoop();
      allSightsSeen.forEach((node) => (node.style.display = ""));
      button.innerText = `${this.score} sights seen. Click to play again.`;
      canvasDiv.style.display = "none";
      docGame.appendChild(button);
      button.onclick = () => {
        this.replayGame();
        button.parentNode.removeChild(button);
        canvasDiv.style.display = "";
        loop();
      };
    }
  }
}
