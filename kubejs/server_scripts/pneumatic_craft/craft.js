ServerEvents.recipes(event => {
    event.remove({ output: 'pneumaticcraft:pressure_chamber_wall' })
    event.shaped(
        Item.of('pneumaticcraft:pressure_chamber_wall', 12),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'pneumaticcraft:reinforced_bricks',
            B: 'kubejs:machine_frame'
        }
    )
    event.remove({ output: 'pneumaticcraft:thermopneumatic_processing_plant' })
    event.shaped(
        Item.of('pneumaticcraft:thermopneumatic_processing_plant'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'pneumaticcraft:reinforced_stone',
            B: 'pneumaticcraft:pressure_tube',
            C: 'pneumaticcraft:small_tank',
            D: 'kubejs:machine_frame',
            E: 'immersiveengineering:furnace_heater'
        }
    )
    event.remove({ output: 'pneumaticcraft:refinery' })
    event.shaped(
        Item.of('pneumaticcraft:refinery'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'pneumaticcraft:reinforced_stone',
            B: 'pneumaticcraft:refinery_output',
            C: 'pneumaticcraft:small_tank',
            D: 'kubejs:machine_frame',
            E: 'immersiveengineering:furnace_heater'
        }
    )
    event.remove({ output: 'pneumaticcraft:refinery_output' })
    event.shaped(
        Item.of('pneumaticcraft:refinery_output'),
        [
            'AAA',
            'BCB',
            'AAA'
        ],
        {
            A: 'pneumaticcraft:reinforced_stone',
            B: '#forge:glass',
            C: 'pneumaticcraft:small_tank'
        }
    )
    event.remove({ output: 'powah:photoelectric_pane' })
    event.shaped(
        Item.of('powah:photoelectric_pane'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'powah:dielectric_paste',
            B: 'minecraft:lapis_lazuli',
            C: 'enderio:photovoltaic_plate'
        }
    )
    event.remove({ output: 'pneumaticcraft:assembly_controller' })
    event.shaped(
        Item.of('pneumaticcraft:assembly_controller'),
        [
            ' A ',
            'BCD',
            'EFE'
        ],
        {
            A: 'rftoolsutility:screen',
            B: 'pneumaticcraft:pressure_tube',
            C: 'ae2:controller',
            D: 'immersiveengineering:logic_circuit',
            E: 'pneumaticcraft:ingot_iron_compressed',
            F: 'extendedcrafting:frame'
        }
    )
    event.remove({ output: 'pneumaticcraft:assembly_platform' })
    event.shaped(
        Item.of('pneumaticcraft:assembly_platform'),
        [
            'A A',
            'BCB',
            'DED'
        ],
        {
            A: 'pneumaticcraft:pneumatic_cylinder',
            B: 'pneumaticcraft:plastic',
            C: 'create:depot',
            D: 'pneumaticcraft:ingot_iron_compressed',
            E: 'extendedcrafting:frame'
        }
    )
    event.remove({ output: 'pneumaticcraft:assembly_laser' })
    event.shaped(
        Item.of('pneumaticcraft:assembly_laser'),
        [
            'ABC',
            ' DB',
            'EFE'
        ],
        {
            A: [
                'immersiveengineering:toolupgrade_shield_flash',
                'thermal:sapphire'
            ],
            B: 'pneumaticcraft:pneumatic_cylinder',
            C: 'create:mechanical_arm',
            D: 'immersiveengineering:logic_circuit',
            E: 'pneumaticcraft:ingot_iron_compressed',
            F: 'extendedcrafting:frame'
        }
    )
    event.remove({ id: 'pneumaticcraft:assembly_io_unit_import' })
    event.shaped(
        Item.of('pneumaticcraft:assembly_io_unit_import'),
        [
            'ABC',
            ' DB',
            'EFE'
        ],
        {
            A: 'create:brass_hand',
            B: 'pneumaticcraft:pneumatic_cylinder',
            C: 'create:mechanical_arm',
            D: 'immersiveengineering:logic_circuit',
            E: 'pneumaticcraft:ingot_iron_compressed',
            F: 'extendedcrafting:frame'
        }
    )
    event.remove({ id: 'pneumaticcraft:assembly_io_unit_export' })
    event.shaped(
        Item.of('pneumaticcraft:assembly_io_unit_export'),
        [
            'CBA',
            'BD ',
            'EFE'
        ],
        {
            A: 'create:brass_hand',
            B: 'pneumaticcraft:pneumatic_cylinder',
            C: 'create:mechanical_arm',
            D: 'immersiveengineering:logic_circuit',
            E: 'pneumaticcraft:ingot_iron_compressed',
            F: 'extendedcrafting:frame'
        }
    )
    event.remove({ output: 'pneumaticcraft:assembly_drill' })
    event.shaped(
        Item.of('pneumaticcraft:assembly_drill'),
        [
            'ABC',
            ' DB',
            'EFE'
        ],
        {
            A: [
                'create:mechanical_drill',
                'pneumaticcraft:drill_bit_diamond'
            ],
            B: 'pneumaticcraft:pneumatic_cylinder',
            C: 'create:mechanical_arm',
            D: 'immersiveengineering:logic_circuit',
            E: 'pneumaticcraft:ingot_iron_compressed',
            F: 'extendedcrafting:frame'
        }
    )
})