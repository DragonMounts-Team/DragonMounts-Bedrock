scoreboard objectives add Timer dummy Timer

scoreboard players add @e[type=dragonmounts:fire_dragon_egg] Timer 1
scoreboard players add @e[type=dragonmounts:ice_dragon_egg] Timer 1
scoreboard players add @e[type=dragonmounts:forest_dragon_egg] Timer 1
scoreboard players add @e[type=dragonmounts:skeleton_dragon_egg] Timer 1
scoreboard players add @e[type=dragonmounts:ender_dragon_egg] Timer 1
scoreboard players add @e[type=dragonmounts:nether_dragon_egg] Timer 1
scoreboard players add @e[type=dragonmounts:water_dragon_egg] Timer 1
scoreboard players add @e[type=dragonmounts:aether_dragon_egg] Timer 1
tag @e[family=dragon] remove flying 
tag @e[family=dragon] remove to_catch_player
tag @a remove can_catch
execute @e[tag=flying,family=dragon] ~ ~ ~ effect @s slow_falling 1 1 true
playanimation @e[scores={Timer=5940},family=dragon_egg] animation.dragon_egg.bs2 