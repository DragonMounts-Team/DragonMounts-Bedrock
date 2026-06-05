import { system, world } from '@minecraft/server';

world.beforeEvents.worldInitialize.subscribe(initEvent => {
  initEvent.blockComponentRegistry.registerCustomComponent('dm_egg_block_trigger:aether', {
    onPlayerInteract({block,dimension,player}) {
      const { x, y, z } = block.location;
      block.setType("minecraft:air");
      dimension.spawnEntity("dm:aether_dragon_egg",{x:x+0.5, y:y, z:z+0.5});
    }
  });
  initEvent.blockComponentRegistry.registerCustomComponent('dm_egg_block_trigger:ender', {
    onPlayerInteract({block,dimension,player}){
      const { x, y, z } = block.location;
      block.setType("minecraft:air");
      dimension.spawnEntity("dm:ender_dragon_egg",{x:x+0.5, y:y, z:z+0.5});
    }
  });
  initEvent.blockComponentRegistry.registerCustomComponent('dm_egg_block_trigger:fire', {
    onPlayerInteract({block,dimension,player}){
      const { x, y, z } = block.location;
      block.setType("minecraft:air");
      dimension.spawnEntity("dm:fire_dragon_egg",{x:x+0.5, y:y, z:z+0.5});
    }
  });
  initEvent.blockComponentRegistry.registerCustomComponent('dm_egg_block_trigger:forest', {
    onPlayerInteract({block,dimension,player}){
      const { x, y, z } = block.location;
      block.setType("minecraft:air");
      dimension.spawnEntity("dm:forest_dragon_egg",{x:x+0.5, y:y, z:z+0.5});
    }
  });
  initEvent.blockComponentRegistry.registerCustomComponent('dm_egg_block_trigger:ice', {
    onPlayerInteract({block,dimension,player}){
      const { x, y, z } = block.location;
      block.setType("minecraft:air");
      dimension.spawnEntity("dm:ice_dragon_egg",{x:x+0.5, y:y, z:z+0.5});
    }
  });
  initEvent.blockComponentRegistry.registerCustomComponent('dm_egg_block_trigger:nether', {
    onPlayerInteract({block,dimension,player}){
      const { x, y, z } = block.location;
      block.setType("minecraft:air");
      dimension.spawnEntity("dm:nether_dragon_egg",{x:x+0.5, y:y, z:z+0.5});
    }
  });
  initEvent.blockComponentRegistry.registerCustomComponent('dm_egg_block_trigger:skeleton', {
    onPlayerInteract({block,dimension,player}){
      const { x, y, z } = block.location;
      block.setType("minecraft:air");
      dimension.spawnEntity("dm:skeleton_dragon_egg",{x:x+0.5, y:y, z:z+0.5});
    }
  });
  initEvent.blockComponentRegistry.registerCustomComponent('dm_egg_block_trigger:water', {
    onPlayerInteract({block,dimension,player}){
      const { x, y, z } = block.location;
      block.setType("minecraft:air");
      dimension.spawnEntity("dm:water_dragon_egg",{x:x+0.5, y:y, z:z+0.5});
    }
  });
});