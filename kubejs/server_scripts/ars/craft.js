ServerEvents.recipes(event => {
    event.remove({ output: 'ars_nouveau:imbuement_chamber' })
    event.shaped(
        Item.of('ars_nouveau:imbuement_chamber'),
        [
            'ABA',
            'B B',
            'AAA'
        ],
        {
            A: 'ars_nouveau:archwood_planks',
            B: '#forge:ingots/gold'
        }
    )
    event.remove({ id: 'ars_nouveau:arcane_pedestal' })
    event.shaped(
        Item.of('ars_nouveau:arcane_pedestal'),
        [
            'ABA',
            'CAC',
            'CAC'
        ],
        {
            A: 'ars_nouveau:sourcestone',
            B: 'create:depot',
            C: 'ars_nouveau:sconce'
        }
    )
    event.shapeless(
        Item.of('ars_nouveau:sconce'),
        [
            'ars_nouveau:source_gem',
            '2x #forge:nuggets/electrum'
        ]
    )
    event.remove({ id: 'ars_nouveau:spell_prism' })
    event.shaped(
        Item.of('ars_nouveau:spell_prism'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'ars_nouveau:archwood_planks',
            B: '#forge:storage_blocks/quartz',
            C: 'botania:rune_mana'
        }
    )
    event.remove({ output: 'ars_nouveau:enchanting_apparatus' })
    event.shaped(
        Item.of('ars_nouveau:enchanting_apparatus'),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'ars_nouveau:sconce',
            B: 'ars_nouveau:sourcestone',
            C: 'industrialforegoing:pink_slime_ingot',
            D: 'ars_elemental:advanced_prism'
        }
    )
    event.remove({ output: 'ars_nouveau:arcane_core' })
    event.shaped(
        Item.of('ars_nouveau:arcane_core'),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'minecraft:gold_ingot',
            B: 'ars_nouveau:sourcestone',
            C: 'industrialforegoing:pink_slime_ingot',
            D: 'ars_nouveau:spell_prism'
        }
    )
    event.remove({ output: 'ars_nouveau:agronomic_sourcelink' })
    event.shaped(
        Item.of('ars_nouveau:agronomic_sourcelink'),
        [
            'ABA',
            'CDC',
            ' E '
        ],
        {
            A: 'ars_nouveau:sconce',
            B: 'minecraft:hay_block',
            C: 'minecraft:gold_ingot',
            D: 'ars_nouveau:source_gem_block',
            E: 'ars_nouveau:spell_prism'
        }
    )
    event.remove({ output: 'ars_nouveau:volcanic_sourcelink' })
    event.shaped(
        Item.of('ars_nouveau:volcanic_sourcelink'),
        [
            ' B ',
            'CDC',
            'AEA'
        ],
        {
            A: 'ars_nouveau:sconce',
            B: 'minecraft:coal_block',
            C: 'minecraft:gold_ingot',
            D: 'ars_nouveau:source_gem_block',
            E: 'ars_nouveau:spell_prism'
        }
    )
    event.remove({ output: 'ars_nouveau:alchemical_sourcelink' })
    event.shaped(
        Item.of('ars_nouveau:alchemical_sourcelink'),
        [
            ' B ',
            'ADA',
            'CEC'
        ],
        {
            A: 'ars_nouveau:sconce',
            B: 'minecraft:brewing_stand',
            C: 'minecraft:gold_ingot',
            D: 'ars_nouveau:source_gem_block',
            E: 'ars_nouveau:spell_prism'
        }
    )
    event.remove({ output: 'ars_nouveau:vitalic_sourcelink' })
    event.shaped(
        Item.of('ars_nouveau:vitalic_sourcelink'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'ars_nouveau:sconce',
            B: 'minecraft:glistering_melon_slice',
            C: 'minecraft:gold_ingot',
            D: 'ars_nouveau:source_gem_block',
            E: 'ars_nouveau:spell_prism'
        }
    )
    event.remove({ output: 'ars_nouveau:mycelial_sourcelink' })
    event.shaped(
        Item.of('ars_nouveau:mycelial_sourcelink'),
        [
            'CBC',
            'CDC',
            'AEA'
        ],
        {
            A: 'ars_nouveau:sconce',
            B: [
                Item.of('minecraft:suspicious_stew'),
                'minecraft:mushroom_stew'
            ],
            C: 'minecraft:gold_ingot',
            D: 'ars_nouveau:source_gem_block',
            E: 'ars_nouveau:spell_prism'
        }
    )
    event.remove({ output: 'starbunclemania:fluid_sourcelink' })
    event.shaped(
        Item.of('starbunclemania:fluid_sourcelink'),
        [
            'ABA',
            'CDC',
            ' E '
        ],
        {
            A: 'ars_nouveau:sconce',
            B: 'minecraft:lava_bucket',
            C: 'minecraft:gold_ingot',
            D: 'ars_nouveau:source_gem_block',
            E: 'ars_nouveau:spell_prism'
        }
    )
    event.remove({ id: 'ars_nouveau:novice_spell_book' })
    event.shapeless(
        Item.of('ars_nouveau:novice_spell_book'),
        [
            'minecraft:writable_book',
            'ars_nouveau:source_gem_block',
            Item.of('minecraft:iron_shovel', '{Damage:0}'),
            Item.of('minecraft:iron_pickaxe', '{Damage:0}'),
            Item.of('minecraft:iron_axe', '{Damage:0}'),
            Item.of('minecraft:iron_sword', '{Damage:0}')
        ]
    )
    event.remove({ output: 'ars_nouveau:ritual_flight' })
    event.shapeless(
        Item.of('ars_nouveau:ritual_flight'),
        [
            'ars_nouveau:purple_archwood_log',
            '2x minecraft:diamond',
            'ars_nouveau:wilden_wing',
            'minecraft:feather',
            [
                'mekanism:jetpack_armored',
                Item.of('botania:flight_tiara',)
            ]
        ]
    )
    event.remove({ output: 'ars_nouveau:archwood_chest' })
    event.shaped(
        Item.of('ars_nouveau:archwood_chest'),
        [
            'AAA',
            'A A',
            'AAA'
        ],
        {
            A: 'ars_nouveau:archwood_planks'
        }
    )
    event.remove({ output: 'ars_nouveau:ritual_brazier' })
    event.shaped(
        Item.of('ars_nouveau:ritual_brazier'),
        [
            'A A',
            'BCB',
            'BDB'
        ],
        {
            A: 'ars_nouveau:source_gem_block',
            B: 'minecraft:gold_ingot',
            C: 'ars_nouveau:arcane_pedestal',
            D: 'ars_nouveau:sourcestone'
        }
    )
})