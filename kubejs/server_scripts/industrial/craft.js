ServerEvents.recipes(event => {
    event.remove({ output: 'industrialforegoing:machine_frame_pity' })
    event.shaped(
        Item.of('industrialforegoing:machine_frame_pity'),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: '#minecraft:logs',
            B: '#forge:cobblestone',
            C: '#forge:ingots/lumium',
            D: 'create:andesite_casing'
        }
    )
    event.remove({ output: 'industrialforegoing:fluid_extractor' })
    event.shaped(
        Item.of('industrialforegoing:fluid_extractor'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'create:mechanical_drill',
            C: 'minecraft:redstone',
            D: 'industrialforegoing:machine_frame_pity',
            E: 'minecraft:piston'
        }
    )
    event.remove({ output: 'industrialforegoing:dissolution_chamber' })
    event.shaped(
        Item.of('industrialforegoing:dissolution_chamber'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            A: 'industrialforegoing:plastic',
            B: 'minecraft:bucket',
            C: 'immersiveengineering:logic_circuit',
            D: 'industrialforegoing:machine_frame_pity',
            E: 'minecraft:iron_ingot',
            F: '#forge:gears/diamond'
        }
    )
    event.remove({ output: 'industrialforegoing:mob_slaughter_factory' })
    event.shaped(
        Item.of('industrialforegoing:mob_slaughter_factory'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            A: 'industrialforegoing:plastic',
            B: 'create:mechanical_saw',
            C: Item.of('minecraft:iron_sword', '{Damage:0}'),
            D: 'industrialforegoing:machine_frame_simple',
            E: 'minecraft:iron_ingot',
            F: '#forge:gears/electrum'
        }
    )
    event.remove({ output: 'industrialforegoing:hydroponic_bed' })
    event.shaped(
        Item.of('industrialforegoing:hydroponic_bed'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            A: 'industrialforegoing:plastic',
            B: 'mysticalagriculture:imperium_farmland',
            C: Item.of('minecraft:iron_hoe', '{Damage:0}'),
            D: 'industrialforegoing:machine_frame_advanced',
            E: 'thermal:emerald_gear',
            F: [
                'thermal:compost',
                'industrialforegoing:fertilizer',
                'immersiveengineering:fertilizer'
            ]
        }
    )
})