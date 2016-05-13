/**
 * Created by rosendobrev on 5/31/14.
 */

///<reference path="phaser.d.ts"/>

module BubbleShooter{

    export class Summary extends Phaser.State {

        game_over: Phaser.Sprite;
        backarrow: Phaser.Button;
        wid: number = window.innerWidth * window.devicePixelRatio;
        hei: number = window.innerHeight * window.devicePixelRatio;

        create(){


            this.game_over = this.add.sprite(this.wid / 2 , this.hei / 2, 'gameover');
            this.game_over.anchor.setTo(0.5, 0.5);
            this.game_over.width = this.wid;
            this.game_over.height = this.hei;
            //   this.game_over.scale.setTo(0.3, 0.3);

               this.backarrow = this.game.add.button(this.wid - (this.wid / 10), this.hei - (this.hei) / 8, 'back_arrow', this.backToMainMenu, this, 0, 0, 0);
        }

        backToMainMenu(){
               this.game.state.start('MainMenu', true, false);
        }
    }
}
