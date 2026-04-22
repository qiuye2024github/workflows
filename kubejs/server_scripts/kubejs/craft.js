ServerEvents.recipes(event => {
    event.shaped(
        Item.of('kubejs:basic_engineering', 4),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'minecraft:iron_ingot',
            B: '#forge:treated_wood',
            C: 'create:sturdy_sheet'
        }
    )
    event.shaped(
        Item.of('kubejs:unused_cell_component_creative'),
        [
            'ABA',
            'CDE',
            'AFA'
        ],
        {
            A: '#c:plates/quantum_alloy',
            B: '#forge:circuits/ultimate',
            C: 'ae2:spatial_cell_component_128',
            D: 'ae2:quartz_vibrant_glass',
            E: 'appflux:core_256m',
            F: 'megacells:cell_component_256m'
        }
    )
    event.shaped(
        Item.of('kubejs:entro_block'),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: 'kubejs:entro_ingot'
        }
    )
    event.shapeless(
        Item.of('kubejs:entro_ingot', 9),
        [
            'kubejs:entro_block'
        ]
    )
    event.shaped(
        Item.of('kubejs:wood_sheard'),
        [
            ' A',
            'A '
        ],
        {
            A: '#minecraft:planks'
        }
    )
    event.shaped(
        Item.of('kubejs:compressed_wood_shears'),
        [
            'AA',
            'AA'
        ],
        {
            A: Item.of('kubejs:wood_sheard', '{Damage:0}')
        }
    )
    event.shaped(
        Item.of('kubejs:super_compressed_wood_shears', '{Damage:0}'),
        [
            'AA',
            'AA'
        ],
        {
            A: Item.of('kubejs:compressed_wood_shears', '{Damage:0}')
        }
    )
    event.shaped(
        Item.of('kubejs:compressed_gravel'),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: 'minecraft:gravel'
        }
    )
    event.shaped(
        Item.of('kubejs:compressed_sand'),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: 'minecraft:sand'
        }
    )
    event.shaped(
        Item.of('kubejs:electronic_circuit'),
        [
            'AAA',
            'BCB',
            'AAA'
        ],
        {
            A: '#forge:wires/copper',
            B: 'minecraft:redstone',
            C: '#forge:plates/iron'
        }
    )
    event.shapeless(
        Item.of('kubejs:package_glass_cable'),
        [
            [
                '#tconstruct:planklike',
                '#minecraft:wooden_slabs',
                'tconstruct:pattern'
            ],
            'ae2:quartz_fiber',
            '2x ae2:fluix_crystal',
            '2x #forge:glass'
        ]
    )
    event.shaped(
        Item.of('kubejs:machine_frame'),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'immersiveengineering:sheetmetal_nickel',
            B: 'pneumaticcraft:plastic',
            C: 'immersiveengineering:sheetmetal_steel',
            D: 'kubejs:basic_engineering'
        }
    )
    event.shaped(
        Item.of('kubejs:machine_frame'),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'immersiveengineering:sheetmetal_aluminum',
            B: 'pneumaticcraft:plastic',
            C: 'immersiveengineering:sheetmetal_steel',
            D: 'kubejs:basic_engineering'
        }
    )
    event.shaped(
        Item.of('kubejs:machine_frame'),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'immersiveengineering:sheetmetal_silver',
            B: 'pneumaticcraft:plastic',
            C: 'immersiveengineering:sheetmetal_steel',
            D: 'kubejs:basic_engineering'
        }
    )
    event.shaped(
        Item.of('kubejs:machine_frame'),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'immersiveengineering:sheetmetal_iron',
            B: 'pneumaticcraft:plastic',
            C: 'immersiveengineering:sheetmetal_steel',
            D: 'kubejs:basic_engineering'
        }
    )
    event.shaped(
        Item.of('kubejs:assembled_pcb'),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: '#forge:nuggets/tin',
            B: 'pneumaticcraft:capacitor',
            C: 'pneumaticcraft:transistor',
            D: 'pneumaticcraft:unassembled_pcb'
        }
    )
    event.shaped(
        Item.of('kubejs:photomultiplier_tube'),
        [
            'ABA',
            'CDC',
            'E E'
        ],
        {
            A: '#forge:plates/silver',
            B: '#forge:gems/sapphire',
            C: '#forge:ingots/signalum',
            D: 'kubejs:phototube',
            E: 'thermal:redstone_servo'
        }
    )
    event.shaped(
        Item.of('kubejs:phototube_blank'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'ae2:quartz_vibrant_glass',
            B: [
                '#forge:storage_blocks/quartz',
                '#forge:storage_blocks/certus_quartz'
            ],
            C: 'minecraft:glowstone_dust',
            D: '#psi:colorizers',
            E: '#forge:circuits/basic'
        }
    )
    event.shaped(
        Item.of('mekanism:raw_osmium'),
        [
            'AA',
            'AA'
        ],
        {
            A: 'kubejs:osmium_pieces'
        }
    )
    event.shaped(
        Item.of('tconstruct:raw_cobalt'),
        [
            'AA',
            'AA'
        ],
        {
            A: 'kubejs:cobalt_pieces'
        }
    )
    event.shaped(
        Item.of('kubejs:void_core'),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'psi:psidust',
            B: 'occultism:spirit_attuned_gem',
            C: 'create:shadow_steel',
            D: 'kubejs:heart_ingot'
        }
    )
    event.shaped(
        Item.of('kubejs:compressed_netherrack'),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: 'minecraft:netherrack'
        }
    )
    event.shaped(
        Item.of('minecraft:netherrack',9),
        [
            'A',
        ],
        {
            A: 'kubejs:compressed_netherrack',
        }
    )
    event.shaped(
        Item.of('kubejs:compressed_end_stone'),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: 'minecraft:end_stone'
        }
    )
    event.shaped(
        Item.of('minecraft:end_stone',9),
        [
            'A',
        ],
        {
            A: 'kubejs:compressed_end_stone'
        }
    )
})