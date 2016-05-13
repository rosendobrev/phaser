/**
* Created by rosendobrev on 5/30/14.
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
///<reference path="phaser.d.ts"/>
///<referemce path="Preloader.ts"/>
var BubbleShooter;
(function (BubbleShooter) {
    var Boot = (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            _super.apply(this, arguments);
        }
        Boot.prototype.preload = function () {
            this.load.image('preloadBar', 'assets/loader2.png');
            this.load.image('titlePage', 'assets/ZARIBA.png');
        };

        Boot.prototype.create = function () {
            if (this.game.device.desktop) {
                this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

                //  If you have any desktop specific settings, they can go in here
                this.scale.pageAlignHorizontally = true;
                this.scale.pageAlignVertically = true;
            } else {
                //  Same goes for mobile settings.
                this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                this.scale.pageAlignHorizontally = true;
                this.scale.pageAlignVertically = true;
            }

            this.game.state.start('Preloader', true, false);
        };
        return Boot;
    })(Phaser.State);
    BubbleShooter.Boot = Boot;
})(BubbleShooter || (BubbleShooter = {}));
/**
* Created by rosendobrev on 5/30/14.
*/
///<reference path="phaser.d.ts"/>
var BubbleShooter;
(function (BubbleShooter) {
    var Preloader = (function (_super) {
        __extends(Preloader, _super);
        function Preloader() {
            _super.apply(this, arguments);
            this.wid = window.innerWidth * window.devicePixelRatio;
            this.hei = window.innerHeight * window.devicePixelRatio;
        }
        Preloader.prototype.preload = function () {
            this.preloadBar = this.add.sprite(this.wid / 2, this.hei / 2, 'preloadBar');
            this.load.setPreloadSprite(this.preloadBar);
            this.preloadBar.anchor.setTo(0.5, 0.5);

            this.load.image('BG_menu', 'assets/background_menu.jpg');
            this.load.image('BG_gameplay', 'assets/background.jpg');
            this.load.image('ball_blue', 'assets/ball_blue.png');
            this.load.image('ball_green', 'assets/ball_green.png');
            this.load.image('ball_purple', 'assets/ball_purple.png');
            this.load.image('ball_red', 'assets/ball_red.png');
            this.load.image('ball_special', 'assets/ball_special.png');
            this.load.image('ball_white', 'assets/ball_white.png');
            this.load.image("ball_yellow", "assets/ball_yellow.png");
            this.load.image('btn_play', 'assets/small_btn_play.png');
            this.load.image('gameover', 'assets/game_over.jpg');
            this.load.image('btn_help', 'assets/btn_help.png');
            this.load.image('help', 'assets/help.jpeg');
            this.load.image('back_arrow', 'assets/back_arrow.png');
            this.load.image('btn_pause', 'assets/btn_pause.png');
            this.load.image('btn_resume', 'assets/resume_arrow.png');
        };
        Preloader.prototype.create = function () {
            this.timeCheckk = this.game.time.now;
            //var tween = this.add.tween(this.preloadBar).to({alpha: 0}, 1000, Phaser.Easing.Linear.None, true);
            //tween.onComplete.add(this.startMainMenu, this);
        };

        Preloader.prototype.startMainMenu = function () {
            this.game.state.start('MainMenu', true, false);
        };

        Preloader.prototype.update = function () {
            /*
            if (this.game.time.now - this.timeCheckk >= 1000 && this.game.time.now - this.timeCheckk <= 2000) {
            
            this.add.sprite(100, 100, 'ball_blue');
            
            }else if(this.game.time.now - this.timeCheckk > 2000 && this.game.time.now - this.timeCheckk <= 3000){
            
            this.add.sprite(200, 300, 'ball_purple');
            
            }else if(this.game.time.now - this.timeCheckk > 3000 ){
            
            this.startMainMenu();
            
            }
            
            this.preloadBar.angle -= 4;
            */
            this.startMainMenu();
        };
        return Preloader;
    })(Phaser.State);
    BubbleShooter.Preloader = Preloader;
})(BubbleShooter || (BubbleShooter = {}));
/**
* Created by rosendobrev on 5/30/14.
*/
///<reference path="phaser.d.ts"/>
var BubbleShooter;
(function (BubbleShooter) {
    var MainMenu = (function (_super) {
        __extends(MainMenu, _super);
        function MainMenu() {
            _super.apply(this, arguments);
            this.wid = window.innerWidth * window.devicePixelRatio;
            this.hei = window.innerHeight * window.devicePixelRatio;
        }
        MainMenu.prototype.create = function () {
            this.background = this.add.sprite((this.wid) / 2, (this.hei) / 2, 'BG_menu');

            //this.background.scale.setTo(0.3, 0.3);
            this.background.anchor.setTo(0.5, 0.5);

            //this.background.height = this.hei;
            //this.btn_play.scale.setTo(0.2, 0.2);
            this.btn_play = this.game.add.button(this.wid / 2, this.hei - (this.hei) / 3, 'btn_play', this.startGame, this, 0, 0, 0);
            this.btn_help = this.game.add.button(this.wid - (this.wid / 10), this.hei - (this.hei) / 8, 'btn_help', this.startHelp, this, 0, 0, 0);
        };

        MainMenu.prototype.startGame = function () {
            this.game.state.start('Gameplay', true, false);
        };

        MainMenu.prototype.startHelp = function () {
            this.game.state.start('Help', true, false);
        };
        return MainMenu;
    })(Phaser.State);
    BubbleShooter.MainMenu = MainMenu;
})(BubbleShooter || (BubbleShooter = {}));
/**
* Created by rosendobrev on 6/6/14.
*/
///<reference path="phaser.d.ts"/>
var BubbleShooter;
(function (BubbleShooter) {
    var Ball = (function (_super) {
        __extends(Ball, _super);
        function Ball(game, x, y, type) {
            switch (type) {
                case 0:
                    _super.call(this, game, x, y, "ball_blue");
                    this.Shapetype = 0;
                    this.ForDestroy = false;
                    break;
                case 1:
                    _super.call(this, game, x, y, "ball_green");
                    this.Shapetype = 1;
                    this.ForDestroy = false;
                    break;
                case 2:
                    _super.call(this, game, x, y, "ball_purple");
                    this.Shapetype = 2;
                    this.ForDestroy = false;
                    break;
                case 3:
                    _super.call(this, game, x, y, "ball_red");
                    this.Shapetype = 3;
                    this.ForDestroy = false;
                    break;
                case 4:
                    _super.call(this, game, x, y, "ball_special");
                    this.Shapetype = 4;
                    this.ForDestroy = false;
                    break;
                case 5:
                    _super.call(this, game, x, y, "ball_white");
                    this.Shapetype = 5;
                    this.ForDestroy = false;
                    break;
                case 6:
                    _super.call(this, game, x, y, "ball_yellow");
                    this.Shapetype = 6;
                    this.ForDestroy = false;
                    break;
            }
        }
        Ball.prototype.getShapeType = function () {
            return this.Shapetype;
        };

        Ball.prototype.updateBall = function (ball, flyingBall, velX, velY) {
            if (flyingBall) {
                ball.position.x = ball.position.x - velX;
                ball.position.y = ball.position.y - velY;
            }
        };

        Ball.prototype.collide = function (balls, ball, r, c) {
            for (var i = 0; i < r; i++) {
                for (var j = 0; j < c; j++) {
                    //if no ball in this place in array continue without error
                    if (!balls[i][j])
                        continue;

                    if (ball.position.x > balls[i][j].position.x && ball.position.x < (balls[i][j].position.x + balls[i][j].width) && ball.position.y > balls[i][j].position.y && ball.position.y < (balls[i][j].position.y + balls[i][j].height)) {
                        //if there is no element on left left
                        if (!balls[i + 1][j - 1]) {
                            //game over when bets higher than 9 rows
                            if (i + 1 >= 9) {
                                this.startSummary();
                            }

                            console.log(balls[i][j].getShapeType());
                            console.log(i + " " + j + " -> " + (i + 1) + " " + (j - 1));

                            ball.anchor.setTo(0, 0);
                            balls[i + 1][j - 1] = ball;

                            balls[i + 1][j - 1].position.y = balls[i][j].position.y + balls[i][j].height;
                            balls[i + 1][j - 1].position.x = balls[i][j].position.x - balls[i][j].width / 2;

                            this.checkForDestroy(balls[i + 1][j + 1], balls, r, c, i, j);

                            console.log("collide");
                        } else {
                            //game over when bets higher than 9 rows
                            if (i + 1 >= 9) {
                                this.startSummary();
                            }
                            console.log(balls[i][j].getShapeType());
                            console.log(i + " " + j + " -> " + (i + 1) + " " + (j + 1));

                            ball.anchor.setTo(0, 0);
                            balls[i + 1][j + 1] = ball;

                            balls[i + 1][j + 1].position.y = balls[i][j].position.y + balls[i][j].height;
                            balls[i + 1][j + 1].position.x = balls[i][j].position.x + balls[i][j].width / 2;

                            console.log("collide");
                        }
                        return true;
                    }
                }
            }
        };

        Ball.prototype.startSummary = function () {
            this.game.state.start('Summary', true, false);
        };

        Ball.prototype.checkForDestroy = function (ball, balls, r, c, p, q) {
            for (var i = 0; i < 10; i++) {
                for (var j = 0; j < 10; j++) {
                    //if(balls)
                }
            }
        };
        return Ball;
    })(Phaser.Sprite);
    BubbleShooter.Ball = Ball;
})(BubbleShooter || (BubbleShooter = {}));
/**
* Created by rosendobrev on 5/31/14.
*/
///<reference path="phaser.d.ts"/>
///<reference path="Ball.ts"/>
var BubbleShooter;
(function (BubbleShooter) {
    var Gameplay = (function (_super) {
        __extends(Gameplay, _super);
        function Gameplay() {
            _super.apply(this, arguments);
            //width and height of the window
            this.wid = window.innerWidth * window.devicePixelRatio;
            this.hei = window.innerHeight * window.devicePixelRatio;
            //array with all balls
            this.balls = Array();
            this.level = [
                [0, 1, 2, 3, 4, 4, 3, 2, 1, 0],
                [1, 2, 3, 4, 5, 4, 3, 2, 1],
                [1, 2, 3, 4, 5, 5, 4, 3, 2, 1],
                [2, 3, 4, 5, 0, 5, 4, 3, 2],
                [1, 2, 3, 4, 5, 5, 4, 3, 2, 1],
                [1, 2, 3, 4, 5, 4, 3, 2, 1],
                [0, 1, 2, 3, 4, 4, 3, 2, 1, 0]];
            //is the ball flying
            this.flyingBall = false;
            //speed of the ball
            this.velX = 10;
            this.velY = 10;
            //rows and columns with balls
            this.rows = 10;
            this.col = 10;
        }
        //CREATE
        Gameplay.prototype.create = function () {
            this.background = this.add.sprite((this.wid) / 2, (this.hei) / 2, 'BG_gameplay');
            this.background.anchor.setTo(0.5, 0.5);

            for (var i = 0; i < this.rows; i++) {
                this.balls[i] = Array(this.col);
            }

            for (var i = 0; i < 7; i++) {
                if (i % 2) {
                    for (var j = 0; j < 8; j++) {
                        switch (this.level[i][j]) {
                            case 0:
                                var ball = new BubbleShooter.Ball(this.game, 0, 0, 0);

                                ball.position.x = ball.width / 2 + 400 + j * ball.width * 1.11;
                                ball.position.y = i * ball.height * 1.11;

                                ball.scale.setTo(1.11, 1.11);

                                this.balls[i][j] = ball;
                                this.add.existing(ball);
                                break;

                            case 1:
                                var ball = new BubbleShooter.Ball(this.game, 0, 0, 1);

                                ball.position.x = ball.width / 2 + 400 + j * ball.width * 1.11;
                                ball.position.y = i * ball.height * 1.11;

                                ball.scale.setTo(1.11, 1.11);

                                this.balls[i][j] = ball;
                                this.add.existing(ball);
                                break;

                            case 2:
                                var ball = new BubbleShooter.Ball(this.game, 0, 0, 2);

                                ball.position.x = ball.width / 2 + 400 + j * ball.width * 1.11;
                                ball.position.y = i * ball.height * 1.11;

                                ball.scale.setTo(1.11, 1.11);

                                this.balls[i][j] = ball;
                                this.add.existing(ball);
                                break;

                            case 3:
                                var ball = new BubbleShooter.Ball(this.game, 0, 0, 3);

                                ball.position.x = ball.width / 2 + 400 + j * ball.width * 1.11;
                                ball.position.y = i * ball.height * 1.11;

                                ball.scale.setTo(1.11, 1.11);

                                this.balls[i][j] = ball;
                                this.add.existing(ball);

                                break;

                            case 4:
                                var ball = new BubbleShooter.Ball(this.game, 0, 0, 4);

                                ball.position.x = ball.width / 2 + 400 + j * ball.width * 1.11;
                                ball.position.y = i * ball.height * 1.11;

                                ball.scale.setTo(1.11, 1.11);

                                this.balls[i][j] = ball;
                                this.add.existing(ball);
                                break;

                            case 5:
                                var ball = new BubbleShooter.Ball(this.game, 0, 0, 5);

                                ball.position.x = ball.width / 2 + 400 + j * ball.width * 1.11;
                                ball.position.y = i * ball.height * 1.11;

                                ball.scale.setTo(1.11, 1.11);

                                this.balls[i][j] = ball;
                                this.add.existing(ball);

                                break;
                        }
                    }
                } else {
                    for (var j = 0; j < 9; j++) {
                        switch (this.level[i][j]) {
                            case 0:
                                var ball = new BubbleShooter.Ball(this.game, 0, 0, 0);

                                ball.position.x = 400 + j * ball.width * 1.11;
                                ball.position.y = i * ball.height * 1.11;

                                ball.scale.setTo(1.11, 1.11);

                                this.balls[i][j] = ball;
                                this.add.existing(ball);
                                break;

                            case 1:
                                var ball = new BubbleShooter.Ball(this.game, 0, 0, 1);

                                ball.position.x = 400 + j * ball.width * 1.11;
                                ball.position.y = i * ball.height * 1.11;

                                ball.scale.setTo(1.11, 1.11);

                                this.balls[i][j] = ball;
                                this.add.existing(ball);
                                break;

                            case 2:
                                var ball = new BubbleShooter.Ball(this.game, 0, 0, 2);

                                ball.position.x = 400 + j * ball.width * 1.11;
                                ball.position.y = i * ball.height * 1.11;

                                ball.scale.setTo(1.11, 1.11);

                                this.balls[i][j] = ball;
                                this.add.existing(ball);
                                break;

                            case 3:
                                var ball = new BubbleShooter.Ball(this.game, 0, 0, 3);

                                ball.position.x = 400 + j * ball.width * 1.11;
                                ball.position.y = i * ball.height * 1.11;

                                ball.scale.setTo(1.11, 1.11);

                                this.balls[i][j] = ball;
                                this.add.existing(ball);

                                break;

                            case 4:
                                var ball = new BubbleShooter.Ball(this.game, 0, 0, 4);

                                ball.position.x = 400 + j * ball.width * 1.11;
                                ball.position.y = i * ball.height * 1.11;

                                ball.scale.setTo(1.11, 1.11);

                                this.balls[i][j] = ball;
                                this.add.existing(ball);
                                break;

                            case 5:
                                var ball = new BubbleShooter.Ball(this.game, 0, 0, 5);

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
        };

        //UPDATE
        Gameplay.prototype.update = function () {
            this.game.input.onDown.add(this.releaseBall, this);

            this.hitBall.updateBall(this.hitBall, this.flyingBall, this.velX, this.velY);

            if (this.hitBall.collide(this.balls, this.hitBall, this.rows, this.col)) {
                this.flyingBall = false;
                this.createHitBall();
            }

            this.stayInWindow();
        };

        Gameplay.prototype.startSummary = function () {
            this.game.state.start('Summary', true, false);
        };

        Gameplay.prototype.pauseGame = function () {
            this.game.state.start('Help', true, false);
        };

        Gameplay.prototype.releaseBall = function () {
            if (!this.flyingBall) {
                this.flyingBall = true;
            }
        };

        Gameplay.prototype.createHitBall = function () {
            var tmp;
            tmp = this.game.rnd.integerInRange(0, 5);

            this.hitBall = new BubbleShooter.Ball(this.game, 0, 0, tmp);
            this.hitBall.scale.setTo(1.11, 1.11);

            this.hitBall.position.x = this.wid / 2;
            this.hitBall.position.y = this.hei - this.balls[0][0].height;
            this.add.existing(this.hitBall);
            this.hitBall.anchor.setTo(0.5, 0.5);
        };

        Gameplay.prototype.stayInWindow = function () {
            if (this.hitBall.position.x <= 425 || this.hitBall.position.x >= 1020) {
                this.velX = -this.velX;
            }
            if (this.hitBall.position.y <= 0 || this.hitBall.position.y >= this.hei) {
                this.velY = -this.velY;
            }
        };
        return Gameplay;
    })(Phaser.State);
    BubbleShooter.Gameplay = Gameplay;
})(BubbleShooter || (BubbleShooter = {}));
/**
* Created by rosendobrev on 5/31/14.
*/
///<reference path="phaser.d.ts"/>
var BubbleShooter;
(function (BubbleShooter) {
    var Summary = (function (_super) {
        __extends(Summary, _super);
        function Summary() {
            _super.apply(this, arguments);
            this.wid = window.innerWidth * window.devicePixelRatio;
            this.hei = window.innerHeight * window.devicePixelRatio;
        }
        Summary.prototype.create = function () {
            this.game_over = this.add.sprite(this.wid / 2, this.hei / 2, 'gameover');
            this.game_over.anchor.setTo(0.5, 0.5);
            this.game_over.width = this.wid;
            this.game_over.height = this.hei;

            //   this.game_over.scale.setTo(0.3, 0.3);
            this.backarrow = this.game.add.button(this.wid - (this.wid / 10), this.hei - (this.hei) / 8, 'back_arrow', this.backToMainMenu, this, 0, 0, 0);
        };

        Summary.prototype.backToMainMenu = function () {
            this.game.state.start('MainMenu', true, false);
        };
        return Summary;
    })(Phaser.State);
    BubbleShooter.Summary = Summary;
})(BubbleShooter || (BubbleShooter = {}));
/**
* Created by rosendobrev on 6/2/14.
*/
///<reference path="phaser.d.ts"/>
var BubbleShooter;
(function (BubbleShooter) {
    var Help = (function (_super) {
        __extends(Help, _super);
        function Help() {
            _super.apply(this, arguments);
            this.wid = window.innerWidth * window.devicePixelRatio;
            this.hei = window.innerHeight * window.devicePixelRatio;
        }
        Help.prototype.create = function () {
            this.BG_help = this.add.sprite(this.wid / 2, this.hei / 2, 'help');
            this.BG_help.anchor.setTo(0.5, 0.5);
            this.BG_help.width = this.wid;
            this.BG_help.height = this.hei;
            this.backarrow = this.game.add.button(this.wid - (this.wid / 10), this.hei - (this.hei) / 7, 'back_arrow', this.backToMainMenu, this, 0, 0, 0);

            this.btnResume = this.add.button(20, this.hei - (this.hei) / 7, 'btn_resume', this.resumeGame, this, 0, 0, 0);
        };

        Help.prototype.backToMainMenu = function () {
            this.game.state.start('MainMenu', true, false);
        };

        Help.prototype.resumeGame = function () {
            this.game.state.start('Gameplay', true, false);
        };
        return Help;
    })(Phaser.State);
    BubbleShooter.Help = Help;
})(BubbleShooter || (BubbleShooter = {}));
/**
* Created by rosendobrev on 5/30/14.
*/
///<reference path="phaser.d.ts"/>
///<reference path="Boot.ts"/>
///<reference path="Preloader.ts"/>
///<reference path="MainMenu.ts"/>
///<reference path="Gameplay.ts"/>
///<reference path="Summary.ts"/>
///<reference path="Help.ts"/>
///<reference path="Ball.ts"/>
var BubbleShooter;
(function (BubbleShooter) {
    var w = window.innerWidth * window.devicePixelRatio, h = window.innerHeight * window.devicePixelRatio;

    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            //super((h > w) ? h : w, (h > w) ? w : h, Phaser.AUTO, 'game', null);
            //super(800, 400, Phaser.AUTO, 'game', null);
            _super.call(this, w, h, Phaser.AUTO, 'game', null);

            this.state.add('Boot', BubbleShooter.Boot, false);
            this.state.add('Preloader', BubbleShooter.Preloader, false);
            this.state.add('MainMenu', BubbleShooter.MainMenu, false);
            this.state.add('Gameplay', BubbleShooter.Gameplay, false);
            this.state.add('Summary', BubbleShooter.Summary, false);
            this.state.add('Help', BubbleShooter.Help, false);

            this.state.start('Boot');
        }
        return Game;
    })(Phaser.Game);
    BubbleShooter.Game = Game;
})(BubbleShooter || (BubbleShooter = {}));
//# sourceMappingURL=app.js.map
