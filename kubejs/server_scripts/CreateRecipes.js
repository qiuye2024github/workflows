ServerEvents.recipes(event => {

    event.recipes.createHaunting('create:cinder_flour','create:wheat_flour')
    event.recipes.createHaunting('minecraft:egg','botania:cocoon')
    event.recipes.createHaunting('minecraft:feather','minecraft:string')
    event.recipes.createHaunting('minecraft:phantom_membrane','minecraft:leather')

    function FanItem(output,input,catalyst) {event.custom({"type":"cmr:custom_fan","ingredients":[{"item":input},{"item":catalyst}],"results": [{"item":output}]})}
    FanItem("industrialforegoing:pink_slime", "minecraft:slime_ball", "minecraft:cherry_leaves")

    event.recipes.createCutting('6x minecraft:melon_slice', 'minecraft:melon').processingTime(50)

    event.recipes.createCrushing(Item.of('projecte:low_covalence_dust', 9),'botania:agricarnation')
    event.recipes.createCrushing(Item.of('projecte:medium_covalence_dust', 9),'botania:tangleberrie')
    event.recipes.createCrushing(Item.of('projecte:high_covalence_dust', 9),'botania:bubbell')
    event.recipes.createCrushing(Item.of('minecraft:string', 2),'thermal:flax')
    event.recipes.createCrushing(Item.of('thermal:sawdust', 6),'#minecraft:logs')
    event.custom({"type": "create:crushing","ingredients": [{"item": "minecraft:bedrock"}],"processingTime": 10,
    "results": [{"count": 1,"item": "minecraft:bedrock"},{"chance": 0.005,"item": "kubejs:bedrock_dust"}]})

    event.recipes.createDeploying('create:blaze_burner', ['create:empty_blaze_burner', 'botania:blaze_block'])
    event.recipes.createDeploying(['kubejs:creative_time_token'],['kubejs:time_token','kubejs:creative_time_token']).keepHeldItem()
    event.recipes.createDeploying(['kubejs:creative_time_token'],['kubejs:advance_time_token','kubejs:creative_time_token']).keepHeldItem()
    event.recipes.createDeploying(['kubejs:creative_time_token'],['kubejs:ultimate_time_token','kubejs:creative_time_token']).keepHeldItem()
    event.recipes.createDeploying([Item.of('gag:time_sand_pouch', '{grains:70000000}')],['gag:time_sand_pouch','kubejs:creative_time_token']).keepHeldItem()

    event.recipes.createEmptying(['industrialforegoing:dryrubber',Fluid.of('minecraft:water',250)],'thermal:rubber')

    function InWorldItemApplication(ItemPlaced,ItemUsed,Result) {event.custom({"type": "create:item_application","ingredients": [{"item": ItemPlaced},{"item": ItemUsed}],"results": [{"item": Result}]})}
    InWorldItemApplication('kubejs:terrestrial_catalyst','botania:rune_mana','botania:runic_altar')
    InWorldItemApplication('projecte:dark_matter_block','projecte:transmutation_table','emc_interface:emc_interface')
    InWorldItemApplication('thermal:silver_ore','powah:crystal_spirited','mekanism:uranium_ore')
    InWorldItemApplication('ifeu:dead_dragon_egg', 'ifeu:dragon_star', 'minecraft:dragon_egg')
    InWorldItemApplication('avaritia:infinity', 'kubejs:bedrockium', 'kubejs:infinity_casing')

    event.recipes.createMixing(Fluid.of('minecraft:lava',1000),[Fluid.of('kubejs:fire_oil',100),'minecraft:cobblestone'])
    event.recipes.createMixing(Fluid.of('kubejs:impure_brass',1000),[Fluid.of('minecraft:lava',1000),'minecraft:copper_ingot','create:zinc_ingot'])
    event.recipes.createMixing('kubejs:earth_flint_block',[Fluid.of('minecraft:water',1000),Fluid.of('kubejs:earth_oil',1000),'kubejs:flint_block'])
    event.recipes.createMixing('ae2:sky_dust',[Fluid.of('kubejs:air_oil',50),'minecraft:flint'])
    event.recipes.createMixing('thermal:rubber',[Fluid.of('industrialforegoing:latex',500),'thermal:sulfur_dust']).heated()

    function SnowmanCoolerMixing(frozenOrCooled,input,output) {event.custom({"type":"create:mixing","heatRequirement":frozenOrCooled,"ingredients":input,"results":output})}
    SnowmanCoolerMixing("cooled",[{"fluid": "kubejs:impure_brass","amount": 1000}],[{"item": "kubejs:impure_brass_ingot"}])
    SnowmanCoolerMixing("cooled",[{"item": 'minecraft:bucket'},{"item": 'minecraft:snow_block'}],[{"item": 'minecraft:powder_snow_bucket'}])
    SnowmanCoolerMixing("frozen",[{"item": "thermal:niter_dust"}],[{"fluid": "kubejs:liquid_nitrogen","amount": 100}])

    event.recipes.createMixing('2x thermal:electrum_nugget',['thermal:silver_nugget','minecraft:gold_nugget']).superheated()
    event.recipes.createMixing('4x thermal:bronze_nugget',['thermal:tin_nugget','3x thermal:copper_nugget']).superheated()
    event.recipes.createMixing('2x thermal:constantan_nugget',['thermal:nickel_nugget','thermal:copper_nugget']).superheated()
    event.recipes.createMixing('3x thermal:invar_nugget',['thermal:nickel_nugget','2x minecraft:iron_nugget']).superheated()

    event.recipes.createSandpaperPolishing('minecraft:nether_star','kubejs:rough_star')
    event.recipes.createSandpaperPolishing('minecraft:nether_star','ifeu:rough_dragon_star')

    event.recipes.createFilling('cmr:frozen_cake', ['cmr:frozen_cake_base', Fluid.of('kubejs:frost_melon_juice', 250)])
    event.recipes.createFilling('kubejs:hyper_experience_block', ['create:experience_block', Fluid.of('create_enchantment_industry:hyper_experience', 1000)])

    event.recipes.createCompacting(Fluid.of('kubejs:mana_oil', 100), 'kubejs:mana_petal')
    event.recipes.createCompacting(Fluid.of('kubejs:water_oil', 100), 'kubejs:water_petal')
    event.recipes.createCompacting(Fluid.of('kubejs:fire_oil', 100), 'kubejs:fire_petal')
    event.recipes.createCompacting(Fluid.of('kubejs:air_oil', 100), 'kubejs:air_petal')
    event.recipes.createCompacting(Fluid.of('kubejs:earth_oil', 100), 'kubejs:earth_petal')
    event.recipes.createCompacting(Fluid.of('kubejs:gaia_essence', 10), ['botania:life_essence',Fluid.of('kubejs:mana_oil', 100)]) 
    event.recipes.createCompacting(Fluid.of('kubejs:frost_melon_juice', 250), ['powah:dry_ice','thermal:frost_melon']) 
    event.recipes.createCompacting([Fluid.of('industrialforegoing:latex', 100), 'minecraft:stripped_acacia_log'],[Fluid.of('minecraft:water', 100), 'minecraft:acacia_log'])

    function createPressingRecipe(output, input) {event.recipes.createPressing(output, input);}
    const pressingPairs = [['create:brass_sheet', 'kubejs:impure_brass_ingot'],['thermalendergy:melodium_plate', 'thermalendergy:melodium_ingot'],
        ['thermalendergy:stellarium_plate', 'thermalendergy:stellarium_ingot'],['thermalendergy:prismalium_plate', 'thermalendergy:prismalium_ingot'],
        ['thermal:netherite_plate', 'minecraft:netherite_ingot'],['thermal:tin_plate', 'thermal:tin_ingot'],['thermal:lead_plate', 'thermal:lead_ingot'],
        ['thermal:silver_plate', 'thermal:silver_ingot'],['thermal:nickel_plate', 'thermal:nickel_ingot'],['thermal:steel_plate', 'thermal:steel_ingot'],
        ['thermal:rose_gold_plate', 'thermal:rose_gold_ingot'],['thermal:bronze_plate', 'thermal:bronze_ingot'],['thermal:invar_plate', 'thermal:invar_ingot'],
        ['thermal:constantan_plate', 'thermal:constantan_ingot'],['thermal:signalum_plate', 'thermal:signalum_ingot'],['thermal:lumium_plate', 'thermal:lumium_ingot'],
        ['thermal:enderium_plate', 'thermal:enderium_ingot']];
    pressingPairs.forEach(([output, input]) => {createPressingRecipe(output, input);});

})