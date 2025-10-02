ServerEvents.recipes(event => {

    event.smelting('draconicevolution:awakened_draconium_ingot', 'kubejs:end_awakened_draconium_ore')
    event.smelting('thermal:ruby','thermal:ruby_ore')
    event.smelting('thermal:sapphire','thermal:sapphire_ore')
    event.smelting('createaddition:cake_base_baked','createaddition:cake_base')

    function StoneCutting2(I1,I2) {event.stonecutting(I1,I2);event.stonecutting(I2,I1)}
    StoneCutting2('thermal:tin_block', 'mekanism:block_tin')
    StoneCutting2('thermal:raw_tin_block', 'mekanism:block_raw_tin')
    StoneCutting2('thermal:raw_lead_block', 'mekanism:block_raw_lead')
    StoneCutting2('thermal:lead_block', 'mekanism:block_lead')
    StoneCutting2('thermal:steel_block', 'mekanism:block_steel')
    StoneCutting2('thermal:bronze_block', 'mekanism:block_bronze')
    StoneCutting2('thermal:electrum_block', 'createaddition:electrum_block')

    event.smithing('functionalstorage:netherite_upgrade', 'minecraft:obsidian', 'functionalstorage:diamond_upgrade', 'minecraft:netherite_ingot')

})