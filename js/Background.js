class Background {
  constructor() {
    this.x = STARTTILEX;
    this.y = STARTTILEY;
    this.width = TILEWIDTHHEIGHT;
    this.height = TILEWIDTHHEIGHT;
    this.columnTile = STARTCOLUMN;
    this.rowTile = STARTROW;
  }
  // draw the tile grid
  draw() {
    image(
      bgTilesLoaded[this.columnTile][this.rowTile],
      this.x,
      this.y,
      this.width,
      this.height
    ); // Initial tiles
    image(
      bgTilesLoaded[this.columnTile][this.rowTile + 1],
      this.x + this.width,
      this.y,
      this.width,
      this.height
    ); // Initial tiles

    image(
      bgTilesLoaded[this.columnTile][this.rowTile + 2],
      this.x + 2 * this.width,
      this.y,
      this.width,
      this.height
    ); // Tile to the East

    image(
      bgTilesLoaded[this.columnTile][this.rowTile - 1],
      this.x - this.width,
      this.y,
      this.width,
      this.height
    ); // Tile to the West

    image(
      bgTilesLoaded[this.columnTile + 1][this.rowTile],
      this.x,
      this.y + this.height,
      this.width,
      this.height
    ); // Tiles to the North
    image(
      bgTilesLoaded[this.columnTile + 1][this.rowTile + 1],
      this.x + this.width,
      this.y + this.height,
      this.width,
      this.height
    ); // Tiles to the North

    image(
      bgTilesLoaded[this.columnTile - 1][this.rowTile],
      this.x,
      this.y - this.height,
      this.width,
      this.height
    ); // Tiles to the North
    image(
      bgTilesLoaded[this.columnTile - 1][this.rowTile + 1],
      this.x + this.width,
      this.y - this.height,
      this.width,
      this.height
    ); // Tiles to the North

    image(
      bgTilesLoaded[this.columnTile - 1][this.rowTile + 2],
      this.x + 2 * this.width,
      this.y - this.height,
      this.width,
      this.height
    ); // Tile to the North East

    image(
      bgTilesLoaded[this.columnTile - 1][this.rowTile - 1],
      this.x - this.width,
      this.y - this.height,
      this.width,
      this.height
    ); // Tile to the North West

    image(
      bgTilesLoaded[this.columnTile + 1][this.rowTile + 2],
      this.x + 2 * this.width,
      this.y + this.height,
      this.width,
      this.height
    ); // Tile to the South East

    image(
      bgTilesLoaded[this.columnTile + 1][this.rowTile - 1],
      this.x - this.width,
      this.y + this.height,
      this.width,
      this.height
    ); // Tile to the South West
  }
}
