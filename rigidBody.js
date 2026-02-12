class RigidBody extends Body {
  constructor(x, y, mass, radius) {
    super(x, y, mass);
    this.radius = radius;

    this.angle = 0;
    this.angularVelocity = 0;
    this.inertia = 0.5 * mass * radius * radius;
  }

  applyImpulse(impulse, contactVector) {
    this.vel = this.vel.add(impulse.scale(1 / this.mass));

    const torque =
      contactVector.x * impulse.y -
      contactVector.y * impulse.x;

    this.angularVelocity += torque / this.inertia;
  }

  update() {
    super.update();
    this.angle += this.angularVelocity;
  }
}
