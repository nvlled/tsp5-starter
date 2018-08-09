
import {drawRect, Vector, keyCodes} from "./lib";
import {Entity} from "./entity";

function createPlayer() {
    let player = new Entity();
    player.pos = new Vector(30, 20);
    player.vel = new Vector(0.1, 0.2);
    player.size = new Vector(120, 120);
    player.alpha = 10;
    return player;
}

function loader(p5: p5) {
    let bgImg;
    let canvasWidth  = 640;
    let canvasHeight = 480;
    let player = createPlayer();

    p5.preload = function() {
        player.image = p5.loadImage("images/blue-dino.png");
        bgImg = p5.loadImage("images/mess.png");
    }

    p5.setup = function() {
        p5.frameRate(30);
        p5.createCanvas(canvasWidth, canvasHeight);
    }

    let speed = 5;
    let vel = new Vector(0, 0);
    p5.draw = function() {
        // Update
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
        player.pos.add(vel);

        // Draw
        p5.background(250, 250, 250);
        p5.image(bgImg, 50, 50, canvasWidth-50*2, canvasHeight-50*2);
        player.draw(p5);
        drawRect(p5, {
            red: 80,
            green: 180,
            alpha: 80,
            x: (canvasWidth-150)/2,
            y: (canvasHeight-150)/2,
            width: 150, height: 150,
        });
    }
}

new p5(loader);

