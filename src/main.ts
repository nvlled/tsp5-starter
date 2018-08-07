
import {drawRect, Vector, keyCodes} from "./lib";
import {Entity} from "./entity";

let loader = function(m: p5) {
    let p1 = new Entity();
    p1.pos = new Vector(30, 20);
    p1.vel = new Vector(0.1, 0.2);
    p1.color = new Vector(240, 0, 1);
    p1.size = new Vector(20, 40);
    p1.alpha = 180;

    m.preload = function() {
        m.frameRate(30);
    }

    let canvasWidth  = 400;
    let canvasHeight = 400;
    m.setup = function() {
        m.createCanvas(canvasWidth, canvasHeight);
    }

    let speed = 5;
    let vel = new Vector(0, 0);
    m.draw = function() {
        vel.zero();
        let {UP, DOWN, LEFT, RIGHT } = keyCodes;

        if (m.keyIsDown(UP))
            vel.addScalar(0, -1);
        else if (m.keyIsDown(DOWN))
            vel.addScalar(0,  1);

        if (m.keyIsDown(LEFT))
            vel.addScalar(-1, 0);
        else if (m.keyIsDown(RIGHT))
            vel.addScalar(1, 0);

        vel.scale(speed);
        p1.pos.add(vel);

        m.background(40, 40, 40);
        drawRect(m, {
            red: 120, blue: 180,
            x: (canvasWidth-123)/2,
            y: (canvasHeight-123)/2,
            width: 123, height: 123,
        });
        p1.draw(m);
    }
}

new p5(loader);

