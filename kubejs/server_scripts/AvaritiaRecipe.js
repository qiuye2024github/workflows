ServerEvents.recipes(event => {
 
    event.recipes.extendedcrafting.compressor('extendedcrafting:ultimate_singularity', 'avaritia:eternal_singularity',
      {type: "forge:nbt",item: "extendedcrafting:singularity",count: 1,nbt: '{Id:"extendedcrafting:singularity"}'},2,5000000)
    event.recipes.extendedcrafting.compressor('avaritia:infinity_ingot', 'kubejs:infinity_catalyst', 'kubejs:infinity_pile',100,50000000)
    event.recipes.extendedcrafting.compressor('kubejs:hardest_stone', 'kubejs:infinity_catalyst', 'kubejs:earth_flint_block',64,1000000000)
    event.recipes.extendedcrafting.compressor('kubejs:ultimate_spatial_component', 'kubejs:infinity_catalyst', 'ae2:spatial_cell_component_128',10,100000000)
    event.recipes.extendedcrafting.compressor('kubejs:ultimate_storage_component', 'kubejs:infinity_catalyst', 'ae2:cell_component_256k',10,100000000)

    function ExtremeSmithing(Output,BaseInput,UpInput,RightInput,LeftInput,DownInput) {event.custom({"type": "avaritia:extreme_smithing","addition": 
        [{"item": UpInput},{"item": RightInput},{"item": DownInput}],"base": {"item": BaseInput},"result": {"item": Output},"template": {"item": LeftInput}})}
    ExtremeSmithing('thermal:rf_coil_creative_augment', 'thermal:rf_coil_augment', 'thermal:rf_coil_xfer_augment',
         'thermal:rf_coil_storage_augment', 'avaritia:upgrade_smithing_template', 'avaritia:enhancement_core')
    ExtremeSmithing('thermal:machine_catalyst_creative_augment', 'thermal:machine_catalyst_augment', 'thermalendergy:resonant_catalyst_augment',
         'thermalendergy:resonant_catalyst_augment', 'avaritia:upgrade_smithing_template', 'avaritia:enhancement_core')
    ExtremeSmithing('thermal:fluid_tank_creative_augment', 'thermal:fluid_tank_augment', 'avaritia:infinity_bucket',
         'kubejs:experience', 'avaritia:upgrade_smithing_template', 'avaritia:enhancement_core')
    ExtremeSmithing('thermal:machine_efficiency_creative_augment', 'thermal:machine_efficiency_augment', 'thermalendergy:efficiency_nullifier_augment',
         'thermalendergy:energy_nullifier_augment', 'avaritia:upgrade_smithing_template', 'avaritia:enhancement_core')
    ExtremeSmithing('create:creative_motor', 'createaddition:electric_motor', 'create:steam_engine', 
         'create:blaze_burner', 'avaritia:upgrade_smithing_template', 'avaritia:enhancement_core')
    ExtremeSmithing('botania:creative_pool', 'appbot:fluix_mana_pool', 'appbot:mana_storage_cell_256k',
         'kubejs:gaia', 'avaritia:upgrade_smithing_template', 'avaritia:enhancement_core')
    ExtremeSmithing('ae2:creative_energy_cell', 'ae2:vibration_chamber', 'mekanism:ultimate_induction_provider',
         'mekanism:ultimate_induction_cell', 'avaritia:upgrade_smithing_template', 'avaritia:enhancement_core')
    ExtremeSmithing('createaddition:creative_energy', 'draconicevolution:reactor_core', 'ae2:creative_energy_cell',
         'avaritia:star_fuel_block', 'avaritia:upgrade_smithing_template', 'avaritia:enhancement_core')
    ExtremeSmithing('pneumaticcraft:creative_compressed_iron_block', 'pneumaticcraft:compressed_iron_block', 'mekanism:resistive_heater',
         'pneumaticcraft:vortex_tube', 'avaritia:upgrade_smithing_template', 'avaritia:enhancement_core')
    ExtremeSmithing('pneumaticcraft:creative_compressor', 'pneumaticcraft:flux_compressor', 'pneumaticcraft:solar_compressor',
         'pneumaticcraft:advanced_air_compressor', 'avaritia:upgrade_smithing_template', 'avaritia:enhancement_core')
    ExtremeSmithing('mekanism:creative_chemical_tank', 'mekanism:ultimate_chemical_tank', 'kubejs:antimatter',
         'kubejs:chaos', 'avaritia:upgrade_smithing_template', 'avaritia:enhancement_core')
    ExtremeSmithing('mekanism:creative_fluid_tank', 'mekanism:ultimate_fluid_tank', 'thermal:fluid_tank_creative_augment',
         'kubejs:experience', 'avaritia:upgrade_smithing_template', 'avaritia:enhancement_core')

})