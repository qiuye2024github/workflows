ServerEvents.tags('item', event => {

    event.add('forge:foods/meat/raw', 'minecraft:rotten_flesh')
    event.add('forge:storage_blocks/charcoalncoal',['mekanism:block_charcoal','minecraft:coal_block','thermal:charcoal_block'])
    event.add('create:casing',['kubejs:infinity_casing'])
    event.add('kubejs:time_token',['kubejs:ultimate_time_token', 'kubejs:advance_time_token', 'kubejs:time_token', 'kubejs:creative_time_token'])
    event.remove('pneumaticcraft:upgrade_components', 'minecraft:lapis_lazuli')
    event.remove('forge:plastic', 'industrialforegoing:plastic')
    event.add('forge:plastic', 'pneumaticcraft:plastic')

})

ServerEvents.tags('block', event => {

    event.add('minecraft:mineable/pickaxe',['clickmachine:auto_clicker'])
    
})