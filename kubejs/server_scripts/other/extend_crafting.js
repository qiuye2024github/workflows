ServerEvents.recipes(event => {
    event.remove({ id: 'extendedcrafting:black_iron_ingot' })
    event.remove({ id: 'extendedcrafting:luminessence' })
    event.remove({ id: 'extendedcrafting:crystaltine_ingot' })
    event.remove({ id: 'extendedcrafting:frame' })
    event.remove({ output: 'extendedcrafting:pedestal' })
    event.shaped(
        Item.of('extendedcrafting:pedestal'),
        [
            'ABA',
            ' C ',
            'ACA'
        ],
        {
            A: 'extendedcrafting:black_iron_slate',
            B: 'create:depot',
            C: 'extendedcrafting:black_iron_ingot'
        }
    )
    event.shaped(
        Item.of('extendedcrafting:pedestal'),
        [
            'A'
        ],
        {
            A: 'packagedexcrafting:marked_pedestal'
        }
    )
    event.shaped(
        Item.of('extendedcrafting:crafting_core'),
        [
            'A'
        ],
        {
            A: 'packagedexcrafting:combination_crafter'
        }
    )
    event.remove({ id: 'extendedcrafting:redstone_ingot' })
    event.remove({ output: 'extendedcrafting:ender_crafter' })
    event.shaped(
        Item.of('extendedcrafting:ender_crafter'),
        [
            'AAA',
            'BCB',
            'BBB'
        ],
        {
            A: 'minecraft:ender_eye',
            B: 'extendedcrafting:ender_ingot',
            C: 'extendedcrafting:black_iron_ingot'
        }
    )
    event.remove({ output: 'extendedcrafting:flux_crafter' })
    event.shaped(
        Item.of('extendedcrafting:flux_crafter'),
        [
            'AAA',
            'BCB',
            'BBB'
        ],
        {
            A: '#forge:ingots/electrum',
            B: 'extendedcrafting:redstone_ingot',
            C: 'extendedcrafting:black_iron_ingot'
        }
    )
})//