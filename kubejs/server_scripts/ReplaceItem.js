ServerEvents.recipes(event => {

  function Replace(ItemOrTagToRemplace, ItemKeeped) {event.replaceInput({}, ItemOrTagToRemplace, ItemKeeped);event.replaceOutput({}, ItemOrTagToRemplace, ItemKeeped)}

  const replacements = [['industrialforegoing:plastic', 'pneumaticcraft:plastic'],['#forge:gears/iron', 'thermal:iron_gear'],['#forge:gears/gold', 'thermal:gold_gear'],
    ['#forge:gears/diamond', 'thermal:diamond_gear'],['#forge:gears/netherite', 'thermal:netherite_gear'],['#forge:plates/iron', 'thermal:iron_plate'],
    ['#forge:plates/gold', 'thermal:gold_plate'],['#forge:plates/copper', 'thermal:copper_plate'],['#forge:plates/electrum', 'thermal:electrum_plate'],
    ['#forge:ingots/steel', 'thermal:steel_ingot'],['#forge:ingots/lead', 'thermal:lead_ingot'],['#forge:ingots/tin', 'thermal:tin_ingot'],
    ['#forge:ingots/electrum', 'thermal:electrum_ingot'],['#forge:ingots/bronze', 'thermal:bronze_ingot'],['#forge:nuggets/steel', 'thermal:steel_nugget'],
    ['#forge:nuggets/lead', 'thermal:lead_nugget'],['#forge:nuggets/tin', 'thermal:tin_nugget'],['#forge:nuggets/electrum', 'thermal:electrum_nugget'],
    ['#forge:nuggets/copper', 'thermal:copper_nugget'],['#forge:nuggets/bronze', 'thermal:bronze_nugget'],['#forge:dusts/sulfur', 'thermal:sulfur_dust'],
    ['mekanism:dust_sulfur', 'thermal:sulfur_dust'],['#forge:dusts/bronze', 'thermal:bronze_dust'],['mekanism:dust_bronze', 'thermal:bronze_dust'],
    ['#forge:dusts/lapis', 'thermal:lapis_dust'],['mekanism:dust_lapis_lazuli', 'thermal:lapis_dust'],['#forge:dusts/quartz', 'thermal:quartz_dust'],
    ['mekanism:dust_quartz', 'thermal:quartz_dust'],['#forge:dusts/emerald', 'thermal:emerald_dust'],['mekanism:dust_emerald', 'thermal:emerald_dust'],
    ['#forge:dusts/copper', 'thermal:copper_dust'],['mekanism:dust_copper', 'thermal:copper_dust'],['#forge:dusts/lead', 'thermal:lead_dust'],
    ['mekanism:dust_lead', 'thermal:lead_dust'],['#forge:dusts/netherite', 'thermal:netherite_dust'],['mekanism:dust_netherite', 'thermal:netherite_dust'],
    ['#forge:dusts/diamond', 'thermal:diamond_dust'],['mekanism:dust_diamond', 'thermal:diamond_dust'],['#forge:dusts/steel', 'thermal:steel_dust'],
    ['mekanism:dust_steel', 'thermal:steel_dust'],['#forge:dusts/iron', 'thermal:iron_dust'],['mekanism:dust_iron', 'thermal:iron_dust'],['#forge:dusts/gold', 'thermal:gold_dust'],
    ['mekanism:dust_gold', 'thermal:gold_dust'],['#forge:dusts/wood', 'thermal:sawdust'],['mekanism:sawdust', 'thermal:sawdust'],['#forge:dusts/tin', 'thermal:tin_dust'],
    ['mekanism:dust_tin', 'thermal:tin_dust'],['fluxnetworks:flux_dust', 'powah:dielectric_paste'],['avaritia:neutron_compressor', 'extendedcrafting:compressor'],
    ['avaritia:infinity_catalyst', 'kubejs:infinity_catalyst'],['mekanism:block_charcoal', 'thermal:charcoal_block'],['#forge:dusts/ender_pearl', 'thermal:ender_pearl_dust'],
    ['#forge:dusts/obsidian', 'mekanism:dust_obsidian'],['create:chromatic_compound', 'kubejs:chromatic_compound'],['botania:fel_pumpkin', 'kubejs:cursed_pumpkin'],
    [{type:"forge:nbt",item:"avaritia:singularity",count:1,nbt:'{Id:"avaritia:redstone"}'}, 'kubejs:infinity_catalyst'],
    [{type:"forge:nbt",item:"avaritia:singularity",count:1,nbt:'{Id:"avaritia:gold"}'}, 'avaritia:eternal_singularity']]

    replacements.forEach(pair => Replace(pair[0], pair[1]))
})
