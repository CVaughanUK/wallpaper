var totColumns;
var totRows;
var totSquares;
var canvasWidth, canvasHeight;
var canvasWStart, canvasHStart;
var colWidth, colHeight;
var widthVar;
var heightVar;
var g1, g2, b1, b2, b3, t1, b4, g3, p1, c1, y1, r1, o1, l1, y2, o2;
var g1P, g2P, b1P, b2P, b3P, t1P, b4P, g3P, p1P, c1P, y1P, r1P, o1P, l1P, y2P, o2P;

var colors = [];
var colorsP = [];
var probArray = [];
var colorPicked = [];
var counter;
var colorsAmnt;


function setup() {
  totColumns = 22;
  totRows = int(totColumns * 0.8);
  totSquares = totColumns + totRows;

  g1 = color(143, 182, 91);
  g1P = 26;
  g2 = color(161, 168, 56);
  g2P = 22;
  b1 = color(146, 177, 221);
  b1P = 35;
  b2 = color(87, 112, 179);
  b2P = 52;
  b3 = color(109, 156, 218);
  b3P = 50;
  t1 = color(10, 158, 172);
  t1P = 30;
  b4 = color(62, 166, 201);
  b4P = 27;
  g3 = color(103, 177, 160);
  g3P = 6;
  p1 = color(230, 191, 194);
  p1P = 31;
  c1 = color(214, 208, 184);
  c1P = 18;
  y1 = color(236, 215, 148);
  y1P = 36;
  r1 = color(194, 83, 100);
  r1P = 35;
  o1 = color(216, 110, 86);
  o1P = 13;
  l1 = color(195, 145, 182);
  l1P = 11;
  y2 = color(215, 165, 40);
  y2P = 21;
  o2 = color(234, 151, 45);
  o2P = 7;

  colors = [g1, g2, b1, b2, b3, t1, b4, g3, p1, c1, y1, r1, o1, l1, y2, o2];
  colorsP = [g1P, g2P, b1P, b2P, b3P, t1P, b4P, g3P, p1P, c1P, y1P, r1P, o1P, l1P, y2P, o2P];
  probArray = new Array(420);
  counter = 0;
  colorsAmnt = 16;

  square = new Square();

  createCanvas(displayWidth, displayHeight);

  canvasHeight = int(height*0.75);
  canvasWidth = canvasHeight*1.4;

  heightVar = random(colHeight);
  widthVar = random(colWidth); 

  canvasHStart = height/8 - heightVar;
  canvasWStart = width/2 - (canvasWidth/2);


  colWidth = canvasWidth/20;
  colHeight = tan(radians(45))*colWidth;


  for (let i = 0; i < colorsAmnt; i++) {
    for (let j = 0; j < colorsP[i]; j++) {
      probArray[counter] = i;
      counter += 1;
    }
  }
}

function squaresDraw() {
  for (let i = 0; i < totColumns; i++) {
    for (let j = 0; j < totRows; j++) {
      var randArray = int( random(420) );
      var tempColRef = probArray[randArray];
      square.display( canvasWStart+(colWidth*i), canvasHStart + (colHeight*j) - (0.5*heightVar), colors[tempColRef] );
    }
  }
}

function draw() {

  background(255);

  fill(255, 0, 0);

  squaresDraw();

  rectMode(CORNER);
  noStroke();
  fill(225);
  rect(0, 0, width, height/2 - canvasHeight/2);
  rect(0, height/2 + canvasHeight/2, width, height/2 + canvasHeight/2);
  rect(0, 0, canvasWStart, height);
  rect(canvasWStart + canvasWidth, 0, canvasWStart, height);


  noLoop();
}

function mousePressed() {
  loop();
}
