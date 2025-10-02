ServerEvents.recipes(event => {

    function CrushingDusts(output, input) {event.recipes.createCrushing(output, input);
        event.custom({"type": "thermal:pulverizer","ingredient": {"item": input},"result":{"item": output},"experience": 0.0});
        event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":input}},"output":{"item":output}});}
    const crushingPairs = [['mekanism:dust_charcoal', 'minecraft:charcoal'],['mekanism:dust_coal', 'minecraft:coal'],['ae2:certus_quartz_dust', 'ae2:certus_quartz_crystal'],
        ['ae2:certus_quartz_dust', 'ae2:charged_certus_quartz_crystal'],['ae2:fluix_dust', 'ae2:fluix_crystal'],['ae2:sky_dust', 'ae2:sky_stone_block'],
        ['mekanism:dust_fluorite', 'mekanism:fluorite_gem'],['mekanism:dust_obsidian', 'minecraft:obsidian'],['mekanism:dust_refined_obsidian', 'mekanism:ingot_refined_obsidian'],
        ['mekanism:dust_osmium', 'mekanism:ingot_osmium'],['mekanism:dust_uranium', 'mekanism:ingot_uranium'],['thermal:apatite_dust', 'thermal:apatite'],
        ['thermalendergy:prismalium_dust', 'thermalendergy:prismalium_ingot'],['thermalendergy:melodium_dust', 'thermalendergy:melodium_ingot'],
        ['thermalendergy:stellarium_dust', 'thermalendergy:stellarium_ingot'],['thermal:ender_pearl_dust', 'minecraft:ender_pearl'],['thermal:cinnabar_dust', 'thermal:cinnabar'],
        ['thermal:niter_dust', 'thermal:niter'],['thermal:sulfur_dust', 'thermal:sulfur'],['thermal:iron_dust', 'minecraft:iron_ingot'],['thermal:tin_dust', 'thermal:tin_ingot'],
        ['thermal:gold_dust', 'minecraft:gold_ingot'],['thermal:copper_dust', 'minecraft:copper_ingot'],['thermal:netherite_dust', 'minecraft:netherite_ingot'],
        ['thermal:lapis_dust', 'minecraft:lapis_lazuli'],['thermal:lead_dust', 'thermal:lead_ingot'],['thermal:silver_dust', 'thermal:silver_ingot'],
        ['thermal:nickel_dust', 'thermal:nickel_ingot'],['thermal:diamond_dust', 'minecraft:diamond'],['thermal:sapphire_dust', 'thermal:sapphire'],
        ['thermal:emerald_dust', 'minecraft:emerald'],['thermal:quartz_dust', 'minecraft:quartz'],['thermal:ruby_dust', 'thermal:ruby'],
        ['draconicevolution:draconium_dust', 'draconicevolution:draconium_ingot'],['draconicevolution:awakened_draconium_dust', 'draconicevolution:awakened_draconium_ingot'],
        ['thermal:steel_dust', 'thermal:steel_ingot'],['thermal:rose_gold_dust', 'thermal:rose_gold_ingot'],['thermal:bronze_dust', 'thermal:bronze_ingot'],
        ['thermal:electrum_dust', 'thermal:electrum_ingot'],['thermal:invar_dust', 'thermal:invar_ingot'],['thermal:constantan_dust', 'thermal:constantan_ingot'],
        ['thermal:signalum_dust', 'thermal:signalum_ingot'],['thermal:lumium_dust', 'thermal:lumium_ingot'],['thermal:enderium_dust', 'thermal:enderium_ingot']];
    crushingPairs.forEach(([output, input]) => {CrushingDusts(output, input);});

});