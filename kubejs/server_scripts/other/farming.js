ServerEvents.recipes(event => {
    event.remove({ output: 'farmingforblockheads:market' })
    event.shaped(
        Item.of('farmingforblockheads:market'),
        [
            'ABA',
            'CDC',
            'CEC'
        ],
        {
            A: '#minecraft:planks',
            B: 'minecraft:iron_ingot',
            C: '#minecraft:logs',
            D: 'minecraft:red_wool',
            E: 'create:shadow_steel_casing'
        }
    )
})