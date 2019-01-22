var pt = {
    x: 10,
    y: 20,
    distanceFromOrigin: function () {
        return Math.sqrt((this.x * this.x) + (this.y * this.y));
    },
    distanceFromPoint: function (point) {
        return Math.sqrt((point.x - this.x) * (point.x - this.x) + (point.y - this.y) * (point.y - this.y));
    }
};
