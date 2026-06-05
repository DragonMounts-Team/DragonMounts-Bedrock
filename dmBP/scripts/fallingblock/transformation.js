import { system, world } from '@minecraft/server';

const transformation= new Map([
  ["minecraft:glowstone", "dm:aether_dragon_egg"],
  ["minecraft:end_stone", "dm:ender_dragon_egg"],
  ["minecraft:lava", "dm:fire_dragon_egg"],
  ["minecraft:oak_log", "dm:forest_dragon_egg"],
  ["minecraft:oak_leaves", "dm:forest_dragon_egg"],
  ["minecraft:snow", "dm:ice_dragon_egg"],
  ["minecraft:ice", "dm:ice_dragon_egg"],
  ["minecraft:blue_ice", "dm:ice_dragon_egg"],
  ["minecraft:packed_ice", "dm:ice_dragon_egg"],
  ["minecraft:magma", "dm:nether_dragon_egg"],
  ["minecraft:bone_block", "dm:skeleton_dragon_egg"],
  ["minecraft:water", "dm:water_dragon_egg"]
])

world.afterEvents.dataDrivenEntityTrigger.subscribe(({entity, eventId}) => {
    if (eventId === "dm:back_to_block") {
      let eggPos=entity.location
      let pos=entity.dimension.getBlock({x:eggPos.x, y:eggPos.y, z:eggPos.z})
      entity.remove()
      pos.setType(entity.typeId)
    }
    if (eventId === "dm:test_transform") {
      let eggPos=entity.location
      let dimension=entity.dimension
      let a=dimension.getBlock({x:  eggPos.x+1, y: eggPos.y-1, z: eggPos.z}).typeId
      let b=dimension.getBlock({x:  eggPos.x-1, y: eggPos.y-1, z: eggPos.z}).typeId
      let c=dimension.getBlock({x:  eggPos.x, y: eggPos.y-1, z: eggPos.z+1}).typeId
      let d=dimension.getBlock({x:  eggPos.x, y: eggPos.y-1, z: eggPos.z-1}).typeId
      let e=dimension.getBlock({x:  eggPos.x+1, y: eggPos.y-1, z: eggPos.z+1}).typeId
      let f=dimension.getBlock({x:  eggPos.x-1, y: eggPos.y-1, z: eggPos.z+1}).typeId
      let g=dimension.getBlock({x:  eggPos.x+1, y: eggPos.y-1, z: eggPos.z-1}).typeId
      let h=dimension.getBlock({x:  eggPos.x-1, y: eggPos.y-1, z: eggPos.z-1}).typeId
      if(a===b && a===c && a===d && a===e && a===f && a===g && a===h){
        let Type=transformation.get(a)
        if(Type &&!(Type===entity.typeId)){
          entity.triggerEvent("dm:transforming");
          Type=`${Type}<dm:hatch_trans>`
          system.runTimeout(() => {
            entity.remove();
            const trans=dimension.spawnEntity(Type,{x:eggPos.x, y:eggPos.y, z:eggPos.z});
          }, 1200);
        }
      }
    }
  })