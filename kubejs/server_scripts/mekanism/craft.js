ServerEvents.recipes(event => {
    event.remove({ output: 'mekanism:teleporter_frame' })
    event.shaped(
        Item.of('mekanism:teleporter_frame'),
        [
            'AAA',
            'ACA',
            'AAA'
        ],
        {
            A: 'mekanism:ingot_refined_obsidian',
            C: 'mekanism:teleportation_core',
        }
    )
    event.shaped(
        Item.of('mekanism:teleporter_frame'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'mekanism:ingot_refined_obsidian',
            B: 'mekanism:ingot_refined_glowstone',
            C: 'mekanism:teleportation_core',
        }
    )
    event.remove({ output: 'mekanism:configurator' })
    event.shaped(
        Item.of('mekanism:configurator'),
        [
            'AA',
            ' B',
            ' C'
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'minecraft:lapis_lazuli',
            C: '#forge:ingots/osmium',
        }
    )
    event.remove({ output: 'mekanism:basic_mechanical_pipe' })
    event.shaped(
        Item.of('mekanism:basic_mechanical_pipe', 8),
        [
            'ABA'
        ],
        {
            A: '#forge:ingots/steel',
            B: [
                'immersiveengineering:fluid_pipe',
                'create:fluid_pipe',
                'minecraft:bucket'
            ]
        }
    )
    event.remove({ output: 'mekanism:basic_logistical_transporter' })
    event.shaped(
        Item.of('mekanism:basic_logistical_transporter', 8),
        [
            'ABA'
        ],
        {
            A: '#forge:ingots/steel',
            B: [
                '#forge:circuits/basic',
                'minecraft:dispenser'
            ]
        }
    )
    event.remove({ output: 'mekanismgenerators:turbine_blade' })
    event.shaped(
        Item.of('mekanismgenerators:turbine_blade'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: '#mekanism:alloys/infused',
            B: '#forge:plates/steel',
            C: 'create:propeller'
        }
    )
    event.remove({ output: 'mekanism:steel_casing' })
    event.shaped(
        Item.of('mekanism:steel_casing'),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: '#forge:ingots/steel',
            B: '#forge:ingots/osmium',
            C: 'immersiveengineering:blastbrick_reinforced',
            D: 'create:andesite_casing'
        }
    )
    event.remove({ output: 'mekanismgenerators:heat_generator' })
    event.shaped(
        Item.of('mekanismgenerators:heat_generator'),
        [
            'AAB',
            'ACD',
            'EFB'
        ],
        {
            A: '#forge:ingots/tin',
            B: '#forge:ingots/osmium',
            C: 'immersiveengineering:generator',
            D: '#forge:ingots/copper',
            E: '#forge:ingots/iron',
            F: 'minecraft:furnace'
        }
    )
    event.remove({ output: 'mekanism:metallurgic_infuser' })
    event.shaped(
        Item.of('mekanism:metallurgic_infuser'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            A: '#forge:ingots/osmium',
            B: 'ars_nouveau:imbuement_chamber',
            C: '#forge:circuits/basic',
            D: 'mekanism:steel_casing',
            E: '#forge:ingots/steel',
            F: 'minecraft:furnace'
        }
    )
    event.remove({ output: 'mekanismgenerators:solar_panel' })
    event.shaped(
        Item.of('mekanismgenerators:solar_panel'),
        [
            'AAA',
            'BBB',
            'CDC'
        ],
        {
            A: '#forge:glass_panes/colorless',
            B: 'enderio:photovoltaic_plate',
            C: '#forge:ingots/osmium',
            D: 'mekanism:alloy_infused'
        }
    )
    event.shaped(
        Item.of('mekanismgenerators:solar_panel'),
        [
            'AAA',
            'EBE',
            'CDC'
        ],
        {
            A: '#forge:glass_panes/colorless',
            B: 'powah:photoelectric_pane',
            C: '#forge:ingots/osmium',
            D: 'mekanism:alloy_infused',
            E: 'minecraft:redstone'
        }
    )
    event.remove({ output: 'mekanism:pressurized_reaction_chamber' })
    event.shaped(
        Item.of('mekanism:pressurized_reaction_chamber'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            A: '#forge:ingots/steel',
            B: 'advanced_ae:reaction_chamber',
            C: 'mekanism:advanced_control_circuit',
            D: 'mekanism:steel_casing',
            E: 'mekanism:basic_chemical_tank',
            F: 'mekanism:dynamic_tank'
        }
    )
    event.remove({ output: 'mekanism:rotary_condensentrator' })
    event.shaped(
        Item.of('mekanism:rotary_condensentrator'),
        [
            'ABA',
            'CDE',
            'FGF'
        ],
        {
            A: '#forge:glass',
            B: 'pneumaticcraft:heat_pipe',
            C: 'mekanism:basic_chemical_tank',
            D: 'mekanism:steel_casing',
            E: 'mekanism:basic_fluid_tank',
            F: '#forge:ingots/steel',
            G: 'mekanism:advanced_control_circuit'
        }
    )
    event.remove({ output: 'mekanism:electrolytic_separator' })
    event.shaped(
        Item.of('mekanism:electrolytic_separator'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            A: '#forge:ingots/steel',
            B: [
                'immersiveindustry:electrolyzer',
                'mekanism:electrolytic_core'
            ],
            C: 'mekanism:basic_chemical_tank',
            D: 'mekanism:steel_casing',
            E: 'mekanism:advanced_control_circuit',
            F: 'mekanism:basic_fluid_tank'
        }
    )
    event.remove({ output: 'mekanism:crusher' })
    event.shaped(
        Item.of('mekanism:crusher'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            A: '#forge:ingots/steel',
            B: 'thermal:machine_pulverizer',
            C: 'minecraft:lava_bucket',
            D: 'mekanism:steel_casing',
            E: 'mekanism:advanced_control_circuit',
            F: 'minecraft:redstone_block'
        }
    ).replaceInput('minecraft:bucket', 'minecraft:lava_bucket')
    event.remove({ output: 'mekanism:enrichment_chamber' })
    event.shaped(
        Item.of('mekanism:enrichment_chamber'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            A: '#forge:ingots/steel',
            B: 'minecraft:piston',
            C: 'bloodmagic:etherealslate',
            D: 'mekanism:steel_casing',
            E: 'mekanism:advanced_control_circuit',
            F: 'minecraft:redstone_block'
        }
    )
    event.remove({ output: 'mekanism:combiner' })
    event.shaped(
        Item.of('mekanism:combiner'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            A: '#forge:ingots/steel',
            B: 'minecraft:furnace',
            C: 'mekanism:alloy_reinforced',
            D: 'mekanism:steel_casing',
            E: 'mekanism:elite_control_circuit',
            F: 'minecraft:redstone_block'
        }
    )
    event.remove({ output: 'mekanism:osmium_compressor' })
    event.shaped(
        Item.of('mekanism:osmium_compressor'),
        [
            'ABA',
            'CDG',
            'EFE'
        ],
        {
            A: '#forge:ingots/steel',
            B: 'thermal:machine_press',
            C: 'mekanism:basic_chemical_tank',
            D: 'mekanism:steel_casing',
            E: 'mekanism:elite_control_circuit',
            F: 'minecraft:redstone_block',
            G: [
                '#forge:chests',
                '#forge:barrels/wooden'
            ]
        }
    )
    event.remove({ output: 'mekanism:thermal_evaporation_block' })
    event.shaped(
        Item.of('mekanism:thermal_evaporation_block', 4),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: '#forge:ingots/steel',
            B: [
                'voidminers:aurantium',
                'voidminers:citrinetine'
            ],
            C: '#forge:ingots/copper',
            D: [
                'create:andesite_casing',
                'create:copper_casing',
                'create:brass_casing'
            ],
            E: 'mekanism:ingot_refined_glowstone'
        }
    )
    event.remove({ output: 'mekanism:thermal_evaporation_valve' })
    event.shaped(
        Item.of('mekanism:thermal_evaporation_valve'),
        [
            ' A ',
            'BCB',
            ' A '
        ],
        {
            A: 'mekanism:advanced_control_circuit',
            B: 'mekanism:thermal_evaporation_block',
            C: 'create:fluid_valve'
        }
    )
    event.remove({ output: 'mekanism:thermal_evaporation_controller' })
    event.shaped(
        Item.of('mekanism:thermal_evaporation_controller'),
        [
            'ABA',
            'CDC',
            'CCC'
        ],
        {
            A: 'mekanism:elite_control_circuit',
            B: 'rftoolsutility:screen',
            C: 'mekanism:thermal_evaporation_block',
            D: 'ae2:controller'
        }
    )
    event.remove({ output: 'mekanism:chemical_crystallizer' })
    event.shaped(
        Item.of('mekanism:chemical_crystallizer'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            A: '#forge:ingots/steel',
            B: 'thermal:machine_chiller',
            C: 'mekanism:fluorite_gem',
            D: 'mekanism:steel_casing',
            E: 'mekanism:elite_control_circuit',
            F: 'mekanism:ingot_refined_obsidian'
        }
    )
    event.remove({ output: 'mekanismgenerators:fission_reactor_casing' })
    event.shaped(
        Item.of('mekanismgenerators:fission_reactor_casing', 4),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: '#forge:ingots/steel',
            B: '#forge:ingots/lead',
            C: 'mekanism:steel_casing'
        }
    )
    event.remove({ output: 'mekanismgenerators:fission_reactor_port' })
    event.shaped(
        Item.of('mekanismgenerators:fission_reactor_port'),
        [
            ' A ',
            'BCB',
            ' A '
        ],
        {
            A: 'mekanism:ultimate_control_circuit',
            B: 'mekanismgenerators:fission_reactor_casing',
            C: 'create:fluid_valve'
        }
    )
    event.remove({ output: 'mekanismgenerators:fission_reactor_logic_adapter' })
    event.shaped(
        Item.of('mekanismgenerators:fission_reactor_logic_adapter'),
        [
            ' A ',
            'ABA',
            ' C '
        ],
        {
            A: 'minecraft:redstone',
            B: 'mekanismgenerators:fission_reactor_casing',
            C: 'ae2:logic_processor'
        }
    )
    event.remove({ output: 'mekanismgenerators:fission_fuel_assembly' })
    event.shaped(
        Item.of('mekanismgenerators:fission_fuel_assembly', 2),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: '#forge:ingots/steel',
            B: '#forge:ingots/hop_graphite',
            C: '#forge:ingots/lead',
            D: 'mekanism:basic_chemical_tank'
        }
    )
    event.remove({ output: 'mekanismgenerators:control_rod_assembly' })
    event.shaped(
        Item.of('mekanismgenerators:control_rod_assembly'),
        [
            'ABA',
            'CDC',
            'EDE'
        ],
        {
            A: '#forge:ingots/tin',
            B: 'mekanism:ultimate_control_circuit',
            C: '#forge:ingots/lead',
            D: '#forge:ingots/hop_graphite',
            E: '#forge:ingots/steel'
        }
    )
    event.remove({ output: 'mekanism:isotopic_centrifuge' })
    event.shaped(
        Item.of('mekanism:isotopic_centrifuge'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            A: '#forge:ingots/steel',
            B: 'thermal:machine_centrifuge',
            C: 'mekanism:ultimate_control_circuit',
            D: 'mekanism:steel_casing',
            E: 'thermal:lead_ingot',
            F: 'mekanism:basic_chemical_tank'
        }
    )
    event.remove({ output: 'mekanism:chemical_infuser' })
    event.shaped(
        Item.of('mekanism:chemical_infuser'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            A: '#forge:ingots/steel',
            B: 'create:mechanical_mixer',
            C: 'mekanism:basic_chemical_tank',
            D: 'mekanism:steel_casing',
            E: 'mekanism:elite_control_circuit',
            F: 'mekanism:alloy_reinforced'
        }
    )
    event.remove({ output: 'mekanism:chemical_dissolution_chamber' })
    event.shaped(
        Item.of('mekanism:chemical_dissolution_chamber'),
        [
            'ABA',
            'CDG',
            'EFE'
        ],
        {
            A: '#forge:ingots/steel',
            B: 'industrialforegoing:dissolution_chamber',
            C: '#mekanism:personal_storage',
            D: 'mekanism:steel_casing',
            E: 'mekanism:ultimate_control_circuit',
            F: 'mekanism:block_refined_obsidian',
            G: 'mekanism:basic_chemical_tank'
        }
    )
    event.remove({ output: 'mekanism:chemical_oxidizer' })
    event.shaped(
        Item.of('mekanism:chemical_oxidizer'),
        [
            'ABA',
            'CDG',
            'EFE'
        ],
        {
            A: '#forge:ingots/steel',
            B: 'thermal:machine_crucible',
            C: '#mekanism:personal_storage',
            D: 'mekanism:steel_casing',
            E: 'mekanism:elite_control_circuit',
            F: [
                'ars_elemental:lesser_fire_focus',
                'ars_elemental:fire_focus'
            ],
            G: 'mekanism:basic_chemical_tank'
        }
    )
    event.remove({ output: 'mekanism:solar_neutron_activator' })
    event.shaped(
        Item.of('mekanism:solar_neutron_activator'),
        [
            'CBC',
            'ADA',
            'EFE'
        ],
        {
            A: 'kubejs:photomultiplier_tube',
            B: 'mekanismgenerators:advanced_solar_generator',
            C: '#mekanism:alloys/reinforced',
            D: 'mekanism:steel_casing',
            E: 'mekanism:ultimate_control_circuit',
            F: 'mekanism:basic_chemical_tank'
        }
    )
    event.remove({ output: 'mekanism:sps_port' })
    event.shaped(
        Item.of('mekanism:sps_port'),
        [
            ' B ',
            'CDC',
            ' B '
        ],
        {
            B: 'mekanism:ultimate_control_circuit',
            C: 'mekanism:sps_casing',
            D: 'mekanismgenerators:fission_reactor_port'
        }
    )
    event.remove({ output: 'mekanism:structural_glass' })
    event.shaped(
        Item.of('mekanism:structural_glass', 4),
        [
            ' B ',
            'CDC',
            ' B '
        ],
        {
            B: '#forge:ingots/steel',
            C: 'mekanismgenerators:reactor_glass',
            D: 'ae2:quartz_vibrant_glass'
        }
    )
    event.remove({ output: 'mekanism:structural_glass' })
    event.shaped(
        Item.of('mekanism:structural_glass', 4),
        [
            ' B ',
            'CDC',
            ' B '
        ],
        {
            B: '#forge:ingots/steel',
            C: 'ae2:quartz_vibrant_glass',
            D: 'mekanismgenerators:reactor_glass'
        }
    )
    event.remove({ output: 'mekanism:supercharged_coil' })
    event.shaped(
        Item.of('mekanism:supercharged_coil'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            A: 'mekanism:pellet_polonium',
            B: 'immersiveengineering:tesla_coil',
            C: 'mekanismgenerators:electromagnetic_coil',
            D: 'kubejs:photomultiplier_tube',
            E: 'mekanism:ultimate_control_circuit',
            F: 'mekanism:laser'
        }
    )
    event.remove({ output: 'mekmm:large_rotary_condensentrator' })
    event.shaped(
        Item.of('mekmm:large_rotary_condensentrator'),
        [
            'ABA',
            'CDG',
            'EFE'
        ],
        {
            A: 'mekanism:elite_control_circuit',
            B: 'mekanism:robit',
            C: 'mekmm:ultimate_max_chemical_tank',
            D: 'mekanism:steel_casing',
            E: '#forge:storage_blocks/steel',
            F: 'mekanism:rotary_condensentrator',
            G: 'mekanism:ultimate_fluid_tank'
        }
    )
    event.remove({ output: 'mekmm:large_chemical_infuser' })
    event.shaped(
        Item.of('mekmm:large_chemical_infuser'),
        [
            'ABA',
            'CDG',
            'EFE'
        ],
        {
            A: 'mekanism:elite_control_circuit',
            B: 'mekanism:robit',
            C: 'mekmm:ultimate_max_chemical_tank',
            D: 'mekanism:steel_casing',
            E: '#forge:storage_blocks/steel',
            F: 'mekanism:chemical_infuser',
            G: 'mekmm:ultimate_max_chemical_tank'
        }
    )
    event.remove({ output: 'mekmm:large_electrolytic_separator' })
    event.shaped(
        Item.of('mekmm:large_electrolytic_separator'),
        [
            'ABA',
            'CDG',
            'EFE'
        ],
        {
            A: 'mekanism:elite_control_circuit',
            B: 'mekmm:advanced_electrolysis_core',
            C: 'mekanism:ultimate_fluid_tank',
            D: 'mekanism:steel_casing',
            E: '#forge:storage_blocks/steel',
            F: 'mekanism:electrolytic_separator',
            G: 'mekmm:ultimate_max_chemical_tank'
        }
    )
    event.remove({ output: 'mekmm:large_solar_neutron_activator' })
    event.shaped(
        Item.of('mekmm:large_solar_neutron_activator'),
        [
            'ABA',
            'CDG',
            'EFE'
        ],
        {
            A: 'mekanism:ultimate_control_circuit',
            B: 'mekmm:advanced_electrolysis_core',
            C: 'mekmm:ultimate_max_chemical_tank',
            D: 'mekanism:solar_neutron_activator',
            E: '#forge:storage_blocks/steel',
            F: 'kubejs:phototube',
            G: 'mekmm:ultimate_max_chemical_tank'
        }
    )
    event.remove({ output: 'mekmm:large_antiprotonic_nucleosynthesizer' })
    event.shaped(
        Item.of('mekmm:large_antiprotonic_nucleosynthesizer'),
        [
            'ABA',
            'CDG',
            'EFE'
        ],
        {
            A: 'mekanism:ultimate_control_circuit',
            B: 'mekanism:pellet_antimatter',
            C: 'mekmm:ultimate_max_chemical_tank',
            D: 'mekanism:steel_casing',
            E: '#forge:storage_blocks/steel',
            F: 'mekanism:antiprotonic_nucleosynthesizer',
            G: '#mekanism:personal_storage'
        }
    )
    event.remove({ output: 'mekmm:large_pigment_mixer' })
    event.shaped(
        Item.of('mekmm:large_pigment_mixer'),
        [
            'ABA',
            'CDG',
            'EFE'
        ],
        {
            A: 'mekanism:elite_control_circuit',
            B: 'mekanism:robit',
            C: 'mekmm:ultimate_max_chemical_tank',
            D: 'mekanism:steel_casing',
            E: '#forge:storage_blocks/steel',
            F: 'mekanism:pigment_mixer',
            G: 'mekmm:ultimate_max_chemical_tank'
        }
    )
    event.remove({ output: 'mekmm:large_heat_generator' })
    event.shaped(
        Item.of('mekmm:large_heat_generator'),
        [
            'ABA',
            'CDG',
            'EFE'
        ],
        {
            A: 'mekanism:elite_control_circuit',
            B: 'mekanism:ultimate_fluid_tank',
            C: 'mekanism:superheating_element',
            D: 'mekanism:steel_casing',
            E: '#forge:storage_blocks/steel',
            F: 'mekanismgenerators:heat_generator',
            G: 'mekanism:superheating_element'
        }
    )
    event.remove({ output: 'mekmm:large_gas_burning_generator' })
    event.shaped(
        Item.of('mekmm:large_gas_burning_generator'),
        [
            'ABA',
            'CDG',
            'EFE'
        ],
        {
            A: 'mekanism:elite_control_circuit',
            B: 'mekmm:advanced_electrolysis_core',
            C: 'mekmm:ultimate_max_chemical_tank',
            D: 'mekanism:steel_casing',
            E: '#forge:storage_blocks/steel',
            F: 'mekanismgenerators:gas_burning_generator',
            G: 'mekmm:ultimate_max_chemical_tank'
        }
    )
    event.remove({ output: 'mekmm:large_wind_generator' })
    event.shaped(
        Item.of('mekmm:large_wind_generator'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            A: 'mekanism:elite_control_circuit',
            B: 'mekanismgenerators:wind_generator',
            C: '#forge:storage_blocks/steel',
            D: 'mekanism:robit',
            E: 'mekanism:steel_casing',
            F: 'mekanism:ultimate_induction_cell'
        }
    )
    event.remove({ output: 'mekanismgenerators:electromagnetic_coil' })
    event.shaped(
        Item.of('mekanismgenerators:electromagnetic_coil'),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: '#forge:ingots/steel',
            B: '#forge:ingots/gold',
            C: 'mekanism:energy_tablet',
            D: 'immersiveengineering:coil_mv'
        }
    )
    event.remove({ output: 'mekanism:superheating_element' })
    event.shaped(
        Item.of('mekanism:superheating_element'),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'minecraft:redstone',
            B: 'minecraft:copper_ingot',
            C: 'immersiveengineering:wirecoil_copper',
            D: '#forge:sheetmetals/steel'
        }
    )
    event.remove({ output: 'mekanismgenerators:laser_focus_matrix' })
    event.shaped(
        Item.of('mekanismgenerators:laser_focus_matrix'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'mekanismgenerators:reactor_glass',
            B: 'ae2:quartz_vibrant_glass',
            C: '#industrialforegoing:laser_lens'
        }
    )
    event.remove({ output: 'mekanism:laser' })
    event.shaped(
        Item.of('mekanism:laser'),
        [
            ' A ',
            'BCB',
            'DED'
        ],
        {
            A: 'thermal:sapphire',
            B: 'mekanism:energy_tablet',
            C: 'mekanism:steel_casing',
            D: '#forge:ingots/steel',
            E: 'mekanism:alloy_reinforced'
        }
    )
    event.remove({ output: 'mekmm:advanced_electrolysis_core' })
    event.shaped(
        Item.of('mekmm:advanced_electrolysis_core'),
        [
            'ABA',
            'CAC',
            'ABA'
        ],
        {
            A: 'mekanism:alloy_reinforced',
            B: 'mekanism:electrolytic_core',
            C: '#forge:ingots/osmium'
        }
    )
    event.remove({ output: 'mekmm:ambient_gas_collector' })
    event.shaped(
        Item.of('mekmm:ambient_gas_collector'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            A: 'mekanism:elite_control_circuit',
            B: 'mekanism:ultimate_chemical_tank',
            C: 'mekanism:alloy_atomic',
            D: 'mekanism:steel_casing',
            E: '#forge:ingots/steel',
            F: 'mekanism:block_osmium'
        }
    )
    event.remove({ output: 'mekmm:recycler' })
    event.shaped(
        Item.of('mekmm:recycler'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            A: 'mekanism:advanced_control_circuit',
            B: [
                'thermal:device_nullifier',
                'trashcans:energy_trash_can',
                'trashcans:item_trash_can',
                'trashcans:liquid_trash_can',
                'trashcans:ultimate_trash_can'
            ],
            C: 'mekanism:alloy_infused',
            D: 'mekanism:steel_casing',
            E: '#forge:ingots/steel',
            F: 'mekanism:ingot_osmium'
        }
    )
})