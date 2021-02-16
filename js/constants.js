const WIDTH = 600;
const HEIGHT = WIDTH/2;
const STEP = 4;
const STEPDIAGONAL = Math.sqrt((STEP*STEP)/2);
const MAPLIMIT = 20; // the limit that the bike can go to the edge of the map
const ARROWUP = 38;
const ARROWDOWN = 40;
const ARROWLEFT = 37;
const ARROWRIGHT = 39;

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
for (i=ROWMIN; i<=ROWMAX; i++) {
    bgRow.push([i]);
}
// push each of the values from COLMIN into the array
for (i=COLMIN; i<=COLMAX; i++) {
    bgRow.forEach(element => element.push(i));
}
// create the link to the tiles from the image
bgTiles = bgRow.map(array =>
    array.map(number => `./img/background/${number}/${array[0]}.png`)
    );
// remove the first temp value from the array
bgTiles.forEach(array => array.shift());