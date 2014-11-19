/**
* Created by rosendobrev on 5/31/14.
*/
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
    var Gameplay = (function (_super) {
        __extends(Gameplay, _super);
        function Gameplay() {
            _super.apply(this, arguments);
        }
        Gameplay.prototype.create = function () {
            this.background = this.add.sprite(0, 0, 'assets/background_menu.jpg');
        };
        return Gameplay;
    })(Phaser.State);
    BubbleShooter.Gameplay = Gameplay;
})(BubbleShooter || (BubbleShooter = {}));
//# sourceMappingURL=Gameplay.js.map
