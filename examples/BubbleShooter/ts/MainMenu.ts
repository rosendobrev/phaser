/**
 * Created by rosendobrev on 5/30/14.
 */

///<reference path="phaser.d.ts"/>


module BubbleShooter {

    export class MainMenu extends Phaser.State {

        background:Phaser.Sprite;
        logo:Phaser.Sprite;
        btn_play:Phaser.Button;
        btn_help:Phaser.Button;
        wid:number = window.innerWidth * window.devicePixelRatio;
        hei:number = window.innerHeight * window.devicePixelRatio;

        create() {

            this.background = this.add.sprite((this.wid) / 2, (this.hei) / 2, 'BG_menu');
            //this.background.scale.setTo(0.3, 0.3);
            this.background.anchor.setTo(0.5, 0.5);
            //this.background.height = this.hei;

            //this.btn_play.scale.setTo(0.2, 0.2);

            this.btn_play = this.game.add.button(this.wid / 2, this.hei - (this.hei) / 3, 'btn_play', this.startGame, this, 0, 0, 0);
            this.btn_help = this.game.add.button(this.wid - (this.wid / 10), this.hei - (this.hei) / 8, 'btn_help', this.startHelp, this, 0, 0, 0);
        }

        startGame() {

            this.game.state.start('Gameplay', true, false);

        }

        startHelp() {

            this.game.state.start('Help', true, false);

        }
    }
}