export {Vector} from "./vector";
export {Entity} from "./entity";

export const keyCodes = {
    LEFT:  37,
    UP:    38,
    RIGHT: 39,
    DOWN:  40,
}

interface drawRect_Args {
    x?: number,
    y?: number,
    red?: number,
    blue?: number,
    green?: number,
    alpha?: number,
    width?: number,
    height?: number,
}
const drawRect_DefVals = {
    x:      0,
    y:      0,
    red:    255,
    blue:   0,
    green:  0,
    width:  0,
    height: 0,
    alpha: 255,
}
export function drawRect(m: p5, args: drawRect_Args = {}) {
    let {
        x, y, width, height,
        red, blue, green, alpha
    }= Object.assign({}, drawRect_DefVals, args);

    m.fill(red, blue, green, alpha);
    m.rect(x, y, width, height);
}
