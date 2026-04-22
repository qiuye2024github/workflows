ServerEvents.recipes(event => {
    event.remove({ output: 'compactmachines:wall' })
    event.shaped(
        Item.of('compactmachines:wall', 4),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: '#forge:sheetmetals/lead',
            B: '#forge:sheetmetals/steel',
            C: 'mekanism:teleporter_frame'
        }
    )
    event.remove({ output: 'compactmachines:machine_tiny' })
    event.shaped(
        Item.of('compactmachines:machine_tiny'),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'compactmachines:wall',
            B: 'minecraft:copper_block',
            C: 'minecraft:chest',
            D: 'minecraft:redstone_block'
        }
    )
    event.remove({ output: 'compactmachines:machine_small' })
    event.shaped(
        Item.of('compactmachines:machine_small'),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'compactmachines:wall',
            B: 'minecraft:iron_block',
            C: 'compactmachines:machine_tiny',
            D: 'minecraft:redstone_block'
        }
    )
    event.remove({ output: 'compactmachines:machine_normal' })
    event.shaped(
        Item.of('compactmachines:machine_normal'),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'compactmachines:wall',
            B: 'minecraft:gold_block',
            C: 'compactmachines:machine_small',
            D: 'minecraft:redstone_block'
        }
    )
    event.remove({ output: 'compactmachines:machine_large' })
    event.shaped(
        Item.of('compactmachines:machine_large'),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'compactmachines:wall',
            B: 'minecraft:crying_obsidian',
            C: 'compactmachines:machine_normal',
            D: 'minecraft:redstone_block'
        }
    )
    event.remove({ output: 'compactmachines:machine_giant' })
    event.shaped(
        Item.of('compactmachines:machine_giant'),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'compactmachines:wall',
            B: 'minecraft:diamond_block',
            C: 'compactmachines:machine_large',
            D: 'minecraft:redstone_block'
        }
    )
    event.remove({ output: 'compactmachines:machine_maximum' })
    event.shaped(
        Item.of('compactmachines:machine_maximum'),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'compactmachines:wall',
            B: 'minecraft:netherite_block',
            C: 'compactmachines:machine_giant',
            D: 'minecraft:redstone_block'
        }
    )
})