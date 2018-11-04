class Score {
  constructor() {
    this.cheeseSound = loadSound('sound/cheese.m4a');
    this.score = 0;
  }

  draw() {
    fill(255);
    textSize(32);
    text(`SCORE: ${this.score}`, width - 170, 50);
  }

  gameOver() {
    fill(255, 0, 0);
    textSize(60);
    textAlign(CENTER);
    text(`SE FUDEU OTÁRIO`, width/2, height/2);
    textSize(20);
    text(`APERTE R PARA REINICIAR`, width/2, height/2 + 40);
  }

  add() {
    this.score += 1;
    this.cheeseSound.play();
  }

  reset() {
    this.score = 0;
  }
}
