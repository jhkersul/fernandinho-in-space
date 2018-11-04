class Monster {
  constructor() {
    this.shipImage = loadImage(`enemies/${round(random(0, 3.49))}.png`);
    this.x = width + random(width);
    this.y = random(height - 20);
    this.vel = 5;
    this.size = 80;
  }

  draw() {
    image(this.shipImage, this.x - this.size/2, this.y - this.size/2, this.size, this.size);
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
    return collideCircleCircle(fernandinhoX, fernandinhoY, fernandinhoSize, this.x, this.y, this.size);
  }

  checkFireHit(fires) {
    for (let i = 0; i < fires.length; i += 1) {
      const fire = fires[i];
      const hit = collideRectCircle(fire.x, fire.y, fire.width, fire.height, this.x, this.y, this.size);
      if (hit) {
        return fire;
      }
    }
    return null;
  }
}
