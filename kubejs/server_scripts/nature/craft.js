ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('naturesaura:gold_leaf', 2),
        [
            '#minecraft:leaves',
            'naturesaura:gold_fiber'
        ]
    )
    event.remove({ output: 'naturesaura:wood_stand' })
    event.shaped(
        Item.of('naturesaura:wood_stand'),
        [
            ' A ',
            'BCB',
            'BCB'
        ],
        {
            A: 'create:depot',
            B: '#forge:stripped_logs',
            C: 'naturesaura:gold_leaf'
        }
    )
    event.remove({ output: 'naturesaura:offering_table' })
    event.shaped(
        Item.of('naturesaura:offering_table'),
        [
            'ABA',
            'CDE',
            'FFF'
        ],
        {
            A: 'naturesaura:infused_stone',
            B: 'botania:gaia_ingot',
            C: 'naturesaura:token_sorrow',
            D: 'naturesaura:wood_stand',
            E: 'naturesaura:token_fear',
            F: '#forge:stripped_logs'
        }
    )
    event.remove({ output: 'naturesaura:spring' })
    event.shaped(
        Item.of('naturesaura:spring'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'minecraft:stone_bricks',
            B: 'naturesaura:token_euphoria',
            C: 'naturesaura:depth_ingot',
            D: 'minecraft:water_bucket',
            E: Item.of('occultism:dimensional_matrix')
        }
    )
})