ServerEvents.recipes(event => {
    event.remove({ output: 'entangled:block' })
    event.shaped(
        Item.of('entangled:block'),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'minecraft:ender_pearl',
            B: 'naturesaura:infused_iron',
            C: 'minecraft:obsidian',
            D: 'mekanism:teleportation_core'
        }
    )
    event.shaped(
        Item.of('entangled:block'),
        [
            'A',
        ],
        {
            A: 'entangled:block'
        }
    )
})