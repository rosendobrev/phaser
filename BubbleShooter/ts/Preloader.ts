/**
 * Created by rosendobrev on 5/30/14.
 */

///<reference path="phaser.d.ts"/>


module BubbleShooter {

    export class Preloader extends Phaser.State {

        preloadBar: Phaser.Sprite;
        zariba: Phaser.TileSprite;
        timeCheckk: number;
        wid: number = window.innerWidth * window.devicePixelRatio;
        hei: number = window.innerHeight * window.devicePixelRatio;

        preload() {

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
            this.load.image('btn_resume', 'assets/resume_arrow.png')

        }
        create()
        {
            this.timeCheckk = this.game.time.now;
            //var tween = this.add.tween(this.preloadBar).to({alpha: 0}, 1000, Phaser.Easing.Linear.None, true);
            //tween.onComplete.add(this.startMainMenu, this);


        }

        startMainMenu()
        {
            this.game.state.start('MainMenu', true, false);
        }

        update()
        {
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
        }
    }
}
