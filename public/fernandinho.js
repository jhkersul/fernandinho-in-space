class Fernandinho {
  constructor() {
    this.x = 10;
    this.y = height/2 - 20;
    this.vel = 10;
    this.size = 74;
    this.fires = [];
    // Setting sounds
    this.fireSound = loadSound('sound/fire.m4a');
    loadSound('sound/out_cage.m4a', sound => sound.play());
    this.dieSound = loadSound('sound/son_bitch.m4a');
    // Current image
    this.defaultImage = loadImage('fernandinho/default.png');
    this.eatImage = loadImage('fernandinho/eat.png');
    this.eatingImage = loadImage('fernandinho/eating.png');
    this.fireImage = loadImage('fernandinho/fire.png');
    this.currentImage = this.defaultImage;
  }

  draw() {
    // Drawing fires
    this.fires = this.fires.filter((fire) => {
      fire.draw();
      return !fire.shouldRemove();
    });
    // Drawing fernandinho
    image(this.currentImage, this.x, this.y, this.size, this.size);
  }

  eat() {
    this.currentImage = this.eatImage;
    setTimeout(() =>  this.currentImage = this.eatingImage, 100);
    setTimeout(() =>  this.currentImage = this.defaultImage, 200);
  }

  goDown() {
    if (this.y <= (height - this.size)) this.y += this.vel;
    console.log(this.y);
  }

  goUp() {
    if (this.y >= 0) this.y -= this.vel;
  }

  fire() {
    // Play sound
    this.fireSound.play();
    // Creating fire
    this.fires.push(new Fire(this.x, this.y + 6 + this.size/2));

    this.currentImage = this.fireImage;
    setTimeout(() =>  this.currentImage = this.defaultImage, 200);
  }

  die() {
    this.dieSound.play();
    noLoop();
  }

  removeFire(fire) {
    this.fires = this.fires.filter(f => f !== fire);
  }
}
