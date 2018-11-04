class Fire {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 30;
    this.height = 10;
    this.vel = 10;
  }
  
  draw() {
    this.updateLocation();
    fill(0, 255, 0);
    rect(this.x, this.y, this.width, this.height);
  }

  updateLocation() {
    this.x += this.vel;
  }

  shouldRemove() {
    return this.x > width;
  }
}
