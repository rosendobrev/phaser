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

module BubbleShooter {

    var w = window.innerWidth * window.devicePixelRatio,
        h = window.innerHeight * window.devicePixelRatio;

    export class Game extends Phaser.Game {

        constructor() {

            //super((h > w) ? h : w, (h > w) ? w : h, Phaser.AUTO, 'game', null);
            //super(800, 400, Phaser.AUTO, 'game', null);
            super(w, h, Phaser.AUTO, 'game', null);



            this.state.add('Boot', Boot, false);
            this.state.add('Preloader', Preloader, false);
            this.state.add('MainMenu', MainMenu, false);
            this.state.add('Gameplay', Gameplay, false);
            this.state.add('Summary', Summary, false);
            this.state.add('Help', Help, false);

            this.state.start('Boot');
        }
    }
}
