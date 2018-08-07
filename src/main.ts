
import {drawRect, Vector, keyCodes} from "./lib";
import {Entity} from "./entity";

let loader = function(p5: p5) {
    let p1 = new Entity();
    p1.pos = new Vector(30, 20);
    p1.vel = new Vector(0.1, 0.2);
    p1.color = new Vector(240, 0, 1);
    p1.size = new Vector(20, 40);
    p1.alpha = 180;

    p5.preload = function() {
        p5.frameRate(30);
    }

    let canvasWidth  = 400;
    let canvasHeight = 400;
    p5.setup = function() {
        p5.createCanvas(canvasWidth, canvasHeight);
    }

    let speed = 5;
    let vel = new Vector(0, 0);
    p5.draw = function() {
        vel.zero();
        let {UP, DOWN, LEFT, RIGHT } = keyCodes;

        if (p5.keyIsDown(UP))
            vel.addScalar(0, -1);
        else if (p5.keyIsDown(DOWN))
            vel.addScalar(0,  1);

        if (p5.keyIsDown(LEFT))
            vel.addScalar(-1, 0);
        else if (p5.keyIsDown(RIGHT))
            vel.addScalar(1, 0);

        vel.scale(speed);
        p1.pos.add(vel);

        p5.background(40, 40, 40);
        drawRect(p5, {
            red: 120, blue: 180,
            x: (canvasWidth-123)/2,
            y: (canvasHeight-123)/2,
            width: 123, height: 123,
        });
        p1.draw(p5);
    }
}

new p5(loader);

