/**
* Created by rosendobrev on 5/31/14.
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
    var Summary = (function (_super) {
        __extends(Summary, _super);
        function Summary() {
            _super.apply(this, arguments);
        }
        Summary.prototype.create = function () {
            this.background = this.load.image('gameover', 'assets/gameover.png');
        };
        return Summary;
    })(Phaser.State);
    BubbleShooter.Summary = Summary;
})(BubbleShooter || (BubbleShooter = {}));
//# sourceMappingURL=Summary.js.map
