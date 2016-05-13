w = window.innerWidth;
h = window.innerHeight;
var game = new Phaser.Game(w, h, Phaser.AUTO, '', {preload: preload, create: create, update: update });

/* variables for ball, pad and bricks */
var ball;
var paddle;
var bricks;
var brick_array = new Array(60);

//variable for bricks who has power-ups in it
var pu = new Array();

//variable for all power-ups
var powerups;

//variable for catched power-up
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

var paddleSize;
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
    game.load.image('power-up', 'assets/phpDqhck1AM.jpg');
}

function create(){

    s = game.add.tileSprite(0, 0, w, h, 'background');

    bricks = game.add.group();
    bricks.enableBody = true;
    bricks.physicsBodyType = Phaser.Physics.ARCADE;

    powerups = game.add.group();
    powerups.enableBody = true;
    powerups.physicsBodyType = Phaser.Physics.ARCADE;
    powerups.createMultiple(30, 'power-up');

    var brick;
    var inc = 0;

    for(var y = 0; y < 5; y++){
        for(var x = 0; x < 15; x++){
            inc = inc + 1;
            brick_array[inc] = bricks.create(w/5 + (x * (w*(4/100))), h/4 + (y * (h*(6/100))), 'brick' + (y + 1));
            brick_array[inc].body.bounce.set(1);
            brick_array[inc].body.immovable = true;
            //brick_array[inc] = brick;
            brick_array[inc].width = w * (3/100);
        }
    }

    //array for index of bricks with power-ups
    for(var i = 0; i < (brick_array.length*(90/100)); i++){
    pu[i] = brick_array[Math.floor((Math.random() * brick_array.length) + 1)];
    }


    paddle = game.add.sprite(w*(50/100), h*(90/100), 'paddle');
    //paddle.scale.x = 2;

    game.physics.enable(paddle, Phaser.Physics.ARCADE);
    //paddle.scale.x = 2;
    paddle.anchor.setTo(0.5,0.5);


    paddle.body.collideWorlBounds = true;
    paddle.body.bounce.set(1);
    paddle.body.immovable = true;

    paddleSize = game.cache.getImage("paddle");

    ball = game.add.sprite(paddle.body.x + 100, paddle.body.y - 10, 'ball');
    ball.anchor.setTo(0.5, 0.5);

    ball.checkWorldBounds = true;

    game.physics.enable(ball, Phaser.Physics.ARCADE);

    ball.body.collideWorldBounds = true;
    ball.body.bounce.set(1);

    ball.events.onOutOfBounds.add(ballLost, this);

    scoreText = game.add.text(w*(5/100), h*(5/100), 'score: 0', { font: "20px Arial", fill: "#ffffff", align: "left" });
    livesText = game.add.text(w*(90/100), h*(5/100), 'lives: 3', { font: "20px Arial", fill: "#ffffff", align: "left" });
    introText = game.add.text(w*(35/100), h*(60/100), '- click to start -', { font: "40px Arial", fill: "#ffffff", align: "center" });
    game.input.onDown.add(releaseBall, this);

    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.checkCollision.down = false;
}

function update(){
    paddle.body.x = game.input.x;

    if (paddle.body.x < 0)
    {
        paddle.body.x = 0;
    }
    else if (paddle.body.x > w-paddleSize.width)
    {
        paddle.body.x = w-paddleSize.width;
    }

    if(ballOnPaddle){
        ball.body.x = paddle.x;
    }else{
        game.physics.arcade.collide(ball, paddle, ballHitPaddle, null, this);
        game.physics.arcade.collide(ball, bricks, ballHitBrick, null, this);
        game.physics.arcade.collide(paddle, powerups, catchPowerUp, null, this);
    }
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
    paddle.scale.x = 1;
    paddle.width = w * (6/100);
    paddle.body.width = w * (6/100);
    //paddle.reset(w/2, h*(90/100));
    //powerups.alive.kill();
    if(powerup){
        powerup.kill();
    }
    if(lives === 0){
        gameOver();
    }else{
        ballOnPaddle = true;
        ball.reset(paddle.body.x + 16, paddle.y - 16);
        }
}

function gameOver(){
    ballOnPaddle = false;
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

                powerup = powerups.create(pu[i].x, pu[i].y, 'power-up');
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
        //ball.animations.stop();

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
    score += 100;
    scoreText.text = 'score: ' + score;

    _paddle.scale.x = 2;

    //_paddle.reset(w/2, h*(90/100));
    _paddle.body.width = w*(10/100);
}
