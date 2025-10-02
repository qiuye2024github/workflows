ServerEvents.recipes(event => {

  function repeatedItems(id, count) {return Array(count).fill({ item: id })}
  function repeatedTags(tag, count) {return Array(count).fill({ tag: tag })}
  function FusionCrafting(output, count, mainInput, tier, energy, Inputs) {let inputs = [];Inputs.forEach(entry => {
    if (typeof entry === "string") {inputs.push({ item: entry })} 
    else if (Array.isArray(entry)) {inputs = inputs.concat(entry)} 
    else if (typeof entry === "object" &&(entry.item || entry.tag)) {inputs.push(entry)}})
    event.custom({type: "draconicevolution:fusion_crafting",catalyst: { item: mainInput },ingredients: inputs,result: { item: output, count: count },tier: tier,total_energy: energy})}

    //As Inputs use an Array with "mod:ID", or { item: "mod:ID" }, or { tag: "mod:ID" }, or the function repeatedItems("mod:ID",count), , or the function repeatedTags("forge:tag",count)

  FusionCrafting("pipez:infinity_upgrade", 1, "pipez:ultimate_upgrade", "DRACONIC", 100000000, [
    repeatedItems("draconicevolution:awakened_core", 4),repeatedItems("draconicevolution:draconic_energy_core", 4)])

  FusionCrafting("kubejs:storage_core", 1, "kubejs:antimatter", "CHAOTIC", 1000000000000000, [
    repeatedItems("mekanism:qio_drive_supermassive", 2),"kubejs:ultimate_storage_component","kubejs:ultimate_spatial_component",repeatedItems("mekanism:qio_drive_supermassive", 2)])

  FusionCrafting("mekanism:reprocessed_fissile_fragment", 64, "minecraft:water_bucket", "DRACONIC", 1000000, [
    repeatedItems("mekanism:block_uranium", 9),repeatedItems("kubejs:sulfur_sand", 9),repeatedItems("mekanism:block_fluorite", 9)])

  FusionCrafting("kubejs:nether_star_ore", 1, "minecraft:netherrack", "DRACONIC", 1000000000, [repeatedItems("minecraft:nether_star", 27)])

  FusionCrafting("avaritia:eternal_singularity", 1, "extendedcrafting:ultimate_singularity", "CHAOTIC", 1000000000, [repeatedItems("avaritia:neutron_pile", 27)])

  FusionCrafting("kubejs:deepslate_infinity_ore", 1, "avaritia:infinity", "CHAOTIC", 1000000000000, ["thermal:sapphire_ore","thermal:ruby_ore","thermal:nickel_ore","thermal:silver_ore",
    "thermal:lead_ore","thermal:tin_ore","thermal:sulfur_ore","thermal:niter_ore","thermal:cinnabar_ore","thermal:apatite_ore","mekanism:fluorite_ore","mekanism:uranium_ore",
    "mekanism:osmium_ore","kubejs:nether_star_ore","kubejs:end_awakened_draconium_ore","draconicevolution:overworld_draconium_ore","create:zinc_ore","minecraft:coal_ore",
    "minecraft:ancient_debris","minecraft:nether_quartz_ore","minecraft:diamond_ore","minecraft:lapis_ore","minecraft:emerald_ore","minecraft:redstone_ore",
    "minecraft:gold_ore","minecraft:copper_ore","minecraft:iron_ore"])

  FusionCrafting("ae2:charged_certus_quartz_crystal", 28, "ae2:certus_quartz_crystal", "DRACONIUM", 600000, [repeatedItems("ae2:certus_quartz_crystal", 27)])

  FusionCrafting('kubejs:creative_time_token', 1, 'kubejs:chaos', "CHAOTIC", 1000000000, [repeatedItems('kubejs:ultimate_time_token', 16)])

  FusionCrafting('kubejs:compressed_awakened_core', 1, 'extendedcrafting:nether_star_block', "CHAOTIC", 9000000, 
    [repeatedItems('kubejs:compressed_wyvern_core', 2),repeatedItems('draconicevolution:awakened_draconium_block', 4),repeatedItems('kubejs:compressed_wyvern_core', 2)])

  FusionCrafting('kubejs:compressed_chaotic_core', 1, 'draconicevolution:chaos_shard', "CHAOTIC", 900000000, 
    [repeatedItems('draconicevolution:chaos_shard', 4),repeatedItems('draconicevolution:awakened_draconium_block', 4),repeatedItems('kubejs:compressed_awakened_core', 4)])

})
