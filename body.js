class Body {
  constructor(x, y, mass = 1) {
    this.pos = new Vector(x, y);
    this.vel = new Vector();
    this.acc = new Vector();
    this.mass = mass;
  }

  applyForce(f) {
    this.acc = this.acc.add(f.scale(1 / this.mass));
  }

  update() {
    this.vel = this.vel.add(this.acc);
    this.pos = this.pos.add(this.vel);
    this.acc = new Vector();
  }
}
