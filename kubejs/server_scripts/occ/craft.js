ServerEvents.recipes(event => {
    event.shaped(
        Item.of('occultism:spirit_attuned_gem',4),
        [
            'A',
        ],
        {
            A: 'occultism:spirit_attuned_crystal'
        }
    )
    event.remove({ output: 'occultism:golden_sacrificial_bowl' })
    event.shaped(
        Item.of('occultism:golden_sacrificial_bowl'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'kubejs:mana_ingot',
            B: 'minecraft:gold_ingot',
            C: 'occultism:sacrificial_bowl'
        }
    )
})