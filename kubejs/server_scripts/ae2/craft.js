ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:f",id:"minecraft:water"}}'),
        [
            'ae2:fluid_cell_housing',
            'cookingforblockheads:sink',
            'ae2:storage_bus'
        ]
    )
    event.shaped(
        Item.of('ae2:quartz_fiber', 3),
        [
            'AAA',
            'BBB',
            'AAA'
        ],
        {
            A: '#forge:glass',
            B: '#forge:dusts/quartz'
        }
    )
    event.shaped(
        Item.of('ae2:quartz_glass', 4),
        [
            'ABA',
            'BAB',
            'ABA'
        ],
        {
            A: '#forge:glass',
            B: '#forge:dusts/quartz'
        }
    )
    event.remove({ id: 'ae2:network/cables/glass_fluix' })
    event.shaped(
        Item.of('ae2:fluix_glass_cable', 4),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: '#forge:glass',
            B: 'enderio:conduit_binder',
            C: 'ae2:fluix_crystal',
            D: 'ae2:quartz_fiber'
        }
    )
    event.remove({ output: 'ae2:inscriber' })
    event.shaped(
        Item.of('ae2:inscriber'),
        [
            'ABA',
            'ACD',
            'AEA'
        ],
        {
            A: 'minecraft:iron_ingot',
            B: [
                'minecraft:sticky_piston',
                'minecraft:piston'
            ],
            C: 'kubejs:machine_frame',
            D: 'minecraft:copper_ingot',
            E: 'minecraft:sticky_piston'
        }
    )
    event.remove({ output: 'ae2:charger' })
    event.shaped(
        Item.of('ae2:charger'),
        [
            'AAB',
            'ACD',
            'AAB'
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'minecraft:copper_ingot',
            C: 'kubejs:machine_frame',
            D: 'immersiveengineering:charging_station'
        }
    )
    event.remove({ output: 'ae2:vibration_chamber' })
    event.shaped(
        Item.of('ae2:vibration_chamber'),
        [
            'ABA',
            'CDC',
            'CEC'
        ],
        {
            A: 'minecraft:copper_ingot',
            B: 'ae2:fluix_crystal',
            C: 'minecraft:iron_ingot',
            D: 'minecraft:furnace',
            E: [
                'ae2:energy_cell',
                'mekanism:energy_tablet'
            ]
        }
    )
    event.remove({ id: 'ae2:network/blocks/energy_energy_acceptor' })
    event.shaped(
        Item.of('ae2:energy_acceptor'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'ae2:quartz_glass',
            C: 'immersiveengineering:wirecoil_copper',
            D: 'kubejs:machine_frame',
            E: 'ae2:vibration_chamber'
        }
    )
    event.remove({ output: 'ae2:controller' })
    event.shaped(
        Item.of('ae2:controller', 2),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'ae2:smooth_sky_stone_block',
            B: 'ae2:fluix_block',
            C: 'ae2:engineering_processor',
            D: 'ae2:energy_acceptor',
            E: 'immersiveengineering:logic_circuit'
        }
    )
    event.remove({ id: 'ae2:network/blocks/pattern_providers_interface' })
    event.shaped(
        Item.of('ae2:pattern_provider'),
        [
            'ABA',
            'CDE',
            'FGF'
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'create:package_frogport',
            C: 'ae2:annihilation_core',
            D: 'kubejs:machine_frame',
            E: 'ae2:formation_core',
            F: '#forge:ingots/brass',
            G: 'immersiveengineering:logic_circuit'
        }
    )
    event.remove({ id: 'ae2:network/crafting/cpu_crafting_unit' })
    event.shaped(
        Item.of('ae2:crafting_unit'),
        [
            'ABA',
            'CDE',
            'FGF'
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'create:stock_ticker',
            C: 'ae2:calculation_processor',
            D: 'kubejs:machine_frame',
            E: 'ae2:calculation_processor',
            F: '#forge:ingots/invar',
            G: 'immersiveengineering:logic_circuit'
        }
    )
    event.remove({ id: 'ae2:network/blocks/interfaces_interface' })
    event.shaped(
        Item.of('ae2:interface'),
        [
            'ABA',
            'CDE',
            'FGF'
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'minecraft:dispenser',
            C: 'ae2:annihilation_core',
            D: 'kubejs:machine_frame',
            E: 'ae2:formation_core',
            F: '#forge:ingots/tin',
            G: 'immersiveengineering:logic_circuit'
        }
    )
    event.remove({ output: 'merequester:requester' })
    event.shaped(
        Item.of('merequester:requester'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'create:redstone_requester',
            C: 'ae2:crafting_accelerator',
            D: 'ae2:engineering_processor',
            E: 'minecraft:copper_ingot',
            F: 'ae2:interface'
        }
    )
    event.remove({ output: 'packagedauto:packager' })
    event.shaped(
        Item.of('packagedauto:packager'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'create:packager',
            C: 'ae2:calculation_processor',
            D: 'kubejs:machine_frame',
            E: 'packagedauto:me_package_component'
        }
    )
    event.remove({ output: 'packagedauto:unpackager' })
    event.shaped(
        Item.of('packagedauto:unpackager'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'create:repackager',
            C: 'ae2:calculation_processor',
            D: 'kubejs:machine_frame',
            E: 'packagedauto:me_package_component'
        }
    )
    event.remove({ output: 'packagedauto:me_package_component' })
    event.shaped(
        Item.of('packagedauto:me_package_component'),
        [
            'ABA',
            'CDE',
            'AFA'
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'ae2:quartz_glass',
            C: 'ae2:annihilation_core',
            D: 'packagedauto:package_component',
            E: 'ae2:formation_core',
            F: 'immersiveengineering:logic_circuit'
        }
    )
    event.remove({ output: 'ae2:molecular_assembler' })
    event.shaped(
        Item.of('ae2:molecular_assembler'),
        [
            'ABA',
            'CDE',
            'AFA'
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'ae2:quartz_glass',
            C: 'ae2:annihilation_core',
            D: 'kubejs:machine_frame',
            E: 'ae2:formation_core',
            F: [
                'quark:crafter',
                'create:mechanical_crafter'
            ]
        }
    )
    event.remove({ output: 'ae2:blank_pattern' })
    event.shaped(
        Item.of('ae2:blank_pattern', 3),
        [
            'ABA',
            'BCB',
            'DED'
        ],
        {
            A: 'ae2:quartz_glass',
            B: [
                'minecraft:glowstone_dust',
                'minecraft:redstone'
            ],
            C: 'kubejs:crystal_memory',
            D: 'minecraft:iron_ingot',
            E: 'thermal:beekeeper_fabric'
        }
    )
    event.remove({ output: 'packagedauto:recipe_holder' })
    event.shaped(
        Item.of('packagedauto:recipe_holder', 2),
        [
            'ABA',
            'BCB',
            'DED'
        ],
        {
            A: 'ae2:quartz_glass',
            B: 'minecraft:redstone',
            C: 'ae2:blank_pattern',
            D: 'minecraft:copper_ingot',
            E: 'packagedauto:package_component'
        }
    )
    event.remove({ output: 'advanced_ae:reaction_chamber' })
    event.shaped(
        Item.of('advanced_ae:reaction_chamber'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'industrialforegoing:dissolution_chamber',
            C: 'ae2:fluix_dust',
            D: 'industrialforegoing:machine_frame_advanced',
            E: 'ae2:condenser'
        }
    )
    event.remove({ output: 'expatternprovider:circuit_cutter' })
    event.shaped(
        Item.of('expatternprovider:circuit_cutter'),
        [
            'ABA',
            'CDE',
            'FGH'
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'expatternprovider:ex_inscriber',
            C: 'ae2:calculation_processor_press',
            D: 'industrialforegoing:machine_frame_advanced',
            E: 'ae2:engineering_processor_press',
            F: 'ae2:logic_processor_press',
            G: 'create:mechanical_saw',
            H: 'ae2:silicon_press'
        }
    )
    event.remove({ output: 'appbot:mana_cell_housing' })
    event.shaped(
        Item.of('appbot:mana_cell_housing'),
        [
            'ABA',
            'B B',
            'CCC'
        ],
        {
            A: 'ae2:quartz_glass',
            B: '#forge:ingots/elementium',
            C: '#forge:ingots/manasteel'
        }
    )
    event.remove({ output: 'ae2:quartz_vibrant_glass' })
    event.shaped(
        Item.of('ae2:quartz_vibrant_glass'),
        [
            ' A ',
            'BCB',
            ' A '
        ],
        {
            A: 'extendedcrafting:luminessence',
            B: 'minecraft:glowstone_dust',
            C: 'ae2:quartz_glass'
        }
    )
    event.remove({ id: 'expatternprovider:cobblestone_cell' })
    event.shaped(
        Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:i",id:"minecraft:cobblestone"}}'),
        [
            'ABA',
            'CDE',
            'FFF'
        ],
        {
            A: 'ae2:quartz_glass',
            B: [
                'thermal:device_rock_gen',
                'industrialforegoing:material_stonework_factory'
            ],
            C: 'minecraft:lava_bucket',
            D: 'ae2:cell_component_16k',
            E: 'minecraft:water_bucket',
            F: 'botanicalextramachinery:crystal_ingot'
        }
    )
    event.remove({ output: 'expatternprovider:assembler_matrix_frame' })
    event.shaped(
        Item.of('expatternprovider:assembler_matrix_frame', 6),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'minecraft:quartz_block',
            C: 'minecraft:lapis_lazuli',
            D: 'extendedcrafting:frame',
            E: 'pneumaticcraft:printed_circuit_board'
        }
    )
    event.remove({ output: 'expatternprovider:assembler_matrix_wall' })
    event.shapeless(
        Item.of('expatternprovider:assembler_matrix_wall'),
        [
            'expatternprovider:assembler_matrix_frame',
            '#ae2:smart_cable'
        ]
    )
    event.remove({ output: 'expatternprovider:assembler_matrix_glass' })
    event.shapeless(
        Item.of('expatternprovider:assembler_matrix_glass'),
        [
            'expatternprovider:assembler_matrix_wall',
            '#forge:glass'
        ]
    )
    event.shapeless(
        Item.of('expatternprovider:assembler_matrix_glass', 4),
        [
            '4x expatternprovider:assembler_matrix_wall',
            '#forge:glass'
        ]
    )
    event.remove({ output: 'expatternprovider:assembler_matrix_pattern' })
    event.shaped(
        Item.of('expatternprovider:assembler_matrix_pattern'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'ae2:blue_lumen_paint_ball',
            B: '#ae2:smart_cable',
            C: '#expatternprovider:extended_pattern_provider',
            D: 'expatternprovider:assembler_matrix_wall',
            E: 'pneumaticcraft:printed_circuit_board'
        }
    )
    event.remove({ output: 'expatternprovider:assembler_matrix_speed' })
    event.shaped(
        Item.of('expatternprovider:assembler_matrix_speed'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'ae2:red_lumen_paint_ball',
            B: '#ae2:smart_cable',
            C: 'ae2:speed_card',
            D: 'expatternprovider:assembler_matrix_wall',
            E: 'pneumaticcraft:printed_circuit_board'
        }
    )
    event.remove({ output: 'expatternprovider:assembler_matrix_crafter' })
    event.shaped(
        Item.of('expatternprovider:assembler_matrix_crafter'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'ae2:purple_lumen_paint_ball',
            B: '#ae2:smart_cable',
            C: 'expatternprovider:ex_molecular_assembler',
            D: 'expatternprovider:assembler_matrix_wall',
            E: 'pneumaticcraft:printed_circuit_board'
        }
    )
    event.remove({ output: 'advanced_ae:quantum_structure' })
    event.shaped(
        Item.of('advanced_ae:quantum_structure', 6),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'ae2:smooth_sky_stone_block',
            B: 'ae2:quartz_glass',
            C: 'ae2:quartz_vibrant_glass',
            D: 'extendedcrafting:frame'
        }
    )
    event.remove({ output: 'advanced_ae:quantum_unit' })
    event.shaped(
        Item.of('advanced_ae:quantum_unit'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            A: 'ae2:singularity',
            B: 'megacells:mega_crafting_unit',
            C: 'advanced_ae:quantum_processor',
            D: 'advanced_ae:quantum_structure',
            E: 'ae2:white_smart_cable',
            F: 'pneumaticcraft:printed_circuit_board'
        }
    )
    event.remove({ id: 'advanced_ae:eaeadvpatpro' })
    event.shapeless(
        Item.of('advanced_ae:adv_pattern_provider'),
        [
            '#expatternprovider:extended_pattern_provider',
            'minecraft:redstone',
            'advanced_ae:quantum_processor',
            'minecraft:ender_pearl'
        ]
    )
    event.remove({ id: 'advanced_ae:smallappupgrade' })
    event.shapeless(
        Item.of('advanced_ae:adv_pattern_provider_upgrade'),
        [
            '#forge:ingots',
            'minecraft:redstone',
            'advanced_ae:quantum_processor',
            'minecraft:ender_pearl'
        ]
    )
    event.remove({ id: 'advanced_ae:smalladvpatpro' })
    event.shapeless(
        Item.of('advanced_ae:small_adv_pattern_provider'),
        [
            '#ae2:pattern_provider',
            'minecraft:redstone',
            'advanced_ae:quantum_processor',
            'minecraft:ender_pearl'
        ]
    )
    event.remove({ id: 'expatternprovider:epp' })
    event.shapeless(
        Item.of('expatternprovider:ex_pattern_provider'),
        [
            '#megacells:mega_pattern_provider',
            'ae2:capacity_card',
            'ae2:capacity_card',
            'ae2:engineering_processor'
        ]
    )
    event.remove({ id: 'expatternprovider:epp_upgrade' })
    event.shapeless(
        Item.of('expatternprovider:pattern_provider_upgrade'),
        [
            '#forge:ingots',
            'ae2:capacity_card',
            'ae2:capacity_card',
            'ae2:engineering_processor',
            'megacells:accumulation_processor'
        ]
    )
    event.remove({ id: 'expatternprovider:ei' })
    event.shapeless(
        Item.of('expatternprovider:ex_interface'),
        [
            '#megacells:mega_interface',
            'ae2:capacity_card',
            'ae2:capacity_card',
            'ae2:engineering_processor'
        ]
    )
    event.remove({ id: 'expatternprovider:ei_upgrade' })
    event.shapeless(
        Item.of('expatternprovider:interface_upgrade'),
        [
            '#forge:ingots',
            'ae2:capacity_card',
            'ae2:capacity_card',
            'ae2:logic_processor',
            'megacells:accumulation_processor'
        ]
    )
    event.remove({ id: 'advanced_ae:largeappupgrade' })
    event.shapeless(
        Item.of('advanced_ae:adv_pattern_provider_capacity_upgrade'),
        [
            '#forge:ingots',
            'ae2:capacity_card',
            'ae2:capacity_card',
            'ae2:engineering_processor',
            'megacells:accumulation_processor',
            'minecraft:redstone'
        ]
    )
    event.remove({ id: 'appflux:flux_accessor' })
    event.shaped(
        Item.of('appflux:flux_accessor'),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'minecraft:copper_ingot',
            B: 'appflux:energy_processor',
            C: 'advanced_ae:quantum_processor',
            D: 'ae2:energy_acceptor'
        }
    )
    event.remove({ output: 'expatternprovider:wireless_connect' })
    event.shaped(
        Item.of('expatternprovider:wireless_connect', 2),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'ae2:sky_dust',
            B: '#ae2:smart_cable',
            C: 'ae2:wireless_receiver',
            D: 'industrialforegoing:machine_frame_advanced',
            E: 'mekanism:teleportation_core'
        }
    )
    event.shapeless(
        Item.of('appbot:creative_mana_cell'),
        [
            'appbot:mana_cell_housing',
            'kubejs:cell_component_creative'
        ]
    )
    event.shapeless(
        Item.of('ae2:creative_item_cell'),
        [
            'ae2:item_cell_housing',
            'kubejs:cell_component_creative'
        ]
    )
    event.shapeless(
        Item.of('ae2:creative_fluid_cell'),
        [
            'ae2:fluid_cell_housing',
            'kubejs:cell_component_creative'
        ]
    )
    event.shapeless(
        Item.of('appmek:creative_chemical_cell'),
        [
            'appmek:chemical_cell_housing',
            'kubejs:cell_component_creative'
        ]
    )
    event.shapeless(
        Item.of('arseng:creative_source_cell'),
        [
            'arseng:source_cell_housing',
            'kubejs:cell_component_creative'
        ]
    )
    event.remove({ output: 'ae2:drive' })
    event.shaped(
        Item.of('ae2:drive'),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'ae2:engineering_processor',
            C: '#ae2:glass_cable',
            D: 'minecraft:chiseled_bookshelf'
        }
    )
})