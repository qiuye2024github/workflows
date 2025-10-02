ServerEvents.recipes(event => {

    function Energizing(output, count, energy, inputs) {var ingredients = [];for (var i = 0; i < inputs.length; i++) {ingredients.push({ item: inputs[i] });}
        event.custom({type: "powah:energizing",ingredients: ingredients,energy: energy,result: {item: output,count: count}});}

    Energizing('mekanism:raw_osmium', 1, 30000, ['thermalendergy:stellarium_dust']);
    Energizing('mekanism:fluorite_gem', 1, 30000, ['minecraft:echo_shard']);
    Energizing('powah:energized_steel_block', 2, 90000, ['minecraft:iron_block', 'minecraft:gold_block']);
    Energizing('powah:blazing_crystal_block', 1, 810000, ['kubejs:blaze_rod_block']);
    Energizing('powah:niotic_crystal_block', 1, 2700000, ['minecraft:diamond_block']);
    Energizing('powah:spirited_crystal_block', 1, 9000000, ['minecraft:emerald_block']);
    Energizing('powah:uraninite_block', 1, 270000, ['mekanism:block_uranium']);
    Energizing('thermalendergy:stellarium_block', 4, 576000, ['kubejs:compressed_clay', 'minecraft:netherite_block', 'minecraft:netherite_block','minecraft:netherite_block', 'minecraft:netherite_block', 'extendedcrafting:nether_star_block']);
    Energizing('thermalendergy:melodium_block', 2, 288000, ['kubejs:chorus_block','kubejs:chorus_block','kubejs:chorus_block','kubejs:compressed_amethyst_block','minecraft:gold_block','minecraft:gold_block']);
    Energizing('thermalendergy:prismalium_block', 2, 216000, ['thermal:nickel_block', 'thermal:nickel_block', 'minecraft:prismarine_bricks', 'minecraft:prismarine_bricks', 'minecraft:prismarine_bricks', 'kubejs:prismarine_crystal_block']);
    Energizing('thermal:bronze_block', 4, 57600, ['minecraft:copper_block', 'minecraft:copper_block', 'minecraft:copper_block', 'thermal:tin_block'])
    Energizing('thermal:electrum_block', 2, 28800, ['thermal:silver_block', 'minecraft:gold_block'])
    Energizing('thermal:invar_block', 3, 43200, ['thermal:nickel_block', 'minecraft:iron_block', 'minecraft:iron_block'])
    Energizing('thermal:constantan_block', 2, 28800, ['thermal:nickel_block', 'minecraft:copper_block'])
    Energizing('thermal:steel_block', 1, 43200, ['thermal:coal_coke_block', 'minecraft:iron_block'])
    Energizing('thermal:rose_gold_block', 2, 28800, ['minecraft:copper_block', 'minecraft:gold_block'])
    Energizing('thermal:signalum_block', 4, 108000, ['thermal:silver_block', 'minecraft:copper_block', 'minecraft:copper_block', 'minecraft:copper_block', 'kubejs:dense_redstone_block'])
    Energizing('thermal:lumium_block', 4, 108000, ['thermal:tin_block', 'thermal:tin_block', 'thermal:tin_block', 'thermal:silver_block', 'kubejs:dense_glowstone', 'kubejs:dense_glowstone'])
    Energizing('thermal:enderium_block', 2, 144000, ['kubejs:ender_pearl_block', 'kubejs:ender_pearl_block', 'kubejs:diamond_sand', 'thermal:lead_block', 'thermal:lead_block', 'thermal:lead_block'])
    Energizing('kubejs:sculk_metal_block', 1, 144000, ['minecraft:netherite_block', 'kubejs:compressed_sculk', 'kubejs:compressed_sculk', 'kubejs:emerald_sand', 'kubejs:emerald_sand'])
    Energizing('kubejs:chromatic_block', 1, 28800, ['kubejs:glowing_obsidian_sand', 'kubejs:glowing_obsidian_sand', 'kubejs:glowing_obsidian_sand', 'kubejs:polish_rose_quartz_block'])
    Energizing('create:brass_block', 2, 28800, ['create:zinc_block', 'minecraft:copper_block'])
    Energizing('create:andesite_alloy_block', 1, 28800, ['kubejs:compressed_andesite', 'minecraft:iron_ingot'])
    Energizing('create:andesite_alloy_block', 1, 28800, ['kubejs:compressed_andesite', 'create:zinc_ingot'])
    Energizing('powah:ender_core', 1, 100000, ['kubejs:capacitor_ender', 'powah:dielectric_casing','fluxnetworks:flux_core'])
    
});