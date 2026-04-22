ServerEvents.recipes(event => {
    event.shaped(
        Item.of('ae2:silicon', 4),
        [
            'AAA',
        ],
        {
            A: 'mysticalagriculture:silicon_essence'
        }
    )
    event.remove({ output: 'mysticalagriculture:prudentium_farmland' })
    event.shapeless(
        Item.of('mysticalagriculture:prudentium_farmland'),
        [
            'mysticalagriculture:inferium_farmland',
            'mysticalagriculture:prudentium_essence'
        ]
    )//2
    event.remove({ output: 'mysticalagriculture:tertium_farmland' })
    event.shapeless(
        Item.of('mysticalagriculture:tertium_farmland'),
        [
            'mysticalagriculture:prudentium_farmland',
            'mysticalagriculture:tertium_essence'
        ]
    )//3
    event.remove({ output: 'mysticalagriculture:imperium_farmland' })
    event.shapeless(
        Item.of('mysticalagriculture:imperium_farmland'),
        [
            'mysticalagriculture:tertium_farmland',
            'mysticalagriculture:imperium_essence'
        ]
    )//4
    event.remove({ output: 'mysticalagriculture:supremium_farmland' })
    event.shapeless(
        Item.of('mysticalagriculture:supremium_farmland'),
        [
            'mysticalagriculture:imperium_farmland',
            'mysticalagriculture:supremium_essence'
        ]
    )//5
    event.remove({ output: 'mysticalagradditions:insanium_farmland' })
    event.shapeless(
        Item.of('mysticalagradditions:insanium_farmland'),
        [
            'mysticalagriculture:supremium_farmland',
            'mysticalagradditions:insanium_essence'
        ]
    )//6
    event.remove({ output: 'mysticalagriculture:prosperity_seed_base' })
    event.shaped(
        Item.of('mysticalagriculture:prosperity_seed_base'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'mysticalagriculture:prosperity_ingot',
            B: 'mysticalagriculture:prosperity_gemstone',
            C: '#forge:seeds'
        }
    )
    event.remove({ output: 'mysticalagriculture:prosperity_gemstone' })
    event.shaped(
        Item.of('mysticalagriculture:prosperity_gemstone'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'mysticalagriculture:prosperity_shard',
            B: 'mysticalagriculture:imperium_ingot',
            C: 'botanicalextramachinery:crystal_dragonstone'
        }
    )
    event.remove({ output: 'mysticalagriculture:prosperity_ingot' })
    event.shaped(
        Item.of('mysticalagriculture:prosperity_ingot'),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'mysticalagriculture:prosperity_shard',
            B: 'enderio:soularium_ingot'
        }
    )
    event.remove({ output: 'mysticalagriculture:infusion_altar' })
    event.shaped(
        Item.of('mysticalagriculture:infusion_altar'),
        [
            ' A ',
            'BCB',
            'DED'
        ],
        {
            A: 'minecraft:red_wool',
            B: 'enderio:energetic_alloy_ingot',
            C: 'botania:lens_magnet',
            D: 'minecraft:smooth_stone',
            E: 'create:shadow_steel_casing'
        }
    )
    event.remove({ output: 'mysticalagriculture:infusion_pedestal' })
    event.shaped(
        Item.of('mysticalagriculture:infusion_pedestal'),
        [
            'ABA',
            'CDC',
            ' E '
        ],
        {
            A: 'minecraft:red_wool',
            B: 'create:depot',
            C: 'enderio:energetic_alloy_ingot',
            D: 'create:shadow_steel_casing',
            E: 'minecraft:smooth_stone'
        }
    )
})