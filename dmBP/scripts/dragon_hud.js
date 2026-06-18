import { world, system, HudElement } from "@minecraft/server";

const DRAGONS = [
"dm:aether_dragon",
"dm:ender_dragon",
"dm:nether_dragon",
"dm:ice_dragon",
"dm:fire_dragon",
"dm:forest_dragon",
"dm:water_dragon",
"dm:skeleton_dragon",
"dm:zombie_dragon"
];

system.runInterval(() => {
    for (const player of world.getAllPlayers()) {
        const riding = player.getComponent("minecraft:riding")
        if (!riding) {
            player.onScreenDisplay.resetHudElementsVisibility()
            continue
        }
        const dragon = riding.entityRidingOn
        if (!dragon || !DRAGONS.includes(dragon.typeId)) {
            player.onScreenDisplay.resetHudElementsVisibility()
            continue
        }
        player.onScreenDisplay.setHudVisibility(0, [HudElement.HorseHealth])

        const health = dragon.getComponent("minecraft:health")
        const current = Math.floor(health.currentValue)
        const max = Math.floor(health.defaultValue)
        const percent = current / max
        let color = "§a"

        if (percent <= 0.25) {
            color = "§c"
        } else if (percent <= 0.5) {
            color = "§6"
        } else if (percent <= 0.75) {
            color = "§e"
        }
        player.onScreenDisplay.setActionBar(`§aHealth: ${color}${current}§a/${max}`)
    }
}, 20)