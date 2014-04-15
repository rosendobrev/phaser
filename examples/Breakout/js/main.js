var game = new Phaser.Game(680, 480, Phaser.AUTO, '', {preload: preload, create: create, update: update });

/* variables for ball, pad and bricks */
var ball;
var paddle;
var bricks;
var brick_array = new Array(60);
var pu = new Array();
var powerups;

 var powerup;

//index variable
var index = 0;

/* boolen variable if ball is on the pad */
var ballOnPaddle = true;

/* variables for lives and score */
var lives = 3;
var score = 0;

/* variables for output text */
var scoreText;
var livesText;
var introText;

/* variable for... Something? */
var s;

function preload(){
    game.load.image('background', 'assets/background.jpg');
    game.load.image('ball','assets/ball.png');
    game.load.image('paddle','assets/paddle.png');
    game.load.image('brick0', 'assets/brick0.png');
    game.load.image('brick1', 'assets/brick1.png');
    game.load.image('brick2', 'assets/brick2.png');
    game.load.image('brick3', 'assets/brick3.png');
    game.load.image('brick4', 'assets/brick4.png');
    game.load.image('brick5', 'assets/brick5.png');
    game.load.image('power-up', 'assets/power-up.jpg');
}

function create(){

    s = game.add.tileSprite(0, 0, 680, 480, 'background');

    bricks = game.add.group();
    bricks.enableBody = true;
    bricks.physicsBodyType = Phaser.Physics.ARCADE;

    powerups = game.add.group();
    powerups.enableBody = true;
    powerups.physicsBodyType = Phaser.Physics.ARCADE;
    powerups.createMultiple(30, 'power-up');

    var brick;
    var inc = 0;
    //var brick_array = new Array(60);

    for(var y = 0; y < 4; y++){
        for(var x = 0; x < 15; x++){
            inc = inc + 1;
            brick_array[inc] = bricks.create(120 + (x * 36), 100 + (y * 52), 'brick' + (y + 1));
            brick_array[inc].body.bounce.set(1);
            brick_array[inc].body.immovable = true;
            //brick_array[inc] = brick;
        }
    }
    //array for index of bricks with power-ups

    for(var i = 0; i < (brick_array.length*(15/100)); i++){
    pu[i] = brick_array[Math.floor((Math.random() * brick_array.length) + 1)];
    //pu[i] = Math.floor((Math.random()*brick_array.length) + 1);
    }


    paddle = game.add.sprite(game.world.centerX, 400, 'paddle');
    paddle.anchor.setTo(0.5, 0.5);


    game.physics.enable(paddle, Phaser.Physics.ARCADE);

    paddle.body.collideWorlBounds = true;
    paddle.body.bounce.set(1);
    paddle.body.immovable = true;

    ball = game.add.sprite(paddle.body.x + 100, paddle.body.y - 10, 'ball');
    ball.anchor.set(0.5);

    paddle.y-16
    ball.checkWorldBounds = true;

    game.physics.enable(ball, Phaser.Physics.ARCADE);

    ball.body.collideWorldBounds = true;
    ball.body.bounce.set(1);

    ball.events.onOutOfBounds.add(ballLost, this);

    scoreText = game.add.text(32, 30, 'score: 0', { font: "20px Arial", fill: "#ffffff", align: "left" });
    livesText = game.add.text(600, 30, 'lives: 3', { font: "20px Arial", fill: "#ffffff", align: "left" });
    introText = game.add.text(game.world.centerX - 100, 300, '- click to start -', { font: "40px Arial", fill: "#ffffff", align: "center" });
    game.input.onDown.add(releaseBall, this);

    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.checkCollision.down = false;

}
function update(){
    paddle.body.x = game.input.x - 30;

    if (paddle.x < 24)
    {
        paddle.x = 24;
    }
    else if (paddle.x > game.width - 24)
    {
        paddle.x = game.width - 24;
    }

    if(ballOnPaddle){
        ball.body.x = paddle.x;
    }else{
        game.physics.arcade.collide(ball, paddle, ballHitPaddle, null, this);
        game.physics.arcade.collide(ball, bricks, ballHitBrick, null, this);
        game.physics.arcade.collide(paddle, powerups, catchPowerUp, null, this);

    }

    //paddle.scale.x += 0.01;
}

function releaseBall(){
    if(ballOnPaddle){
        ballOnPaddle = false;
        ball.body.velocity.y = -300;
        ball.body.velocity.x = -75;
        introText.visible = false;
    }
}

function ballLost(){
    lives--;
    livesText.text = 'lives: ' + lives;
    powerup.kill();
    if(lives === 0){
        gameOver();
    }else{
        ballOnPaddle = true;
        ball.reset(paddle.body.x + 16, paddle.y - 16);
        }
}

function gameOver(){
    ball.body.velocity.setTo(0,0);

    introText.text = 'Game Over, Neo..';
    introText.visible = true;
}

function ballHitBrick (_ball, _brick) {


    _brick.kill();

    score += 10;

    scoreText.text = 'score: ' + score;

    for(var i = 0; i < pu.length; i++){
            if(_brick == pu[i]){
                //powerup = game.add.sprite(pu[i].x, pu[i].y, 'power-up');

                powerup = powerups.create(pu[i].x, pu[i].y, 'power-up');
                powerup.scale.x = 0.1;
                powerup.scale.y = 0.1;
                game.physics.enable(powerup, Phaser.Physics.ARCADE);
                powerup.body.gravity.y = 50;
            }
    }
    //  Are they any bricks left?
    if (bricks.countLiving() == 0)
    {
        //  New level starts
        score += 1000;
        scoreText.text = 'score: ' + score;
        introText.text = '- Next Level -';

        //  Let's move the ball back to the paddle
        ballOnPaddle = true;
        ball.body.velocity.set(0);
        ball.x = paddle.x + 16;
        ball.y = paddle.y - 16;
        ball.animations.stop();

        //  And bring the bricks back from the dead :)
        bricks.callAll('revive');
    }

}

function ballHitPaddle (_ball, _paddle) {

    var diff = 0;

    if (_ball.x < _paddle.x)
    {
        //  Ball is on the left-hand side of the paddle
        diff = _paddle.x - _ball.x;
        _ball.body.velocity.x = (-10 * diff);
    }
    else if (_ball.x > _paddle.x)
    {
        //  Ball is on the right-hand side of the paddle
        diff = _ball.x -_paddle.x;
        _ball.body.velocity.x = (10 * diff);
    }
    else
    {
        //  Ball is perfectly in the middle
        //  Add a little random X to stop it bouncing straight up!
        _ball.body.velocity.x = 2 + Math.random() * 8;
    }

}

function catchPowerUp(_paddle, _powerup){
    _powerup.kill();
    _paddle.scale.x = 2.0;
}
