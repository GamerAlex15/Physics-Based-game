const RESTITUTION = 0.4;

function collideBodies(a, b) {
  const delta = b.pos.sub(a.pos);
  const dist = delta.magnitude();
  const penetration = a.radius + b.radius - dist;

  if (penetration > 0) {
    const normal = delta.normalize();
    const rv = b.vel.sub(a.vel);
    const velAlongNormal = rv.dot(normal);

    if (velAlongNormal < 0) {
      const j =
        -(1 + RESTITUTION) * velAlongNormal /
        (1 / a.mass + 1 / b.mass);

      const impulse = normal.scale(j);
      a.applyImpulse(impulse.scale(-1), normal.scale(a.radius));
      b.applyImpulse(impulse, normal.scale(-b.radius));
    }
  }
}
