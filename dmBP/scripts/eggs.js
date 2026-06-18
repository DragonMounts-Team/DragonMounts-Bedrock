import { system, world } from '@minecraft/server';

system.beforeEvents.startup.subscribe(({blockComponentRegistry}) => {
	blockComponentRegistry.registerCustomComponent('dm:egg_to_entity', {
    onPlayerInteract({block,dimension,player},{params}) {
      const { x, y, z } = block.location;
      block.setType(params.block_transforms_into);
      dimension.spawnEntity(params.entity,{x:x+0.5, y:y, z:z+0.5});
    }
  });
});