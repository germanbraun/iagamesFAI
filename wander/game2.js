$(document).ready(function() {
	var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update});

	var numBoids = 1;
    var Flock = [];
    var Flockable = [];
	var self = this;
	var isDebugging = false;

  function preload () {
  	game.load.image('monkey', 'assets/monkey.jpg');
  //	game.load.image('banana', 'assets/banana.jpg');
  }

  function create () {
  //  var bg = game.add.sprite(game.world.centerX, game.world.centerY, 'monkey');
  // bg.anchor.setTo(0.5, 0.5);
   	createWanderTest()
	}

	function createWanderTest()
	{
  			var boid = new WanderingShip(game);
    		boid.initalize(0,'monkey');
    		
    		var pos = new Phaser.Point(game.world.centerX, game.world.centerY);
    		var vel = new Phaser.Point(0,-10)
    		boid.create(pos,vel, 0, isDebugging);
    		boid.category = 1;
    		boid.behavior = new BehaviorWander(boid);
    		Flock.push(boid);
    		Flockable.push(boid);
    //		boid.initalize(1,'banana');
	}

   //LOOP
  function update(){
  		Flockable[0].behavior.update(Flockable);
  		//Flockable[1].behavior.update(Flockable);
  }

});