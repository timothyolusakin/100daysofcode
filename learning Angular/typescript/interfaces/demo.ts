interface Ipoint
{
    x: number,
    y: number

    distanceFromOrigin(): number
    distanceFromPoint(point: Ipoint): number
}

var pt: Ipoint = {
    x: 10,
    y: 20,
    distanceFromOrigin():number
    {
        return Math.sqrt((this.x * this.x) + (this.y * this.y));
    },
    distanceFromPoint(point: Ipoint): number {
        return Math.sqrt((point.x - this.x) * (point.x - this.x) + (point.y - this.y)* (point.y - this.y));
}
}