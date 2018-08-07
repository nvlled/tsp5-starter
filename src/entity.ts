
import {Vector} from "./vector";
import {drawRect} from "./lib";

export class Entity {
    pos = new Vector(0, 0);
    vel = new Vector(0, 0);
    size = new Vector(10, 10);
    color = new Vector(150, 0, 0);
    alpha = 250

    draw(p5: p5) {
        let {x,y} = this.pos;
        let {alpha} = this;
        let {x: red, y: green, z: blue} = this.color;
        let {width, height} = this.getSize();
        drawRect(p5, {
            x, y, width, height,
            red, green, blue, alpha,
        });
    }

    getSize() {
        return {
            width:  this.size.x,
            height: this.size.y,
        }
    }

    move() {
        let {pos, vel} = this;
        pos.add(vel);
    }
}
