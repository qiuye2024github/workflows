ServerEvents.recipes(event => {

    function InductionSmelter(output,Co,I1,C1,I2,C2,I3,C3,Energy) {event.custom({"type": "thermal:smelter","ingredients": [
          {"item": I1,"count": C1},{"item": I2,"count": C2},{"item": I3,"count": C3},],"result": [{"item": output,"count": Co}],"energy": Energy})}

    function RedstoneFurnace(output,input,Ci) {event.custom({"type": "thermal:furnace","ingredient": 
        {"item": input,"count": Ci},"result": {"item": output},"experience": 0.0,"energy_mod": 2.0})}

    function FluidEncapsulator(output,Co,input,Ci,fluid,fluidQT) {event.custom({"type": "thermal:bottler","ingredients": [
          {"item": input,"count": Ci},{"fluid": fluid,"amount": fluidQT}],"result": [{"item": output,"count": Co}],"experience": 0.0})}

    function Pulveriser(output,input) {event.custom({"type": "thermal:pulverizer","ingredient": {"item": input},"result":{"item": output},"experience": 0.0})}

    function Insolator(output,Co,input) {event.custom({"type": "thermal:insolator","ingredient": {"item": input},"result": {"item": output,"chance": 1.0,"count": Co},"experience": 0.0})}

    function MSPress(output,input,Ci) {event.custom({"type":"thermal:press","ingredients":{"item":input,"count":Ci},"result":[{"item":output}]})}

    function Crystallizer(output,input,fluid,amount) {event.custom({"type": "thermal:crystallizer","ingredients": [
          {"fluid": fluid,"amount": amount},{"item": input}],"result": [{"item": output}]})}

    function MagmaCrucible(output,amount,input,energy) {event.custom({"type": "thermal:crucible","ingredient": {
          "item": input},"result": [{"fluid": output,"amount": amount}],"energy": energy})}

    InductionSmelter('kubejs:unstable_dust',1,'projecte:low_covalence_dust',1,'projecte:medium_covalence_dust',1,'projecte:high_covalence_dust',1,50000)
    InductionSmelter('kubejs:sculk_ingot',1,'minecraft:netherite_ingot',1,'minecraft:sculk',2,'thermal:emerald_dust',2,16000)
    InductionSmelter('kubejs:chromatic_compound',1,'create:polished_rose_quartz',1,'minecraft:glowstone_dust',3,'mekanism:dust_obsidian',3,3200)
    RedstoneFurnace('kubejs:unstable_dust_hot','kubejs:unstable_dust',1)
    FluidEncapsulator('kubejs:unstable_dragon_pebble',1,'kubejs:unstable_dust_hot',1,'ifeu:liquid_dragon_breath',100)
    Pulveriser('kubejs:unstable_dragon_dust','kubejs:unstable_dragon_pebble')
    Insolator('kubejs:unstable_solar_infused_dust',1,'kubejs:unstable_dragon_dust')
    MSPress('kubejs:supreme_dust','kubejs:unstable_solar_infused_dust',9)
    Crystallizer('projecte:red_matter','kubejs:supreme_dust','industrialforegoing:ether_gas',1000)
    Crystallizer('kubejs:awakened_draconium_crystal','kubejs:draconium_crystal','kubejs:molten_awakened_draconium',100)
    Crystallizer('minecraft:blaze_rod','minecraft:blaze_powder','minecraft:lava',500)
    MSPress('kubejs:blaze_rod_block','botania:blaze_block',4)
    FluidEncapsulator('minecraft:ink_sac',1,'minecraft:leather',1,'create_enchantment_industry:ink',250)
    FluidEncapsulator('create:shadow_steel',1,'kubejs:chromatic_compound',1,'ifeu:liquid_sculk_matter',250)
    FluidEncapsulator('create:refined_radiance',1,'kubejs:chromatic_compound',1,'mekanism:hydrogen',250)
    FluidEncapsulator('create:blaze_cake',1,'create:blaze_cake_base',1,'thermal:refined_fuel',125)
    FluidEncapsulator('cmr:frozen_cake',1,'cmr:frozen_cake_base',1,'kubejs:frost_melon_juice',250)
    FluidEncapsulator('minecraft:cake',1,'createaddition:cake_base_baked',1,'minecraft:milk',1000)
    FluidEncapsulator('createaddition:honey_cake',1,'createaddition:cake_base_baked',1,'create:honey',500)
    FluidEncapsulator('createaddition:chocolate_cake',1,'createaddition:cake_base_baked',1,'create:chocolate',500)
    FluidEncapsulator('laserio:logic_chip',4,'laserio:logic_chip_raw',4,'thermal:creosote',200)
    FluidEncapsulator('pneumaticcraft:pcb_blueprint',1,'pneumaticcraft:empty_pcb',1,'kubejs:molten_lapis',10000)
    FluidEncapsulator('kubejs:incomplete_rough_star',1,'ifeu:empty_nether_star',1,'kubejs:destabilized_star',1000)
    MSPress('minecraft:blaze_rod','minecraft:blaze_powder',4)
    MSPress('createaddition:zinc_sheet','create:zinc_ingot',1)
    MSPress('create:brass_sheet','create:brass_ingot',1)
    MSPress('create:brass_sheet','kubejs:impure_brass_ingot',1)
    MSPress('kubejs:rough_star','kubejs:incomplete_rough_star',1)
    MagmaCrucible('kubejs:molten_awakened_draconium',100,'draconicevolution:awakened_draconium_ingot',30000)
    MagmaCrucible('kubejs:molten_awakened_draconium',900,'draconicevolution:awakened_draconium_block',200000)
    MagmaCrucible('kubejs:destabilized_star',100,'kubejs:nether_star_dust',4000)
    MagmaCrucible('kubejs:molten_lapis',100,'minecraft:lapis_lazuli',4000)
    MagmaCrucible('kubejs:molten_lapis',900,'minecraft:lapis_block',36000)

    function Extruder(ColdBlock,BelowBlock,ResultBlock) {event.custom({"type": "thermal:rock_gen","adjacent": ColdBlock,"below": BelowBlock,"result": {"item": ResultBlock}})}
    Extruder('minecraft:water','kubejs:hyper_experience_block','minecraft:sculk')
    Extruder('kubejs:gaia_essence','botania:terrasteel_block','kubejs:gaia_sand')
    Extruder('create:honey','minecraft:honey_block','minecraft:honeycomb_block')
    Extruder('kubejs:fire_oil','minecraft:red_nether_bricks','minecraft:magma_block')
    Extruder('mekanism:brine','mekanism:block_salt','minecraft:calcite')

    function GrowthPlantInsolator(Plant) {event.custom({"type": "thermal:insolator","ingredient": {"item": Plant},"result": {"item": Plant,"chance": 1.0,"count": 2},"experience": 0.0})}
    const plant = ['botania:lime_double_flower', 'botania:yellow_double_flower', 'botania:orange_double_flower', 'botania:red_double_flower', 'botania:brown_double_flower',
      'botania:black_double_flower', 'botania:gray_double_flower', 'botania:light_gray_double_flower', 'botania:green_double_flower', 'botania:cyan_double_flower',
      'botania:light_blue_double_flower', 'botania:blue_double_flower', 'botania:purple_double_flower', 'botania:magenta_double_flower', 'botania:pink_double_flower',
      'botania:white_double_flower', 'minecraft:grass','botania:lime_mystical_flower', 'botania:green_mystical_flower', 'botania:cyan_mystical_flower',
      'botania:light_blue_mystical_flower', 'botania:blue_mystical_flower', 'botania:purple_mystical_flower', 'botania:magenta_mystical_flower', 'botania:pink_mystical_flower',
      'botania:yellow_mystical_flower', 'botania:orange_mystical_flower', 'botania:red_mystical_flower', 'botania:brown_mystical_flower', 'botania:black_mystical_flower',
      'botania:gray_mystical_flower', 'botania:light_gray_mystical_flower', 'botania:white_mystical_flower']
    plant.forEach(GrowthPlantInsolator);

  function AddonSmelter(addonId, moduleId, nbt) {var ingredient = nbt
      ? { "type": "forge:nbt", "item": addonId, "count": 1, "nbt": nbt }
      : { "item": addonId, "count": 1 }
    event.custom({"type": "thermal:smelter","ingredients": [ ingredient ],"result": [
        { "item": moduleId, "count": 1 },{ "item": "pneumaticcraft:plastic", "count": 2 },{ "item": "minecraft:iron_ingot", "count": 6 }],"energy": 100})}
  AddonSmelter('ifeu:apple_addon_1', 'kubejs:t1apple')
  AddonSmelter('ifeu:apple_addon_2', 'kubejs:t2apple')
  AddonSmelter('ifeu:apple_addon_3', 'kubejs:t3apple')
  AddonSmelter('ifeu:apple_addon_4', 'kubejs:t4apple')
  AddonSmelter('ifeu:apple_addon_5', 'kubejs:t5apple')
  AddonSmelter('ifeu:apple_addon_6', 'kubejs:t6apple')-
  AddonSmelter('ifeu:thread_addon_1', 'kubejs:t1thread')
  AddonSmelter('ifeu:thread_addon_2', 'kubejs:t2thread')
  AddonSmelter('ifeu:thread_addon_3', 'kubejs:t3thread')
  AddonSmelter('ifeu:thread_addon_4', 'kubejs:t4thread')
  AddonSmelter('ifeu:thread_addon_5', 'kubejs:t5thread')
  AddonSmelter('ifeu:thread_addon_6', 'kubejs:t6thread')
  AddonSmelter('ifeu:heal_addon_1', 'kubejs:t1heal')
  AddonSmelter('ifeu:heal_addon_2', 'kubejs:t2heal')
  AddonSmelter('ifeu:heal_addon_3', 'kubejs:t3heal')
  AddonSmelter('ifeu:heal_addon_4', 'kubejs:t4heal')
  AddonSmelter('ifeu:heal_addon_5', 'kubejs:t5heal')
  AddonSmelter('ifeu:heal_addon_6', 'kubejs:t6heal')
  AddonSmelter('industrialforegoing:efficiency_addon_1', 'kubejs:t1eff', '{TitaniumAugment:{Efficiency:0.9f}}')
  AddonSmelter('industrialforegoing:efficiency_addon_2', 'kubejs:t2eff', '{TitaniumAugment:{Efficiency:0.8f}}')
  AddonSmelter('ifeu:efficiency_addon_3', 'kubejs:t3eff', '{TitaniumAugment:{Efficiency:0.7f}}')
  AddonSmelter('ifeu:efficiency_addon_4', 'kubejs:t4eff', '{TitaniumAugment:{Efficiency:0.6f}}')
  AddonSmelter('ifeu:efficiency_addon_5', 'kubejs:t5eff', '{TitaniumAugment:{Efficiency:0.5f}}')
  AddonSmelter('ifeu:efficiency_addon_6', 'kubejs:t6eff', '{TitaniumAugment:{Efficiency:0.39999998f}}')
  AddonSmelter('industrialforegoing:processing_addon_1', 'kubejs:t1proc', '{TitaniumAugment:{Processing:2.0f}}')
  AddonSmelter('industrialforegoing:processing_addon_2', 'kubejs:t2proc', '{TitaniumAugment:{Processing:3.0f}}')
  AddonSmelter('ifeu:processing_addon_3', 'kubejs:t3proc', '{TitaniumAugment:{Processing:4.0f}}')
  AddonSmelter('ifeu:processing_addon_4', 'kubejs:t4proc', '{TitaniumAugment:{Processing:5.0f}}')
  AddonSmelter('ifeu:processing_addon_5', 'kubejs:t5proc', '{TitaniumAugment:{Processing:6.0f}}')
  AddonSmelter('ifeu:processing_addon_6', 'kubejs:t6proc', '{TitaniumAugment:{Processing:7.0f}}')
  AddonSmelter('industrialforegoing:speed_addon_1', 'kubejs:t1speed', '{TitaniumAugment:{Speed:2.0f}}')
  AddonSmelter('industrialforegoing:speed_addon_2', 'kubejs:t2speed', '{TitaniumAugment:{Speed:3.0f}}')
  AddonSmelter('ifeu:speed_addon_3', 'kubejs:t3speed', '{TitaniumAugment:{Speed:4.0f}}')
  AddonSmelter('ifeu:speed_addon_4', 'kubejs:t4speed', '{TitaniumAugment:{Speed:5.0f}}')
  AddonSmelter('ifeu:speed_addon_4', 'kubejs:t4speed', '{TitaniumAugment:{Speed:7.0f}}')
  AddonSmelter('ifeu:speed_addon_5', 'kubejs:t5speed', '{TitaniumAugment:{Speed:6.0f}}')
  AddonSmelter('ifeu:speed_addon_5', 'kubejs:t5speed', '{TitaniumAugment:{Speed:21.0f}}')
  AddonSmelter('ifeu:speed_addon_6', 'kubejs:t6speed', '{TitaniumAugment:{Speed:7.0f}}')
  AddonSmelter('ifeu:speed_addon_6', 'kubejs:t6speed', '{TitaniumAugment:{Speed:101.0f}}')
  AddonSmelter('industrialforegoing:range_addon0',  'kubejs:t1range',  '{TitaniumAugment:{Range:0.0f}}')
  AddonSmelter('industrialforegoing:range_addon1',  'kubejs:t2range',  '{TitaniumAugment:{Range:1.0f}}')
  AddonSmelter('industrialforegoing:range_addon2',  'kubejs:t3range',  '{TitaniumAugment:{Range:2.0f}}')
  AddonSmelter('industrialforegoing:range_addon3',  'kubejs:t4range',  '{TitaniumAugment:{Range:3.0f}}')
  AddonSmelter('industrialforegoing:range_addon4',  'kubejs:t5range',  '{TitaniumAugment:{Range:4.0f}}')
  AddonSmelter('industrialforegoing:range_addon5',  'kubejs:t6range',  '{TitaniumAugment:{Range:5.0f}}')
  AddonSmelter('industrialforegoing:range_addon6',  'kubejs:t7range',  '{TitaniumAugment:{Range:6.0f}}')
  AddonSmelter('industrialforegoing:range_addon7',  'kubejs:t8range',  '{TitaniumAugment:{Range:7.0f}}')
  AddonSmelter('industrialforegoing:range_addon8',  'kubejs:t9range',  '{TitaniumAugment:{Range:8.0f}}')
  AddonSmelter('industrialforegoing:range_addon9',  'kubejs:t10range', '{TitaniumAugment:{Range:9.0f}}')
  AddonSmelter('industrialforegoing:range_addon10', 'kubejs:t11range', '{TitaniumAugment:{Range:10.0f}}')
  AddonSmelter('industrialforegoing:range_addon11', 'kubejs:t12range', '{TitaniumAugment:{Range:11.0f}}')

})

