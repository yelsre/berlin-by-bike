const WIDTH = 600;
const HEIGHT = WIDTH / 2;
const STEP = 4;
const STEPDIAGONAL = Math.sqrt((STEP * STEP) / 2);
const MAPLIMIT = 20; // the limit that the bike can go to the edge of the map
const ARROWUP = 38;
const ARROWDOWN = 40;
const ARROWLEFT = 37;
const ARROWRIGHT = 39;
const TILESETZOOM = 12; // constant for the zoom of the tileset

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
const ROWMIN = 1340;
const ROWMAX = 1346;
const COLMIN = 2196;
const COLMAX = 2204;

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
  array.map((number) => `./img/background/${number}/${array[0]}.png`)
);
// remove the first temp value from the array
bgTiles.forEach((array) => array.shift());

bgArray = bgRow.map((array) => array.map((number) => [number, array[0]]));

// remove the first temp value from the array
bgArray.forEach((array) => array.shift());

// geospatial functions
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
