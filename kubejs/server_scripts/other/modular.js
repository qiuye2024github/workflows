ServerEvents.recipes(event => {
    event.remove({ output: 'modularrouters:modular_router' })
    event.shaped(
        Item.of('modularrouters:modular_router'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'modularrouters:augment_core',
            C: 'minecraft:iron_bars',
            D: 'rftoolsbase:machine_frame',
            E: 'mekanism:teleportation_core'
        }
    )
    event.remove({ output: 'modularrouters:blank_module' })
    event.shaped(
        Item.of('modularrouters:blank_module'),
        [
            ' A ',
            'BCB',
            'DBD'
        ],
        {
            A: 'minecraft:redstone',
            B: 'minecraft:paper',
            C: 'kubejs:crystal_memory',
            D: 'minecraft:gold_nugget'
        }
    )
    event.shaped(
        Item.of('modularrouters:blank_module', 3),
        [
            ' A ',
            'BBB',
            'DBD'
        ],
        {
            A: 'minecraft:redstone',
            B: 'mekanism:hdpe_sheet',
            D: 'minecraft:gold_nugget'
        }
    )
    event.remove({ output: 'modularrouters:blank_upgrade' })
    event.shaped(
        Item.of('modularrouters:blank_upgrade'),
        [
            'ABA',
            'BCB',
            ' BA'
        ],
        {
            A: 'minecraft:gold_nugget',
            B: 'minecraft:paper',
            C: 'kubejs:crystal_memory'
        }
    )
    event.shaped(
        Item.of('modularrouters:blank_upgrade', 3),
        [
            'ABA',
            'BBB',
            ' BA'
        ],
        {
            A: 'minecraft:gold_nugget',
            B: 'mekanism:hdpe_sheet'
        }
    )
    event.remove({ output: 'modularrouters:augment_core' })
    event.shapeless(
        Item.of('modularrouters:augment_core', 2),
        [
            'modularrouters:blank_module',
            'modularrouters:blank_upgrade'
        ]
    )
})