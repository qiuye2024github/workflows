ServerEvents.recipes(event => {
    event.remove({ id: 'mob_grinding_utils:recipe_mob_swab' })
    event.shaped(
        Item.of('mob_grinding_utils:mob_swab'),
        [
            '  A',
            ' B ',
            'A  '
        ],
        {
            A: 'minecraft:white_wool',
            B: '#forge:rods/plastic'
        }
    )
})