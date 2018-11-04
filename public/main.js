let fernandinho;
let monsters = [];
let cheeses = [];
let score;

function reset() {
  clear();
  score = new Score();
  fernandinho = new Fernandinho();
  // Monsters
  monsters = [];
  monsters.push(new Monster());
  monsters.push(new Monster());
  // Cheeses
  cheeses = [];
  cheeses.push(new Cheese());
}

function setup() {
  createCanvas(800, 600);
  score = new Score();
  fernandinho = new Fernandinho();
  // Adding monsters
  monsters.push(new Monster());
  monsters.push(new Monster());
  // Adding cheese
  cheeses.push(new Cheese());
  cheeses.push(new Cheese());
}

function draw() {
  // Moving fernandinho
  if (keyIsDown(UP_ARROW)) {
    fernandinho.goUp();
  } else if (keyIsDown(DOWN_ARROW)) {
    fernandinho.goDown();
  }

  clear();
  background(0);
  fernandinho.draw();
  newMonsters = [];
  // Getting monster
  monsters = monsters.filter((monster) => {
    // Check collapse fernandinho
    const die = monster.checkCollapse(fernandinho.x, fernandinho.y, fernandinho.size);
    if (die) {
      score.gameOver();
      fernandinho.die();
      // Remove monster
      return false;
    }
    // Check fire hit
    const fire = monster.checkFireHit(fernandinho.fires)
    if (fire) {
      // Removing fire
      fernandinho.removeFire(fire);
      // Adding new mosnters
      newMonsters.push(new Monster());
      // Filter monster
      return false;
    }

    monster.updateLocation();
    monster.draw();
    return true;
  });
  // Adding new monster
  monsters.push(...newMonsters);

  // Getting cheeses
  newCheeses = [];
  cheeses = cheeses.filter((cheese) => {
    const gotCheese = cheese.checkCollapse(fernandinho.x, fernandinho.y, fernandinho.size);
    if (gotCheese) {
      // Eating
      fernandinho.eat();
      // Adding score
      score.add();
      // Adding new cheese
      newCheeses.push(new Cheese());
      // Remove cheese
      return false;
    }

    cheese.updateLocation();
    cheese.draw();
    return true;
  });
  cheeses.push(...newCheeses);
  
  // Drawing score
  score.draw();
}

function keyPressed() {
  if (keyCode === 32) {
    fernandinho.fire();
  }
  if (keyCode === 82) {
    reset();
    loop();
  }
}
