var game = new Phaser.Game(680, 480, Phaser.AUTO, '', {preload: preload, create: create, update: update });

/* variables for ball, pad and bricks */
var ball;
var paddle;
var bricks;

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
}

function create(){
    /*
    game.phisics.startSystem(Phaser.Phisics.ARCADE);
    game.phisics.arcade.checkCollision.down = false;
*/
    s = game.add.tileSprite(0, 0, 680, 480, 'background');
/*
    bricks = game.add.group();
    bricks.enableBody = true;
    bricks.phisicsBodyType = Phaser.Phisics.ARCADE;

    var brick;

    for(var y = 0; y < 4; y++){
        for(var x = 0; x < 15; x++){
            brick = bricks.create(120 + (x * 36), 100 + (y * 52), 'brick' + (y + 1) + '.png');
            brick.body.bounce.set(1);
            brick.body.immovable = true;
        }
    }
*/
    paddle = game.add.sprite(200, 400, 'paddle.png');
/*
    paddle.anchor.setTo(0.5, 0.5);


    game.physics.enable(paddle, Phaser.Phisics.ARCADE);

    paddle.body.collideWorlBounds = true;
    paddle.body.bounce.set(1);
    paddle.body.immovable = true;

    ball = game.add.sprite(game.world.centerX, paddle.y - 16, 'ball.png');
    ball.anchor.set(0.5);
    ball.checkWorldBounds = true;

    game.physics.enable(ball, Phaser.Physics.ARCADE);

    ball.body.collideWorldBounds = true;
    ball.body.bounce.set(1);

    ball.events.onOutOfBounds.add(ballLost, this);

    scoreText = game.add.text(32, 480, 'score: 0', { font: "20px Arial", fill: "#ffffff", align: "left" });
    livesText = game.add.text(680, 480, 'lives: 3', { font: "20px Arial", fill: "#ffffff", align: "left" });
    introText = game.add.text(game.world.centerX, 400, '- click to start -', { font: "40px Arial", fill: "#ffffff", align: "center" });
    game.input.onDown.add(releaseBall, this);

*/
}
function update(){/*
    paddle.body.x = game.input.x;

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
    }*/
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
