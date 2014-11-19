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
///<reference path="Boot.ts"/>
///<reference path="Preloader.ts"/>
var BubbleShooter;
(function (BubbleShooter) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            _super.call(this, 800, 600, Phaser.AUTO, 'game', null);

            this.state.add('Boot', BubbleShooter.Boot, false);

            //        this.state.add('Preloader', Preloader, false);
            //          this.state.add('MainMenu', MainMenu, false);
            //            this.state.add('Gameplay', Gameplay, false);
            this.state.start('Boot');
        }
        return Game;
    })(Phaser.Game);
    BubbleShooter.Game = Game;
})(BubbleShooter || (BubbleShooter = {}));
//# sourceMappingURL=Game.js.map
