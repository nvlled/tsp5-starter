System.register("vector", [], function (exports_1, context_1) {
    "use strict";
    var Vector;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Vector = class Vector {
                constructor(x = 0, y = x, z = 0) {
                    this.x = 0;
                    this.y = 0;
                    this.z = 0;
                    this.x = x;
                    this.y = y;
                    this.z = z;
                }
                addScalar(x, y, z = 0) {
                    this.x += x;
                    this.y += y;
                    this.z += z;
                }
                add(...vs) {
                    for (let v of vs) {
                        this.x += v.x;
                        this.y += v.y;
                        this.z += v.z;
                    }
                }
                subScalarScalar(x, y, z = 0) {
                    this.x -= x;
                    this.y -= y;
                    this.z -= z;
                }
                sub(...vs) {
                    for (let v of vs) {
                        this.x -= v.x;
                        this.y -= v.y;
                        this.z -= v.z;
                    }
                }
                scale(n) {
                    this.x *= n;
                    this.y *= n;
                    this.z *= n;
                }
                dot(v) {
                    let a = this.x * v.x;
                    let b = this.y * v.y;
                    let c = this.z * v.z;
                    return a + b + c;
                }
                zero() {
                    this.scale(0);
                }
            };
            exports_1("Vector", Vector);
        }
    };
});
System.register("lib", ["vector", "entity"], function (exports_2, context_2) {
    "use strict";
    var keyCodes, drawRect_DefVals;
    var __moduleName = context_2 && context_2.id;
    function drawRect(m, args = {}) {
        let { x, y, width, height, red, blue, green, alpha } = Object.assign({}, drawRect_DefVals, args);
        m.fill(red, blue, green, alpha);
        m.rect(x, y, width, height);
    }
    exports_2("drawRect", drawRect);
    return {
        setters: [
            function (vector_1_1) {
                exports_2({
                    "Vector": vector_1_1["Vector"]
                });
            },
            function (entity_1_1) {
                exports_2({
                    "Entity": entity_1_1["Entity"]
                });
            }
        ],
        execute: function () {
            exports_2("keyCodes", keyCodes = {
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
            });
            drawRect_DefVals = {
                x: 0,
                y: 0,
                red: 255,
                blue: 0,
                green: 0,
                width: 0,
                height: 0,
                alpha: 255,
            };
        }
    };
});
System.register("entity", ["vector", "lib"], function (exports_3, context_3) {
    "use strict";
    var vector_2, lib_1, Entity;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (vector_2_1) {
                vector_2 = vector_2_1;
            },
            function (lib_1_1) {
                lib_1 = lib_1_1;
            }
        ],
        execute: function () {
            Entity = class Entity {
                constructor() {
                    this.pos = new vector_2.Vector(0, 0);
                    this.vel = new vector_2.Vector(0, 0);
                    this.size = new vector_2.Vector(10, 10);
                    this.color = new vector_2.Vector(150, 0, 0);
                    this.alpha = 250;
                }
                draw(m) {
                    let { x, y } = this.pos;
                    let { alpha } = this;
                    let { x: red, y: green, z: blue } = this.color;
                    let { width, height } = this.getSize();
                    lib_1.drawRect(m, {
                        x, y, width, height,
                        red, green, blue, alpha,
                    });
                }
                getSize() {
                    return {
                        width: this.size.x,
                        height: this.size.y,
                    };
                }
                move() {
                    let { pos, vel } = this;
                    pos.add(vel);
                }
            };
            exports_3("Entity", Entity);
        }
    };
});
System.register("main", ["lib", "entity"], function (exports_4, context_4) {
    "use strict";
    var lib_2, entity_2, loader;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [
            function (lib_2_1) {
                lib_2 = lib_2_1;
            },
            function (entity_2_1) {
                entity_2 = entity_2_1;
            }
        ],
        execute: function () {
            loader = function (m) {
                let p1 = new entity_2.Entity();
                p1.pos = new lib_2.Vector(30, 20);
                p1.vel = new lib_2.Vector(0.1, 0.2);
                p1.color = new lib_2.Vector(240, 0, 1);
                p1.size = new lib_2.Vector(20, 40);
                p1.alpha = 180;
                m.preload = function () {
                    m.frameRate(30);
                };
                let canvasWidth = 400;
                let canvasHeight = 400;
                m.setup = function () {
                    m.createCanvas(canvasWidth, canvasHeight);
                };
                let speed = 5;
                let vel = new lib_2.Vector(0, 0);
                m.draw = function () {
                    vel.zero();
                    let { UP, DOWN, LEFT, RIGHT } = lib_2.keyCodes;
                    if (m.keyIsDown(UP))
                        vel.addScalar(0, -1);
                    else if (m.keyIsDown(DOWN))
                        vel.addScalar(0, 1);
                    if (m.keyIsDown(LEFT))
                        vel.addScalar(-1, 0);
                    else if (m.keyIsDown(RIGHT))
                        vel.addScalar(1, 0);
                    vel.scale(speed);
                    p1.pos.add(vel);
                    m.background(40, 40, 40);
                    lib_2.drawRect(m, {
                        red: 120, blue: 180,
                        x: (canvasWidth - 123) / 2,
                        y: (canvasHeight - 123) / 2,
                        width: 123, height: 123,
                    });
                    p1.draw(m);
                };
            };
            new p5(loader);
        }
    };
});
