/**
 * Created by rosendobrev on 6/6/14.
 */

///<reference path="phaser.d.ts"/>
module BubbleShooter {

	export class Ball extends Phaser.Sprite {

		Shapetype: number;
		ForDestroy: boolean;

		constructor(game:Game, x:number, y:number, type:number) {
			switch (type) {
				case 0:
					super(game, x, y, "ball_blue");
					this.Shapetype = 0;
					this.ForDestroy = false;
					break;
				case 1:
					super(game, x, y, "ball_green");
					this.Shapetype = 1;
					this.ForDestroy = false;
					break;
				case 2:
					super(game, x, y, "ball_purple");
					this.Shapetype = 2;
					this.ForDestroy = false;
					break;
				case 3:
					super(game, x, y, "ball_red");
					this.Shapetype = 3;
					this.ForDestroy = false;
					break;
				case 4:
					super(game, x, y, "ball_special");
					this.Shapetype = 4;
					this.ForDestroy = false;
					break;
				case 5:
					super(game, x, y, "ball_white");
					this.Shapetype = 5;
					this.ForDestroy = false;
					break;
				case 6:
					super(game, x, y, "ball_yellow");
					this.Shapetype = 6;
					this.ForDestroy = false;
					break;
			}
		}

		getShapeType(){
			return this.Shapetype;
		}

		updateBall(ball, flyingBall, velX, velY) {
			if (flyingBall) {
				ball.position.x = ball.position.x - velX;
				ball.position.y = ball.position.y - velY;
			}
		}

		collide(balls, ball, r, c) {

			//check for collide with other balls
			for (var i = 0; i < r; i++) {

				for (var j = 0; j < c; j++) {

					//if no ball in this place in array continue without error
					if(!balls[i][j])
						continue;

					if (ball.position.x > balls[i][j].position.x &&
						ball.position.x < (balls[i][j].position.x + balls[i][j].width) &&
						ball.position.y > balls[i][j].position.y &&
						ball.position.y < (balls[i][j].position.y + balls[i][j].height)) {

						//if there is no element on left left
						if (!balls[i + 1][j - 1]) {

							//game over when bets higher than 9 rows
							if(i + 1 >= 9){
								this.startSummary();
							}

							console.log(balls[i][j].getShapeType());
							console.log(i + " " + j + " -> " + (i + 1) + " " + (j - 1));

							ball.anchor.setTo(0,0);
							balls[i + 1][j - 1] = ball;

							balls[i + 1][j - 1].position.y = balls[i][j].position.y + balls[i][j].height;
							balls[i + 1][j - 1].position.x = balls[i][j].position.x - balls[i][j].width / 2;


							this.checkForDestroy(balls[i+1][j+1], balls, r, c, i, j);


							console.log("collide");
						} else { //if there is element on the left side go to the right side

							//game over when bets higher than 9 rows
							if(i + 1 >= 9){
								this.startSummary();
							}
							console.log(balls[i][j].getShapeType());
							console.log(i + " " + j + " -> " + (i + 1) + " " + (j + 1));


							ball.anchor.setTo(0,0);
							balls[i + 1][j + 1] = ball;

							balls[i + 1][j + 1].position.y = balls[i][j].position.y + balls[i][j].height;
							balls[i + 1][j + 1].position.x = balls[i][j].position.x + balls[i][j].width / 2;

							console.log("collide");
						}
						return true;
					}
				}
			}
		}

		startSummary(){
			this.game.state.start('Summary', true, false);
		}

		checkForDestroy(ball, balls, r, c, p, q){
			for(var i = 0; i < 10; i++){
				for(var j = 0; j < 10; j++){
					if(balls)
				}

			}
		}
	}
}
