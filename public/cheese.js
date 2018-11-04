class Cheese {
  constructor() {
    this.cheeseImage = loadImage('fernandinho/cheese.png');
    this.vel = 5;
    this.size = 30;
    this.x = width + random(width);
    this.y = random(height - this.size);
  }

  draw() {
    image(this.cheeseImage, this.x - this.size/2, this.y - this.size/2, this.size, this.size);
  }

  updateLocation() {
    // Reseting location
    if (this.x < 0) {
      this.x = width + random(width);
      this.y = random(this.size, height - this.size);
    }

    this.x -= this.vel;
  }

  checkCollapse(fernandinhoX, fernandinhoY, fernandinhoSize) {
    return collideRectRect(fernandinhoX, fernandinhoY, fernandinhoSize, fernandinhoSize, this.x, this.y, this.size, this.size);
  }
}