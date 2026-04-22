ServerEvents.recipes(event => {
    event.remove({ output: 'tiab:time_in_a_bottle' })
    event.shaped(
        Item.of('tiab:time_in_a_bottle'),
        [
            'AAA',
            'BCB',
            'DED'
        ],
        {
            A: 'minecraft:gold_ingot',
            B: 'minecraft:diamond',
            C: 'create:cuckoo_clock',
            D: 'minecraft:lapis_lazuli',
            E: 'minecraft:glass_bottle'
        }
    )
})