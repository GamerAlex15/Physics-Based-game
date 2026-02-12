class Vector {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  add(v) { return new Vector(this.x + v.x, this.y + v.y); }
  sub(v) { return new Vector(this.x - v.x, this.y - v.y); }
  scale(s) { return new Vector(this.x * s, this.y * s); }

  dot(v) { return this.x * v.x + this.y * v.y; }

  magnitude() { return Math.hypot(this.x, this.y); }

  normalize() {
    const m = this.magnitude();
    return m === 0 ? new Vector() : this.scale(1 / m);
  }
}
