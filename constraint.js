class Constraint {
  constructor(a, b, restLength) {
    this.a = a;
    this.b = b;
    this.restLength = restLength;
  }

  solve() {
    const delta = this.b.pos.sub(this.a.pos);
    const dist = delta.magnitude();
    const diff = (dist - this.restLength) / dist;

    const correction = delta.scale(0.5 * diff);
    this.a.pos = this.a.pos.add(correction);
    this.b.pos = this.b.pos.sub(correction);
  }
}
