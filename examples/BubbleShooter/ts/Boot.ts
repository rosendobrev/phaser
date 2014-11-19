/**
 * Created by rosendobrev on 5/30/14.
 */

///<reference path="phaser.d.ts"/>
///<referemce path="Preloader.ts"/>

module BubbleShooter{

    export class Boot extends Phaser.State {

        preload(){
            this.load.image('preloadBar', 'assets/loader2.png');
            this.load.image('titlePage', 'assets/ZARIBA.png');
        }

        create(){
            if (this.game.device.desktop) {
                this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                //  If you have any desktop specific settings, they can go in here
                this.scale.pageAlignHorizontally = true;
                this.scale.pageAlignVertically = true;
            }
            else {
                //  Same goes for mobile settings.
                this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                this.scale.pageAlignHorizontally = true;
                this.scale.pageAlignVertically = true;
            }

           this.game.state.start('Preloader', true, false);
        }
    }
}