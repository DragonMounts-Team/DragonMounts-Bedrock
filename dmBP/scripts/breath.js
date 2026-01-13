import { world, system } from "@minecraft/server";

const breath = {   
  "cannon": "dm:bullet"
};  

world.afterEvents.itemUse.subscribe(e => {
  const p = e.source;
  if (e.itemStack.typeId !== "dm:bullet") return;

  const r = p.getComponent("minecraft:riding")?.entityRidingOn;
  if (!r) return;

  const t = breath[r.typeId.split(":")[1]];
  if (!t) return;

  const d = p.getViewDirection();

  for (let i = 0; i < 1; i++) {
    const angleOffset = (i - 0.3) * 0.0; // Góc lệch để giãn đạn
    const dx = d.x * Math.cos(angleOffset) - d.z * Math.sin(angleOffset);
    const dz = d.x * Math.sin(angleOffset) + d.z * Math.cos(angleOffset);

    const distance = 4.1; // khoảng cách trước mặt
    const spawnPos = {
      x: p.location.x + d.x * distance,
      y: p.location.y + 0 + d.y * distance,
      z: p.location.z + d.z * distance
    };

    const b = p.dimension.spawnEntity(t, spawnPos);
    if (!b) continue;

    // đẩy đạn bay đi
    system.runTimeout(() => {
      b.applyImpulse({ x: dx * 7.0, y: d.y * 7.0, z: dz * 7.0 });
    }, 0.1);

    // thêm hiệu ứng khi bắn
    r.runCommandAsync("clear @p dm:bullet 0 1");
  }

  p.playSound("dm.dragon.firebreath", { location: p.location, volume: 0.8 });
  r.playAnimation("animation.cannon.shoot");
});