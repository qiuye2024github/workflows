ProjectEEvents.setEMC(event => {

    const emcValues = [['projecte:low_covalence_dust', 1000],['projecte:medium_covalence_dust', 1000],['projecte:high_covalence_dust', 1000],['minecraft:cobblestone', 1],
        ['botania:white_petal', 8],['botania:light_gray_petal', 8],['botania:gray_petal', 8],['botania:black_petal', 8],['botania:brown_petal', 8],['botania:pink_petal', 8],
        ['botania:red_petal', 8],['botania:orange_petal', 8],['botania:yellow_petal', 8],['botania:lime_petal', 8],['botania:green_petal', 8],['botania:light_blue_petal', 8],
        ['botania:blue_petal', 8],['botania:magenta_petal', 8],['botania:purple_petal', 8],['botania:cyan_petal', 8],['minecraft:oak_log', 32],['minecraft:spruce_log', 32],
        ['minecraft:birch_log', 32],['minecraft:jungle_log', 32],['minecraft:acacia_log', 32],['minecraft:dark_oak_log', 32],['minecraft:mangrove_log', 32],['minecraft:cherry_log', 32],
        ['minecraft:bamboo_block', 32],['minecraft:crimson_stem', 32],['minecraft:warped_stem', 32],['thermal:apatite_ore', 1024],['thermal:cinnabar_ore', 1024],
        ['thermal:niter_ore', 1024],['thermal:sulfur_ore', 1024],['thermal:tin_ore', 1024],['thermal:nickel_ore', 1024],['thermal:ruby_ore', 1024],['thermal:sapphire_ore', 1024],
        ['thermal:lead_ore', 1024],['thermal:silver_ore', 1024],['minecraft:nether_quartz_ore', 1024],['minecraft:diamond_ore', 1024],['minecraft:lapis_ore', 1024],
        ['minecraft:emerald_ore', 1024],['minecraft:redstone_ore', 1024],['minecraft:coal_ore', 1024],['minecraft:iron_ore', 1024],['minecraft:copper_ore', 1024],
        ['minecraft:gold_ore', 1024],['minecraft:glowstone', 1024],['minecraft:ancient_debris', 1024],['create:zinc_ore', 1024],['mekanism:uranium_ore', 1024],
        ['mekanism:fluorite_ore', 1024],['mekanism:osmium_ore', 1024],['draconicevolution:overworld_draconium_ore', 1024],['kubejs:end_awakened_draconium_ore', 1024],
        ['kubejs:nether_star_ore', 1024],['kubejs:deepslate_infinity_ore', 1024],['emc_interface:emc_interface', 10000]]

    emcValues.forEach(([id, emc]) => event.setEMC(id, emc))
})
