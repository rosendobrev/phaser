/**
 * Created by rosendobrev on 6/2/14.
 */

///<reference path="phaser.d.ts"/>

module BubbleShooter{
    export class Help extends Phaser.State{
        BG_help: Phaser.Sprite;
        backarrow: Phaser.Button;
        btnResume: Phaser.Button;
        wid: number = window.innerWidth * window.devicePixelRatio;
        hei: number = window.innerHeight * window.devicePixelRatio;

        create(){
            this.BG_help = this.add.sprite(this.wid / 2, this.hei / 2 , 'help');
            this.BG_help.anchor.setTo(0.5, 0.5);
            this.BG_help.width = this.wid;
            this.BG_help.height = this.hei;
            this.backarrow = this.game.add.button(this.wid - (this.wid / 10), this.hei - (this.hei) / 7, 'back_arrow', this.backToMainMenu, this, 0, 0, 0);

            this.btnResume = this.add.button(20, this.hei - (this.hei) / 7, 'btn_resume', this.resumeGame, this, 0, 0, 0);
        }

        backToMainMenu(){
            this.game.state.start('MainMenu', true, false);
        }

        resumeGame(){
            this.game.state.start('Gameplay', true, false);
        }
    }
}