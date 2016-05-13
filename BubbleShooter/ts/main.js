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
var BubbleShooter;
(function (BubbleShooter) {
    var Preloader = (function (_super) {
        __extends(Preloader, _super);
        function Preloader() {
            _super.apply(this, arguments);
        }
        Preloader.prototype.preload = function () {
            this.preloadBar = this.add.sprite(200, 250, 'preloadBar');
            this.load.setPreloadSprite(this.preloadBar);

            this.zariba = this.add.tileSprite(0, 0, 100, 100, 'titlePage');

            this.load.image('BGmenu', 'assets/background_menu.jpg');
            this.load.image('ball_blue', 'assets/ball_blue.png');
            this.load.image('ball_green', 'assets/ball_green.png');
            this.load.image('ball_purple', 'assets/ball_purple.png');
            this.load.image('ball_red', 'assets/ball_red.png');
            this.load.image('', '');
            this.load.image('', '');
        };

        Preloader.prototype.create = function () {
            var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startMainMenu, this);
        };

        Preloader.prototype.update = function () {
            this.preloadBar.angle += 1;
        };

        Preloader.prototype.startMainMenu = function () {
            this.game.state.start('MainMenu', true, false);
        };
        return Preloader;
    })(Phaser.State);
    BubbleShooter.Preloader = Preloader;
})(BubbleShooter || (BubbleShooter = {}));
//# sourceMappingURL=main.js.map
