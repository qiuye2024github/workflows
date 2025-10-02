ServerEvents.recipes(event => {

    function SeqGear(output, input) {event.recipes.createSequencedAssembly([output], input, [
      event.recipes.createPressing(input, input),
      event.recipes.create.deploying([input],[input, 'kubejs:gear_press']).keepHeldItem(),
      event.recipes.createPressing(input, input)])
      .transitionalItem(input).loops(1);}
    function MSPGear(output,input) {event.custom({"type":"thermal:press","ingredients":[{"item":input,"count":4},{"item":'thermal:press_gear_die'}],"result":[{"item":output}]})}
    function RemoveGear (Gear) {event.remove({output:Gear})}
    function createAllGearRecipes() {
    const IngotorGemIDs = ['minecraft:iron_ingot', 'minecraft:gold_ingot', 'minecraft:diamond','minecraft:emerald', 'minecraft:netherite_ingot', 'minecraft:lapis_lazuli',
        'minecraft:quartz', 'minecraft:copper_ingot', 'thermal:tin_ingot','thermal:silver_ingot', 'thermal:nickel_ingot', 'thermal:lead_ingot',
        'thermal:steel_ingot', 'thermal:rose_gold_ingot', 'thermal:invar_ingot','thermal:electrum_ingot', 'thermal:constantan_ingot', 'thermal:bronze_ingot',
        'thermal:signalum_ingot', 'thermal:lumium_ingot', 'thermal:enderium_ingot','pneumaticcraft:ingot_iron_compressed', 'thermalendergy:prismalium_ingot',
        'thermalendergy:melodium_ingot', 'thermal:ruby', 'thermal:sapphire','avaritia:neutron_ingot', 'thermalendergy:stellarium_ingot', 'kubejs:sculk_ingot'];
    const BlockIDs = ['minecraft:iron_block', 'minecraft:gold_block', 'minecraft:diamond_block','minecraft:emerald_block', 'minecraft:netherite_block', 'minecraft:lapis_block',
        'minecraft:quartz_block', 'minecraft:copper_block', 'thermal:tin_block','thermal:silver_block', 'thermal:nickel_block', 'thermal:lead_block',
        'thermal:steel_block', 'thermal:rose_gold_block', 'thermal:invar_block','thermal:electrum_block', 'thermal:constantan_block', 'thermal:bronze_block',
        'thermal:signalum_block', 'thermal:lumium_block', 'thermal:enderium_block','pneumaticcraft:compressed_iron_block', 'thermalendergy:prismalium_block',
        'thermalendergy:melodium_block', 'thermal:ruby_block', 'thermal:sapphire_block','avaritia:neutron', 'thermalendergy:stellarium_block', 'kubejs:sculk_metal_block'];
    const GearIDs = ['thermal:iron_gear', 'thermal:gold_gear', 'thermal:diamond_gear','thermal:emerald_gear', 'thermal:netherite_gear', 'thermal:lapis_gear', 
        'thermal:quartz_gear', 'thermal:copper_gear', 'thermal:tin_gear', 'thermal:silver_gear', 'thermal:nickel_gear', 'thermal:lead_gear', 
        'thermal:steel_gear', 'thermal:rose_gold_gear', 'thermal:invar_gear', 'thermal:electrum_gear', 'thermal:constantan_gear', 'thermal:bronze_gear', 
        'thermal:signalum_gear', 'thermal:lumium_gear', 'thermal:enderium_gear', 'pneumaticcraft:compressed_iron_gear', 'thermalendergy:prismalium_gear', 
        'thermalendergy:melodium_gear', 'thermal:ruby_gear', 'thermal:sapphire_gear','avaritia:neutron_gear', 'thermalendergy:stellarium_gear', 'ifeu:sculk_gear'];
    for (let i = 0; i < GearIDs.length; i++) {
        SeqGear(GearIDs[i], BlockIDs[i]); MSPGear(GearIDs[i], IngotorGemIDs[i]); RemoveGear(GearIDs[i])}}
    createAllGearRecipes();
    event.remove({output:'#forge:gears'})

})