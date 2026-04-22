ServerEvents.recipes(event => {
    event.remove({ id: 'thermal:rf_coil' })
    event.shaped(
        Item.of('thermal:rf_coil'),
        [
            ' AB',
            'ACA',
            'BA '
        ],
        {
            A: 'immersiveengineering:wirecoil_redstone',
            B: '#forge:ingots/electrum',
            C: 'immersiveengineering:rs_engineering'
        }
    )
    event.remove({ id: 'thermal:redstone_servo' })
    event.shaped(
        Item.of('thermal:redstone_servo'),
        [
            'ABA',
            ' C ',
            'ABA'
        ],
        {
            A: 'minecraft:redstone',
            B: '#forge:ingots/invar',
            C: 'thermal:rf_coil'
        }
    )
    event.remove({ output: 'thermal:machine_frame' })
    event.shaped(
        Item.of('thermal:machine_frame'),
        [
            'ABA',
            'CDC',
            'EBE'
        ],
        {
            A: 'immersiveengineering:sheetmetal_iron',
            B: '#forge:glass',
            C: 'advgenerators:iron_frame',
            D: '#forge:gears/tin',
            E: 'immersiveengineering:sheetmetal_aluminum'
        }
    )
    event.remove({ output: 'thermal:machine_smelter' })
    event.shaped(
        Item.of('thermal:machine_smelter'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            A: 'botania:rune_fire',
            B: 'immersiveengineering:furnace_heater',
            C: 'minecraft:blast_furnace',
            D: 'thermal:machine_frame',
            E: '#forge:gears/invar',
            F: 'thermal:rf_coil'
        }
    )
    event.remove({ output: 'thermal:beekeeper_fabric' })
    event.shaped(
        Item.of('thermal:beekeeper_fabric',2),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'minecraft:string',
            B: [
                'minecraft:honeycomb',
                'minecraft:white_wool'
            ]
        }
    )
    event.remove({ output: 'thermal:machine_chiller' })
    event.shaped(
        Item.of('thermal:machine_chiller'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            A: 'botania:rune_winter',
            B: 'ars_elemental:water_focus',
            C: [
                'cookingforblockheads:ice_unit',
                'minecraft:packed_ice'
            ],
            D: 'thermal:machine_frame',
            E: '#forge:gears/invar',
            F: 'thermal:rf_coil'
        }
    )
    event.remove({ output: 'thermal:machine_press' })
    event.shaped(
        Item.of('thermal:machine_press'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            A: 'botania:rune_earth',
            B: 'create:mechanical_press',
            C: '#forge:ingots/bronze',
            D: 'thermal:machine_frame',
            E: '#forge:gears/nickel',
            F: 'thermal:rf_coil'
        }
    )
    event.remove({ output: 'thermal:machine_pulverizer' })
    event.shaped(
        Item.of('thermal:machine_pulverizer'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            A: 'botania:rune_mana',
            B: [
                'create:millstone',
                'create:crushing_wheel'
            ],
            C: 'minecraft:flint',
            D: 'thermal:machine_frame',
            E: '#forge:gears/lead',
            F: 'thermal:rf_coil'
        }
    )
    event.remove({ output: 'thermal:energy_cell_frame' })
    event.shaped(
        Item.of('thermal:energy_cell_frame'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: '#forge:ingots/lead',
            B: '#forge:ingots/electrum',
            C: 'thermal:machine_frame'
        }
    )
    event.remove({ output: 'thermal:fluid_cell_frame' })
    event.shaped(
        Item.of('thermal:fluid_cell_frame'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: '#forge:ingots/copper',
            B: '#forge:ingots/tin',
            C: 'thermal:machine_frame'
        }
    )
    event.remove({ output: 'thermal:machine_refinery' })
    event.shaped(
        Item.of('thermal:machine_refinery'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            A: 'botania:rune_water',
            B: 'immersiveengineering:furnace_heater',
            C: [
                'create:fluid_pipe',
                'immersiveengineering:fluid_pipe'
            ],
            D: 'thermal:machine_frame',
            E: '#forge:gears/rose_gold',
            F: 'thermal:rf_coil'
        }
    )
    event.remove({ output: 'thermal:machine_crucible' })
    event.shaped(
        Item.of('thermal:machine_crucible'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            A: 'botania:rune_summer',
            B: 'immersiveengineering:furnace_heater',
            C: 'minecraft:nether_bricks',
            D: 'thermal:machine_frame',
            E: '#forge:gears/signalum',
            F: 'thermal:rf_coil'
        }
    )
    event.remove({ output: 'thermal:machine_centrifuge' })
    event.shaped(
        Item.of('thermal:machine_centrifuge'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            A: 'botania:rune_air',
            B: 'create:mechanical_mixer',
            C: '#forge:ingots/tin',
            D: 'thermal:machine_frame',
            E: '#forge:gears/bronze',
            F: 'thermal:rf_coil'
        }
    )
    event.remove({ output: 'thermal:machine_insolator' })
    event.shaped(
        Item.of('thermal:machine_insolator'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            A: 'botania:rune_spring',
            B: 'minecraft:dirt',
            C: 'thermal:phytogro',
            D: 'thermal:machine_frame',
            E: '#forge:gears/lumium',
            F: 'thermal:rf_coil'
        }
    )
})