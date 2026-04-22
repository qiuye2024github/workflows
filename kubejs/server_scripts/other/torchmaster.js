ServerEvents.recipes(event => {
    event.remove({ output: 'torchmaster:megatorch' })
    event.shaped(
        Item.of('torchmaster:megatorch'),
        [
            'ABA',
            'CDC',
            'EDE'
        ],
        {
            A: '#forge:storage_blocks/gold',
            B: '#forge:storage_blocks/coal',
            C: '#forge:storage_blocks/diamond',
            D: '#minecraft:logs',
            E: '#forge:storage_blocks/rose_gold'
        }
    )
    event.remove({ output: 'torchmaster:feral_flare_lantern' })
    event.shaped(
        Item.of('torchmaster:feral_flare_lantern'),
        [
            ' A ',
            'BCB',
            ' A '
        ],
        {
            A: '#forge:ingots/rose_gold',
            B: 'botania:mana_glass',
            C: 'immersiveengineering:electric_lantern'
        }
    )
})