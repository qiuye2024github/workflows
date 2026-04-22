ServerEvents.recipes(event => {
    event.remove({ output: 'create:cuckoo_clock' })
    event.shaped(
        Item.of('create:cuckoo_clock'),
        [
            'A',
            'B',
            'C'
        ],
        {
            A: '#minecraft:planks',
            B: 'create:andesite_casing',
            C: 'supplementaries:clock_block'
        }
    )
    event.remove({ output: 'create:deployer' })
    event.shaped(
        Item.of('create:deployer'),
        [
            ' A ',
            'DBD',
            ' C '
        ],
        {
            A: 'create:piston_extension_pole',
            B: 'create:andesite_casing',
            C: 'create:brass_hand',
            D: 'create:shaft'
        }
    )
    event.remove({ output: 'create:encased_chain_drive' })
    event.shapeless(
        Item.of('create:encased_chain_drive', 2),
        [
            'create:andesite_casing',
            '3x #forge:nuggets/iron'
        ]
    )
    event.shapeless(
        Item.of('create:encased_chain_drive', 2),
        [
            'create:andesite_casing',
            '3x #forge:nuggets/zinc'
        ]
    )
    event.shaped(
        Item.of('create:sail_frame'),
        [
            'ABA',
            'B B',
            'ABA'
        ],
        {
            A: '#forge:rods/wooden',
            B: '#minecraft:wooden_slabs'
        }
    )
    event.remove({ output: 'create:white_sail' })
    event.shapeless(
        Item.of('create:white_sail', 2),
        [
            '2x create:sail_frame',
            '#minecraft:wool'
        ]
    )
    event.shapeless(
        Item.of('create:white_sail', 3),
        [
            '3x create:sail_frame',
            'immersiveengineering:hemp_fabric'
        ]
    )
    event.remove({ output: 'create:mechanical_press' })
    event.shaped(
        Item.of('create:mechanical_press'),
        [
            ' A ',
            'BCB',
            ' D '
        ],
        {
            A: 'create:piston_extension_pole',
            B: 'create:shaft',
            C: 'create:andesite_casing',
            D: '#forge:storage_blocks/iron'
        }
    )
    event.remove({ output: 'create:mechanical_mixer' })
    event.shaped(
        Item.of('create:mechanical_mixer'),
        [
            ' A ',
            'BCB',
            ' D '
        ],
        {
            A: 'create:piston_extension_pole',
            B: 'create:cogwheel',
            C: 'create:andesite_casing',
            D: 'create:whisk'
        }
    )
    event.replaceInput(
        {},
        'create:electron_tube',
        [
            'create:electron_tube',
            'immersiveengineering:component_electronic_adv'
        ]
    )
    event.remove({ output: 'create:empty_blaze_burner' })
    event.shaped(
        Item.of('create:empty_blaze_burner'),
        [
            'A A',
            'ABA',
            'CDC'
        ],
        {
            A: 'minecraft:iron_bars',
            B: 'minecraft:netherrack',
            C: 'immersiveengineering:sheetmetal_lead',
            D: [
                'immersiveengineering:sheetmetal_nickel',
                'immersiveengineering:sheetmetal_silver'
            ]
        }
    )
    event.shaped(
        Item.of('create_connected:control_chip', 2),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: '#forge:wires/electrum',
            B: 'ae2:logic_processor',
            C: 'minecraft:redstone',
            D: 'kubejs:electronic_circuit'
        }
    )
    event.shaped(
        Item.of('create_connected:control_chip', 2),
        [
            'ACA',
            'BDB',
            'ACA'
        ],
        {
            A: '#forge:wires/electrum',
            B: 'ae2:logic_processor',
            C: 'minecraft:redstone',
            D: 'kubejs:electronic_circuit'
        }
    )
    event.remove({ output: 'create:mechanical_crafter' })
    event.shaped(
        Item.of('create:mechanical_crafter', 3),
        [
            ' A ',
            'BCB',
            'DED'
        ],
        {
            A: [
                'create:electron_tube',
                'immersiveengineering:component_electronic_adv'
            ],
            B: 'create:cogwheel',
            C: 'create:brass_casing',
            D: 'create_connected:control_chip',
            E: [
                'minecraft:crafting_table',
                'quark:crafter',
                'tconstruct:crafting_station'
            ]
        }
    )
    event.remove({ id: 'botania:quartz_red' })
    event.shapeless(
        Item.of('botania:quartz_red'),
        [
            'minecraft:quartz',
            '8x minecraft:redstone'
        ]
    )
    event.remove({ output: 'createdieselgenerators:pumpjack_bearing' })
    event.shaped(
        Item.of('createdieselgenerators:pumpjack_bearing'),
        [
            'AAA',
            'BCB',
            'BDB'
        ],
        {
            A: 'create:andesite_alloy',
            B: '#forge:ingots/zinc',
            C: 'create:mechanical_bearing',
            D: 'immersiveengineering:rs_engineering'
        }
    )
    event.remove({ output: 'createdieselgenerators:pumpjack_crank' })
    event.shaped(
        Item.of('createdieselgenerators:pumpjack_crank'),
        [
            'A A',
            'BCB',
            'DED'
        ],
        {
            A: 'create:shaft',
            B: 'create:andesite_alloy',
            C: 'create:precision_mechanism',
            D: '#forge:ingots/zinc',
            E: 'create:gearbox'
        }
    )
})