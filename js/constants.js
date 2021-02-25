const WIDTH = 512;
const HEIGHT = WIDTH / 2;
const ACCELERATION = 0.05;
const MAXVELOCITY = 4;
const MAPLIMIT = 70; // the limit that the bike can go to the edge of the map
const ARROWUP = 38;
const ARROWDOWN = 40;
const ARROWLEFT = 37;
const ARROWRIGHT = 39;
const TILESETZOOM = 14; // constant for the zoom of the tileset

const docScore = document.querySelector("#score span");
const docSights = document.querySelector("#sights");
const docTimeLeft = document.querySelector("#time-left span");
const docGame = document.querySelector("#game");

// const doc
const GAMELENGTH = 60; // game length in seconds
const FRAMERATE = 60; //p5 frame rate per second

// NORTH SOUTH EAST WEST
const NORTH = "N";
const SOUTH = "S";
const EAST = "E";
const WEST = "W";
const NORTHEAST = "NE";
const NORTHWEST = "NW";
const SOUTHEAST = "SE";
const SOUTHWEST = "SW";

// images for player
// let biker;
let bikerN;
let bikerS;
let bikerE;
let bikerW;
let bikerNE;
let bikerNW;
let bikerSE;
let bikerSW;

// images for background
let bgTilesLoaded;
let bgRow = [];
let bgRowArray = [];
let bgColumnArray = [];
const ROWMIN = 5361;
const ROWMAX = 5386;
const COLMIN = 8787;
const COLMAX = 8818;
const STARTTILEX = 0;
const STARTTILEY = 0;
const STARTCOLUMN = 10;
const STARTROW = 10;
const TILEWIDTHHEIGHT = WIDTH / 2; // tiles are always square so assign just 1 const.

// Background tiles calculation ========================================//
//create an array of arrays with size of ROWS
for (i = ROWMIN; i <= ROWMAX; i++) {
  bgRow.push([i]);
}
// push each of the values from COLMIN into the array
for (i = COLMIN; i <= COLMAX; i++) {
  bgRow.forEach((element) => element.push(i));
}
// create the link to the tiles from the image
bgTiles = bgRow.map((array) =>
  array.map((number) => `./img/background/${number}/${array[0]}.jpg`)
);
// remove the first temp value from the array
bgTiles.forEach((array) => array.shift());

bgArray = bgRow.map((array) => array.map((number) => [number, array[0]]));

// remove the first temp value from the array
bgArray.forEach((array) => array.shift());

for (i = ROWMIN; i <= ROWMAX; i++) {
  bgRowArray.push(i);
}

for (i = COLMIN; i <= COLMAX; i++) {
  bgColumnArray.push(i);
}

startTile = bgArray[STARTCOLUMN][STARTROW];
tilePixle = bgArray.map((subArray) =>
  subArray.map((element) => [
    (element[0] - startTile[0]) * TILEWIDTHHEIGHT,
    (element[1] - startTile[1]) * TILEWIDTHHEIGHT,
  ])
);

// Point of interest calculation ========================================//
// https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames#ECMAScript_.28JavaScript.2FActionScript.2C_etc..29

function tile2long(x, z) {
  return (x / Math.pow(2, z)) * 360 - 180;
}

function tile2lat(y, z) {
  var n = Math.PI - (2 * Math.PI * y) / Math.pow(2, z);
  return (180 / Math.PI) * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n)));
}

function lon2tile(lon, zoom) {
  return Math.floor(((lon + 180) / 360) * Math.pow(2, zoom));
}

function lat2tile(lat, zoom) {
  return Math.floor(
    ((1 -
      Math.log(
        Math.tan((lat * Math.PI) / 180) + 1 / Math.cos((lat * Math.PI) / 180)
      ) /
        Math.PI) /
      2) *
      Math.pow(2, zoom)
  );
}

function tile2canvasPixelxy(poiLat, poiLon) {
  let tilePixelX =
    tilePixle[bgRowArray.indexOf(lat2tile(poiLat, TILESETZOOM))][
      bgColumnArray.indexOf(lon2tile(poiLon, TILESETZOOM))
    ][0];
  let tilePixelY =
    tilePixle[bgRowArray.indexOf(lat2tile(poiLat, TILESETZOOM))][
      bgColumnArray.indexOf(lon2tile(poiLon, TILESETZOOM))
    ][1];
  let tileLon = lon2tile(poiLon, TILESETZOOM);
  let tileLat = lat2tile(poiLat, TILESETZOOM);
  tileTop = tile2long(tileLon, TILESETZOOM);
  tileLeft = tile2lat(tileLat, TILESETZOOM);
  tileBottom = tile2long(tileLon + 1, TILESETZOOM);
  tileRight = tile2lat(tileLat + 1, TILESETZOOM);
  tileWidthLat = tileRight - tileLeft;
  tileHeightLon = tileTop - tileBottom;
  poiWidthLat = poiLat - tileLeft;
  poiHeightLon = tileTop - poiLon;
  additionalPixelY = (poiWidthLat / tileWidthLat) * TILEWIDTHHEIGHT;
  additionalPixelX = (poiHeightLon / tileHeightLon) * TILEWIDTHHEIGHT;
  poiCanvasPixelX = tilePixelX + additionalPixelX;
  poiCanvasPixelY = tilePixelY + additionalPixelY;
  return [poiCanvasPixelX, poiCanvasPixelY];
}

const poiArray = poiObject.features.map((element) => [
  {
    element,
    coordinate: element.geometry.coordinates,
    tiles: [
      lon2tile(element.geometry.coordinates[0], TILESETZOOM),
      lat2tile(element.geometry.coordinates[1], TILESETZOOM),
    ],
    tilexy:
      tilePixle[
        bgRowArray.indexOf(
          lat2tile(element.geometry.coordinates[1], TILESETZOOM)
        )
      ][
        bgColumnArray.indexOf(
          lon2tile(element.geometry.coordinates[0], TILESETZOOM)
        )
      ],
    poixy: tile2canvasPixelxy(
      element.geometry.coordinates[1],
      element.geometry.coordinates[0]
    ),
  },
]);
