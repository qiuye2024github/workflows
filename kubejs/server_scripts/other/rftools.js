ServerEvents.recipes(event => {
    event.remove({ id: 'rftoolsbase:infused_diamond' })
    event.remove({ id: 'rftoolsbase:infused_enderpearl' })
    event.remove({ output: 'rftoolsbase:machine_base' })
    event.shaped(
        Item.of('rftoolsbase:machine_base'),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: '#forge:stone',
            B: '#forge:plates/gold',
            C: 'botanicalextramachinery:crystal_ingot',
            D: [
                'mekanism:steel_casing',
                'industrialforegoing:machine_frame_pity'
            ]
        }
    )
     event.remove({ output: 'rftoolsbase:machine_frame' })
    event.shaped(
        Item.of('rftoolsbase:machine_frame'),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'minecraft:iron_ingot',
            B: '#forge:dyes/blue',
            C: 'minecraft:gold_nugget',
            D: [
                'rftoolsbase:machine_base',
                'industrialforegoing:machine_frame_supreme'
            ]
        }
    )
    event.remove({ output: 'rftoolsutility:syringe' })
})