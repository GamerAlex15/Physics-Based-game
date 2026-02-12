const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const ragdoll = createRagdoll(300, 300);
const boss = new RigidBody(900, 400, 15, 60);

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ragdoll.bodies.forEach(b => b.update());
  boss.update();

  for (let i = 0; i < 5; i++) {
    ragdoll.joints.forEach(j => j.solve());
  }

  ragdoll.bodies.forEach(limb => collideBodies(limb, boss));

  drawBody(boss, "#f00");
  ragdoll.bodies.forEach(b => drawBody(b, "#0f0"));

  requestAnimationFrame(loop);
}

loop();
