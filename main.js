var config = {
  type: Phaser.AUTO,
  width: 1000,
  height: 700,
  physics: {
    default: 'arcade'
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

var cursors;
var player;
var speed = 5; 
var cars;
var car; 
var gameOver;

var game = new Phaser.Game(config);

function preload () {
  this.load.image('road', 'Art/TwoLaneRoad.png')
  this.load.image('redcar', 'Art/RedCar.png')
  this.load.image('jay', 'Art/Jay.png')
  this.load.image('blood', 'Art/BloodSplatter.png')
}

function create () {
  this.add.image(500, 350, 'road');
  
  player = this.physics.add.sprite(500, 650, 'jay');
  player.setCollideWorldBounds(true);
  
  this.anims.create({
    key: 'die',
    frames: [ { key: 'jay', frame: 1 } ],
    frameRate: 10,
    repeat: -1
  })
  
  cursors = this.input.keyboard.createCursorKeys();
    
  cars = this.physics.add.group();
  car = cars.create(-50,537.5,'redcar');
  
  this.physics.add.collider(player, cars, crash, null, this);
  
}

function update () {
  if (gameOver)
    return;
  
  if (cursors.left.isDown)
  {
    player.x -= speed;
  }
  else if (cursors.right.isDown)
  {
    player.x += speed;
  }
  else if (cursors.up.isDown)
  {
    player.y -= speed;
  }
  else if (cursors.down.isDown)
  {
    player.y += speed;
  }
  
  car.x += 1;
}

function crash(player, car) {
  this.physics.pause();
  player.setTexture('blood');
  gameOver = true;
}