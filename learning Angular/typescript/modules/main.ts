import { IpointInterface } from "./Ipoint";
import {Point} from "./point"

var pt: IpointInterface = new Point()
pt.x  = 10;
pt.y = 10;
alert(pt.distanceFromOrigin())