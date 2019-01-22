import { IpointInterface } from "./Ipoint";

export class Point implements IpointInterface
{
    x: number;
    y: number;
    distanceFromOrigin(): number{
        return Math.sqrt((this.x * this.x) +(this.y * this.y) )
    }
}