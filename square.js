class Square {

  constructor() {
    this.x = 500;
    this.y = 150;
  }

  display(x, y, colorX) {
    push();

    translate(x, y);
    stroke(colorX);
    fill(colorX);

    beginShape();
    vertex(0, 0);
    vertex(colWidth, 0 - colHeight);
    vertex(colWidth, 0 );
    vertex(0, colHeight );
    endShape();


    pop();
  }
}
