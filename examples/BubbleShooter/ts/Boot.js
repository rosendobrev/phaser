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
                //  If you have any desktop specific settings, they can go in here
                //this.stage.scale.pageAlignHorizontally = true;
            } else {
                //  Same goes for mobile settings.
            }
            // this.game.state.start('Preloader', true, false);
        };
        return Boot;
    })(Phaser.State);
    BubbleShooter.Boot = Boot;
})(BubbleShooter || (BubbleShooter = {}));
//# sourceMappingURL=Boot.js.map
