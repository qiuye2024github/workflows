ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:mud_bricks' })
    event.shaped(
        Item.of('minecraft:mud_bricks'),
        [
            'AA',
            'AA'
        ],
        {
            A: 'kubejs:mud_brick'
        }
    )
    event.remove({ output: 'minecraft:clock' })
    event.shaped(
        Item.of('minecraft:clock'),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: '#forge:plates/gold',
            B: 'minecraft:redstone'
        }
    )
    event.remove({ output: 'minecraft:compass' })
    event.shaped(
        Item.of('minecraft:compass'),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: '#forge:plates/iron',
            B: 'minecraft:redstone'
        }
    )
    event.shaped(
        Item.of('minecraft:gravel',9),
        [
            'A'
        ],
        {
            A: 'kubejs:compressed_gravel'
        }
    )
    event.shaped(
        Item.of('minecraft:sand',9),
        [
            'A'
        ],
        {
            A: 'kubejs:compressed_sand'
        }
    )
    event.shapeless(
        Item.of('minecraft:writable_book'),
        [
            'minecraft:book',
            'occultism:purified_ink',
            'minecraft:feather'
        ]
    )
    event.shaped(
        Item.of('minecraft:bedrock'),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'minecraft:deepslate',
            B: 'minecraft:netherite_ingot'
        }
    )
    event.shaped(
        Item.of('minecraft:clay_ball',4),
        [
            'A'
        ],
        {
            A: 'minecraft:clay'
        }
    )
})