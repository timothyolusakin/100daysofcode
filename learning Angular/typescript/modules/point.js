define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Point = /** @class */ (function () {
        function Point() {
        }
        Point.prototype.distanceFromOrigin = function () {
            return Math.sqrt((this.x * this.x) + (this.y * this.y));
        };
        return Point;
    }());
    exports.Point = Point;
});
//# sourceMappingURL=point.js.map