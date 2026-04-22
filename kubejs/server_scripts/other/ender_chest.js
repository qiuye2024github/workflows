ServerEvents.recipes(event => {
    event.remove({ output: 'enderstorage:ender_chest' })
    event.shaped(
        Item.of('enderstorage:ender_chest'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'minecraft:blaze_rod',
            B: '#forge:wool',
            C: 'minecraft:blaze_rod',
            D: 'minecraft:chest',
            E: 'mekanism:teleportation_core'
        }
    )
    event.shaped(
        Item.of('enderstorage:ender_chest'),
        [
            'A',
        ],
        {
            A: 'enderstorage:ender_chest'
        }
    )
    event.remove({ output: 'enderstorage:ender_tank' })
    event.shaped(
        Item.of('enderstorage:ender_tank'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'minecraft:obsidian',
            B: '#forge:wool',
            C: 'minecraft:blaze_rod',
            D: 'create:fluid_tank',
            E: 'mekanism:teleportation_core'
        }
    )
    event.shaped(
        Item.of('enderstorage:ender_tank'),
        [
            'A',
        ],
        {
            A: 'enderstorage:ender_tank'
        }
    )
})