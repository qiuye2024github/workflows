ServerEvents.recipes(event => {

    function OsmiumCompressor(output,input,chemicalamount) {event.custom({"type":"mekanism:compressing","chemicalInput":{"amount":chemicalamount,"gas":"mekanism:osmium"},
        "itemInput":{"ingredient":{"item": input}},"output":{"item": output}})}
    OsmiumCompressor('pneumaticcraft:ingot_iron_compressed','minecraft:iron_ingot',1)
    OsmiumCompressor('pneumaticcraft:compressed_iron_block','minecraft:iron_block',9)

    function InjectionChamber(output,input,chemicalamount) {event.custom({"type":"mekanism:injecting","chemicalInput":{"amount":chemicalamount,"gas":"mekanism:hydrogen_chloride"},
        "itemInput":{"ingredient":{"item":input}},"output":{"item":output}})}
    InjectionChamber('kubejs:draconium_shard','kubejs:draconium_crystal',1)
    InjectionChamber('kubejs:awakened_draconium_shard','kubejs:awakened_draconium_crystal',1)

    function PurificationChamber(output,input,chemicalamount) {event.custom({"type":"mekanism:purifying","chemicalInput":{"amount":chemicalamount,"gas":"mekanism:oxygen"}
        ,"itemInput":{"ingredient":{"item":input}},"output":{"item":output}})}
    PurificationChamber('kubejs:draconium_clump','kubejs:draconium_shard',1)
    PurificationChamber('kubejs:awakened_draconium_clump','kubejs:awakened_draconium_shard',1)

    function Crusher(output,input) {event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":input}},"output":{"item":output}})}
    Crusher('kubejs:draconium_dust_dirty','kubejs:draconium_clump')
    Crusher('kubejs:awakened_draconium_dust_dirty','kubejs:awakened_draconium_clump')

    function CrusherAlt(output,Co,input) {event.custom({"type":"mekanism:crushing","input":{"ingredient":{"tag":input}},"output":{"item": output,"count": Co}})}
    CrusherAlt('thermal:sawdust',8,'minecraft:logs')

    function Combining(output,maininput,maininputAmount,extrainput) {event.custom({"type":"mekanism:combining","extraInput":{"ingredient":{"item":extrainput}},
        "mainInput":{"amount":maininputAmount,"ingredient":{"item":maininput}},"output":{"item":output}})}
    function Combining2(output,maininputtag,maininputAmount,extrainput) {event.custom({"type":"mekanism:combining","extraInput":{"ingredient":{"item":extrainput}},
        "mainInput":{"amount":maininputAmount,"ingredient":{"tag":maininputtag}},"output":{"item":output}})}
    Combining('draconicevolution:overworld_draconium_ore','kubejs:draconium_dust_dirty',64,'minecraft:cobblestone')
    Combining('kubejs:end_awakened_draconium_ore','kubejs:awakened_draconium_dust_dirty',64,'minecraft:end_stone')
    Combining2('create:andesite_casing','forge:stripped_logs',1,'create:andesite_alloy')
    Combining2('create:brass_casing','forge:stripped_logs',1,'create:brass_ingot')
    Combining2('create:copper_casing','forge:stripped_logs',1,'minecraft:copper_ingot')
    Combining2('create:shadow_steel_casing','forge:stripped_logs',1,'create:shadow_steel')
    Combining2('create:refined_radiance_casing','forge:stripped_logs',1,'create:refined_radiance')
    Combining('create:railway_casing','create:brass_casing',1,'create:sturdy_sheet')
    Combining('createcasing:creative_casing','create:industrial_iron_block',1,'createcasing:chorium_ingot')
    Combining('emc_interface:emc_interface','projecte:dark_matter_block',1,'projecte:transmutation_table')
    Combining('botania:runic_altar','kubejs:terrestrial_catalyst',1,'botania:rune_mana')
    Combining('minecraft:dragon_egg','ifeu:dead_dragon_egg',1,'ifeu:dragon_star')
    Combining('create:bound_cardboard_block','create:cardboard_block',1,'minecraft:string')
    Combining('mekanism:uranium_ore','thermal:silver_ore',1,'powah:crystal_spirited')
    Combining('kubejs:infinity_casing','avaritia:infinity',1,'kubejs:bedrockium')
    Combining('minecraft:bedrock','kubejs:hardest_stone',1,'kubejs:bedrock_dust')

    function Enrishing(output,Co,input) {event.custom({"type":"mekanism:enriching","input":{"ingredient":{"item":input}},"output":{"item": output,"count": Co}})}
    Enrishing('draconicevolution:awakened_draconium_dust',2,'kubejs:end_awakened_draconium_ore')
    Enrishing('draconicevolution:draconium_dust',2,'draconicevolution:overworld_draconium_ore')
    Enrishing('kubejs:nether_star_dust',2,'kubejs:nether_star_ore')
    Enrishing('kubejs:infinity_pile',2,'kubejs:deepslate_infinity_ore')
    Enrishing('minecraft:nether_star',1,'kubejs:rough_star')
    Enrishing('minecraft:nether_star',1,'ifeu:rough_dragon_star')
    Enrishing('thermal:apatite',2,'thermal:apatite_ore')
    Enrishing('thermal:cinnabar',2,'thermal:cinnabar_ore')
    Enrishing('thermal:niter',2,'thermal:niter_ore')
    Enrishing('thermal:sulfur',2,'thermal:sulfur_ore')
    Enrishing('thermal:sapphire',2,'thermal:sapphire_ore')
    Enrishing('thermal:ruby',2,'thermal:ruby_ore')

    function AntiProtoNucleoSynth(output,input,Gas,GasAmount,time) {event.custom({"type":"mekanism:nucleosynthesizing","duration":time,"gasInput":{"amount":GasAmount,"gas":Gas},
        "itemInput":{"ingredient":{"item":input}},"output":{"item":output}})}
    AntiProtoNucleoSynth('draconicevolution:medium_chaos_frag','powah:crystal_nitro',"mekanismgenerators:fusion_fuel",10000,200)
    AntiProtoNucleoSynth('minecraft:spawner','mekanism:steel_casing',"mekanism:antimatter",100,10000)

    function Reaction(OutputItem,InputItem,InputFluid,FluidAmount,InputGas,GasAmount) {event.custom({"type":"mekanism:reaction","duration":60,"energyRequired":1000,
        "fluidInput":{"amount":FluidAmount,"fluid":InputFluid},"gasInput":{"amount":GasAmount,"gas":InputGas},"itemInput":{"ingredient":{"item":InputItem}},"itemOutput":{"item":OutputItem}})}
    Reaction('kubejs:corium','kubejs:infinity_catalyst','kubejs:molten_awakened_draconium',1000,'mekanism:spent_nuclear_waste',10000)
})