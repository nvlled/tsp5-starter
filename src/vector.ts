
export class Vector {
    x = 0;
    y = 0;
    z = 0;

    constructor(x=0, y=x, z=0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    addScalar(x: number, y: number, z=0) {
        this.x += x;
        this.y += y;
        this.z += z;
    }
    add(...vs: Vector[]) {
        for (let v of vs) {
            this.x += v.x;
            this.y += v.y;
            this.z += v.z;
        }
    }

    subScalarScalar(x: number, y: number, z=0) {
        this.x -= x;
        this.y -= y;
        this.z -= z;
    }
    sub(...vs: Vector[]) {
        for (let v of vs) {
            this.x -= v.x;
            this.y -= v.y;
            this.z -= v.z;
        }
    }

    scale(n: number) {
        this.x *= n;
        this.y *= n;
        this.z *= n;
    }

    dot(v: Vector) {
        let a = this.x * v.x;
        let b = this.y * v.y;
        let c = this.z * v.z;
        return a + b + c;
    }

    zero() {
        this.scale(0);
    }
}

