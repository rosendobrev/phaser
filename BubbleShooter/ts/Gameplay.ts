/**
 * Created by rosendobrev on 5/31/14.
 */

///<reference path="phaser.d.ts"/>
///<reference path="Ball.ts"/>

module BubbleShooter {

    export class Gameplay extends Phaser.State {

        background: Phaser.Sprite;
        timeCheck: number;
        btnPause: Phaser.Button;

//width and height of the window
        wid: number = window.innerWidth * window.devicePixelRatio;
        hei: number = window.innerHeight * window.devicePixelRatio;

//array with all balls
		balls = Array();

		level = [
		[0, 1, 2, 3, 4, 4, 3, 2, 1, 0],
		[1, 2, 3, 4, 5, 4, 3, 2, 1],
		[1, 2, 3, 4, 5, 5, 4, 3, 2, 1],
		[2, 3, 4, 5, 0, 5, 4, 3, 2],
		[1, 2, 3, 4, 5, 5, 4, 3, 2, 1],
		[1, 2, 3, 4, 5, 4, 3, 2, 1],
		[0, 1, 2, 3, 4, 4, 3, 2, 1, 0]];

//declare flying ball
		hitBall: Ball;

//is the ball flying
		flyingBall: boolean = false;

//speed of the ball
		velX: number = 10;
		velY: number = 10;

//rows and columns with balls
		rows: number = 10;
		col: number = 10;

//CREATE
		create() {

			this.background = this.add.sprite((this.wid) / 2, (this.hei) / 2, 'BG_gameplay');
			this.background.anchor.setTo(0.5, 0.5);

			for(var i = 0; i < this.rows; i++){
				this.balls[i] = Array(this.col);
			}


			for(var i = 0; i < 7; i++){

				if(i % 2){

					for(var j = 0; j < 8; j++){

						switch(this.level[i][j]){

							case 0:

								var ball = new Ball(this.game, 0, 0, 0);

								ball.position.x = ball.width/2 + 400 + j * ball.width * 1.11;
								ball.position.y = i * ball.height * 1.11;

								ball.scale.setTo(1.11, 1.11);

								this.balls[i][j] = ball;
								this.add.existing(ball);
								break;

							case 1:

								var ball = new Ball(this.game, 0, 0, 1);

								ball.position.x = ball.width/2 + 400 + j * ball.width * 1.11;
								ball.position.y = i * ball.height * 1.11;

								ball.scale.setTo(1.11, 1.11);

								this.balls[i][j] = ball;
								this.add.existing(ball);
								break;

							case 2:

								var ball = new Ball(this.game, 0, 0, 2);

								ball.position.x = ball.width/2 + 400 + j * ball.width * 1.11;
								ball.position.y = i * ball.height * 1.11;

								ball.scale.setTo(1.11, 1.11);

								this.balls[i][j] = ball;
								this.add.existing(ball);
								break;

							case 3:

								var ball = new Ball(this.game, 0, 0, 3);

								ball.position.x = ball.width/2 + 400 + j * ball.width * 1.11;
								ball.position.y = i * ball.height * 1.11;

								ball.scale.setTo(1.11, 1.11);


								this.balls[i][j] = ball;
								this.add.existing(ball);

								break;

							case 4:


								var ball = new Ball(this.game, 0, 0, 4);

								ball.position.x = ball.width/2 + 400 + j * ball.width * 1.11;
								ball.position.y = i * ball.height * 1.11;

								ball.scale.setTo(1.11, 1.11);


								this.balls[i][j] = ball;
								this.add.existing(ball);
								break;

							case 5:


								var ball = new Ball(this.game, 0, 0, 5);

								ball.position.x = ball.width/2 + 400 + j * ball.width * 1.11;
								ball.position.y = i * ball.height * 1.11;

								ball.scale.setTo(1.11, 1.11);

								this.balls[i][j] = ball;
								this.add.existing(ball);

								break;
						}
					}
				}else{

					for(var j = 0; j < 9; j++){

						switch(this.level[i][j]){

							case 0:

								var ball = new Ball(this.game, 0, 0, 0);

								ball.position.x = 400 + j * ball.width * 1.11;
								ball.position.y = i * ball.height * 1.11;

								ball.scale.setTo(1.11, 1.11);

								this.balls[i][j] = ball;
								this.add.existing(ball);
								break;

							case 1:

								var ball = new Ball(this.game, 0, 0, 1);

								ball.position.x = 400 + j * ball.width * 1.11;
								ball.position.y = i * ball.height * 1.11;

								ball.scale.setTo(1.11, 1.11);

								this.balls[i][j] = ball;
								this.add.existing(ball);
								break;

							case 2:

								var ball = new Ball(this.game, 0, 0, 2);

								ball.position.x = 400 + j * ball.width * 1.11;
								ball.position.y = i * ball.height * 1.11;

								ball.scale.setTo(1.11, 1.11);

								this.balls[i][j] = ball;
								this.add.existing(ball);
								break;

							case 3:

								var ball = new Ball(this.game, 0, 0, 3);

								ball.position.x = 400 + j * ball.width * 1.11;
								ball.position.y = i * ball.height * 1.11;

								ball.scale.setTo(1.11, 1.11);

								this.balls[i][j] = ball;
								this.add.existing(ball);

								break;

							case 4:

								var ball = new Ball(this.game, 0, 0, 4);

								ball.position.x = 400 + j * ball.width * 1.11;
								ball.position.y = i * ball.height * 1.11;

								ball.scale.setTo(1.11, 1.11);


								this.balls[i][j] = ball;
								this.add.existing(ball);
								break;

							case 5:

								var ball = new Ball(this.game, 0, 0, 5);

								ball.position.x = 400 + j * ball.width * 1.11;
								ball.position.y = i * ball.height * 1.11;

								ball.scale.setTo(1.11, 1.11);


								this.balls[i][j] = ball;
								this.add.existing(ball);

								break;
						}

					}
				}
			}


		this.createHitBall();

		this.btnPause = this.add.button(this.wid - (this.wid / 10), 20, 'btn_pause', this.pauseGame, this, 0, 0, 0);

		this.timeCheck = this.game.time.now;
	}



//UPDATE
        update() {
			this.game.input.onDown.add(this.releaseBall, this);


			this.hitBall.updateBall(this.hitBall, this.flyingBall, this.velX, this.velY);


			if(this.hitBall.collide(this.balls, this.hitBall, this.rows, this.col)){
				this.flyingBall = false;
				this.createHitBall();
			}

			this.stayInWindow();

        }


        startSummary(){
            this.game.state.start('Summary', true, false);
        }

        pauseGame(){
            this.game.state.start('Help', true, false);
        }

		releaseBall(){
			if(!this.flyingBall) {

				this.flyingBall = true;
			}
		}

		createHitBall(){
			var tmp: number;
			tmp = this.game.rnd.integerInRange(0,5);

			this.hitBall = new Ball(this.game, 0, 0, tmp);
			this.hitBall.scale.setTo(1.11, 1.11);

			this.hitBall.position.x = this.wid / 2;
			this.hitBall.position.y =  this.hei - this.balls[0][0].height;
			this.add.existing(this.hitBall);
			this.hitBall.anchor.setTo(0.5, 0.5);
		}

		stayInWindow(){
			if (this.hitBall.position.x <= 425 || this.hitBall.position.x >= 1020) {
				this.velX = -this.velX;
			}
			if (this.hitBall.position.y <= 0 || this.hitBall.position.y >= this.hei) {
				this.velY = -this.velY;
			}
		}
    }
}
