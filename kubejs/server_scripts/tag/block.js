ServerEvents.tags('block', event => {
    event.add('botania:livingwood_changed', 'minecraft:crimson_stem')
    event.add('botania:livingwood_changed', 'minecraft:warped_stem')
    event.add('botania:livingwood_changed', 'tconstruct:bloodshroom_log')
    event.add('botania:livingwood_changed', 'tconstruct:greenheart_log')
    event.add('botania:livingwood_changed', 'tconstruct:skyroot_log')
    event.add('botania:livingwood_changed', 'tconstruct:enderbark_log')
    
    event.add('minecraft:budding', 'minecraft:budding_amethyst')
    event.add('minecraft:budding', 'ae2:flawless_budding_quartz')
    event.add('minecraft:budding', 'tconstruct:budding_earth_slime_crystal')
    event.add('minecraft:budding', 'tconstruct:budding_sky_slime_crystal')
    event.add('minecraft:budding', 'tconstruct:budding_ichor_slime_crystal')
    event.add('minecraft:budding', 'tconstruct:budding_ender_slime_crystal')
    
    event.add('minecraft:bee_nest', 'minecraft:bee_nest')
    event.add('minecraft:bee_nest', 'minecraft:beehive')

    event.removeAll('forge:ores_in_ground/stone')
})//