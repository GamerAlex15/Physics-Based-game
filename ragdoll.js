function createRagdoll(x, y) {
  const torso = new RigidBody(x, y, 4, 25);
  const head  = new RigidBody(x, y - 40, 1, 12);
  const armL  = new RigidBody(x - 40, y, 1, 10);
  const armR  = new RigidBody(x + 40, y, 1, 10);

  const bodies = [torso, head, armL, armR];
  const joints = [
    new Constraint(torso, head, 40),
    new Constraint(torso, armL, 35),
    new Constraint(torso, armR, 35)
  ];

  return { bodies, joints };
}
