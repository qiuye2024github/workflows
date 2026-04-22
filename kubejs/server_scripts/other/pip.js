ServerEvents.recipes(event => {
    event.remove({ output: 'pipez:universal_pipe' })
    event.shaped(
        Item.of('pipez:universal_pipe',8),
        [
            'ABC',
            'DED',
            'CBA'
        ],
        {
            A: 'pipez:item_pipe',
            B: 'pipez:fluid_pipe',
            C: 'pipez:energy_pipe',
            D: 'pipez:gas_pipe',
            E: [
                'minecraft:redstone_block',
                'enderio:conduit_binder'
            ]
        }
    )
    event.remove({ output: 'pipez:item_pipe' })
    event.shaped(
        Item.of('pipez:item_pipe',8),
        [
            'AAA',
            'BCB',
            'AAA'
        ],
        {
            A: '#forge:ingots/iron',
            B: 'minecraft:dispenser',
            C: 'minecraft:redstone'
        }
    )
    event.remove({ output: 'pipez:fluid_pipe' })
    event.shaped(
        Item.of('pipez:fluid_pipe',8),
        [
            'AAA',
            'BCB',
            'AAA'
        ],
        {
            A: '#forge:ingots/iron',
            B: [
                'immersiveengineering:fluid_pipe',
                'create:fluid_pipe',
                'minecraft:bucket'
            ],
            C: 'minecraft:redstone'
        }
    )
    event.remove({ output: 'pipez:energy_pipe' })
    event.shaped(
        Item.of('pipez:energy_pipe',8),
        [
            'AAA',
            'BCB',
            'AAA'
        ],
        {
            A: '#forge:ingots/iron',
            B: 'minecraft:redstone_block',
            C: 'minecraft:redstone'
        }
    )
    event.remove({ output: 'pipez:energy_pipe' })
    event.shaped(
        Item.of('pipez:energy_pipe',8),
        [
            'AAA',
            'BCB',
            'AAA'
        ],
        {
            A: '#forge:ingots/iron',
            B: 'minecraft:redstone_block',
            C: 'minecraft:redstone'
        }
    )
    event.remove({ output: 'pipez:gas_pipe' })
    event.shaped(
        Item.of('pipez:gas_pipe',8),
        [
            'AAA',
            'BCB',
            'AAA'
        ],
        {
            A: '#forge:ingots/iron',
            B: [
                '#forge:ingots/osmium',
                'mekanism:alloy_infused'
            ],
            C: 'minecraft:redstone'
        }
    )
})