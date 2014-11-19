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
    var MainMenu = (function (_super) {
        __extends(MainMenu, _super);
        function MainMenu() {
            _super.apply(this, arguments);
        }
        MainMenu.prototype.create = function () {
            this.background = this.add.sprite(0, 0, 'titlePage');
            this.background.alpha = 0;
        };

        MainMenu.prototype.startGame = function () {
            this.game.state.start('Gameplay', true, false);
        };
        return MainMenu;
    })(Phaser.State);
    BubbleShooter.MainMenu = MainMenu;
})(BubbleShooter || (BubbleShooter = {}));
//# sourceMappingURL=MainMenu.js.map
