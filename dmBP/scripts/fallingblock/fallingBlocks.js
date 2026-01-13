import { world, ItemStack } from '@minecraft/server'; 

function dropFallingBlock(blockId, dimension, location) {
    const centerLocation = { x: location.x + 0.5, y: location.y + 0.5, z: location.z + 0.5 };
    if (world.gameRules.doEntityDrops) dimension.spawnItem(new ItemStack(blockId), centerLocation);
    dimension.spawnParticle(`${blockId}.break_particle`, centerLocation);
}

export const FallingBlocks = {
    'dm:aether_dragon_egg': {
        onRemove: (dimension, location) => { dropFallingBlock('dm:aether_dragon_egg', dimension, location); }
    },
    'dm:water_dragon_egg': {
        onRemove: (dimension, location) => { dropFallingBlock('dm:water_dragon_egg', dimension, location); }
    },
    'dm:skeleton_dragon_egg': {
        onRemove: (dimension, location) => { dropFallingBlock('dm:skeleton_dragon_egg', dimension, location); }
    },
    'dm:fire_dragon_egg': {
        onRemove: (dimension, location) => { dropFallingBlock('dm:fire_dragon_egg', dimension, location); }
    },
    'dm:forest_dragon_egg': {
        onRemove: (dimension, location) => { dropFallingBlock('dm:forest_dragon_egg', dimension, location); }
    },
    'dm:ice_dragon_egg': {
        onRemove: (dimension, location) => { dropFallingBlock('dm:ice_dragon_egg', dimension, location); }
    },
    'dm:nether_dragon_egg': {
        onRemove: (dimension, location) => { dropFallingBlock('dm:nether_dragon_egg', dimension, location); }
    }
}
