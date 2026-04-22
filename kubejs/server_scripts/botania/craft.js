ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('botania:spark'),
        [
            'botanicalextramachinery:base_spark'
        ]
    )

    const botania_apothecary_craft = (a, b, c) => {
        event.remove({ output: a })
        event.shaped(
            Item.of(a),
            [
                'ABA',
                'CDC',
                'DDD'
            ],
            {
                A: c,
                B: 'create:basin',
                C: '#botania:petals',
                D: b
            }
        )
    }
    botania_apothecary_craft('botania:apothecary_default', 'minecraft:cobblestone', 'minecraft:cobblestone_slab')
    botania_apothecary_craft('botania:apothecary_forest', 'botania:metamorphic_forest_cobblestone', 'botania:metamorphic_forest_cobblestone_slab')
    botania_apothecary_craft('botania:apothecary_plains', 'botania:metamorphic_plains_cobblestone', 'botania:metamorphic_plains_cobblestone_slab')
    botania_apothecary_craft('botania:apothecary_mountain', 'botania:metamorphic_mountain_cobblestone', 'botania:metamorphic_mountain_cobblestone_slab')
    botania_apothecary_craft('botania:apothecary_fungal', 'botania:metamorphic_fungal_cobblestone', 'botania:metamorphic_fungal_cobblestone_slab')
    botania_apothecary_craft('botania:apothecary_swamp', 'botania:metamorphic_swamp_cobblestone', 'botania:metamorphic_swamp_cobblestone_slab')
    botania_apothecary_craft('botania:apothecary_desert', 'botania:metamorphic_desert_cobblestone', 'botania:metamorphic_desert_cobblestone_slab')
    botania_apothecary_craft('botania:apothecary_taiga', 'botania:metamorphic_taiga_cobblestone', 'botania:metamorphic_taiga_cobblestone_slab')
    botania_apothecary_craft('botania:apothecary_mesa', 'botania:metamorphic_mesa_cobblestone', 'botania:metamorphic_mesa_cobblestone_slab')
    botania_apothecary_craft('botania:apothecary_mossy', 'minecraft:mossy_cobblestone', 'minecraft:mossy_cobblestone_slab')
    botania_apothecary_craft('botania:apothecary_livingrock', 'botania:livingrock', 'botania:livingrock_slab')
    botania_apothecary_craft('botania:apothecary_deepslate', 'minecraft:cobbled_deepslate', 'minecraft:cobbled_deepslate_slab')

    event.remove({ output: 'botania:diluted_pool' })
    event.shaped(
        Item.of('botania:diluted_pool'),
        [
            'ABA',
            'CAC',
        ],
        {
            A: 'botania:livingrock_slab',
            B: 'ars_nouveau:source_gem',
            C: 'botania:livingrock'
        }
    )
    event.remove({ output: 'botania:mana_pool' })
    event.shaped(
        Item.of('botania:mana_pool'),
        [
            'ABA',
            'CDC',
        ],
        {
            A: 'botania:livingrock_slab',
            B: 'botania:mana_tablet',
            C: 'botania:livingrock',
            D: 'botania:diluted_pool'
        }
    )
    event.shaped(
        Item.of('botanicpledge:yggdrasil_planks', 4),
        [
            'A'
        ],
        {
            A: [
                'botanicpledge:yggdrasil_log',
                'botanicpledge:yggdrasil',
                'botanicpledge:stripped_yggdrasil_log',
                'botanicpledge:stripped_yggdrasil'
            ]
        }
    )
    event.shaped(
        Item.of('botanicpledge:yggdrasil_slab', 6),
        [
            'AAA'
        ],
        {
            A: 'botanicpledge:yggdrasil_planks'
        }
    )
    event.shaped(
        Item.of('botanicpledge:yggdrasil_stairs', 4),
        [
            'A  ',
            'AA ',
            'AAA'
        ],
        {
            A: 'botanicpledge:yggdrasil_planks'
        }
    )
    event.remove({ output: 'botania:runic_altar' })
    event.shaped(
        Item.of('botania:runic_altar'),
        [
            'ABA',
            'ACA',
            'DAD'
        ],
        {
            A: 'botania:livingrock',
            B: 'create:depot',
            C: [
                'botania:mana_pearl',
                'botania:mana_diamond',
                'botanicalmachinery:mana_emerald'
            ],
            D: 'botania:manasteel_ingot'
        }
    )
    event.shapeless(
        Item.of('appbot:fluix_mana_pool'),
        [
            'botanicadds:dreaming_pool',
            'ae2:interface'
        ]
    )
    event.remove({ output: 'botania:mana_spreader' })
    event.shaped(
        Item.of('botania:mana_spreader'),
        [
            'AAA',
            'BC ',
            'AAA'
        ],
        {
            A: '#botania:livingwood_logs',
            B: 'minecraft:gold_ingot',
            C: '#botania:petals'
        }
    )
    event.remove({ output: 'botania:terra_plate' })
    event.shaped(
        Item.of('botania:terra_plate'),
        [
            'ABA',
            'CDE',
            'FGH'
        ],
        {
            A: 'botania:manasteel_block',
            B: Item.of('occultism:dimensional_matrix'),
            C: 'botania:rune_spring',
            D: 'ars_nouveau:shapers_focus',
            E: 'botania:rune_winter',
            F: 'botania:rune_summer',
            G: 'botania:rune_mana',
            H: 'botania:rune_autumn'
        }
    )
    event.shaped(
        Item.of('botania:terra_plate'),
        [
            'A',
        ],
        {
            A: '#botanicalmachinery:industrial_agglomeration_factory'
        }
    )
    event.remove({ output: 'botania:alfheim_portal' })
    event.shaped(
        Item.of('botania:alfheim_portal'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: '#botania:livingwood_logs',
            B: '#forge:ingots/terrasteel',
            C: 'naturesaura:infused_iron',
            D: 'minecraft:conduit',
            E: 'minecraft:crying_obsidian'
        }
    )
    event.remove({ output: 'botania:mana_pylon' })
    event.shaped(
        Item.of('botania:mana_pylon'),
        [
            ' A ',
            'BCB',
            ' D '
        ],
        {
            A: '#forge:ingots/manasteel',
            B: 'minecraft:gold_ingot',
            C: 'botania:mana_diamond',
            D: Item.of('occultism:dimensional_matrix')
        }
    )
    event.remove({ output: 'botania:natura_pylon' })
    event.shaped(
        Item.of('botania:natura_pylon'),
        [
            ' A ',
            'BCB',
            ' D '
        ],
        {
            A: 'botania:terrasteel_ingot',
            B: 'botania:glimmering_livingwood',
            C: 'botania:mana_pylon',
            D: Item.of('occultism:dimensional_matrix')
        }
    )
    event.remove({ output: 'mythicbotany:mana_infuser' })
    event.shaped(
        Item.of('mythicbotany:mana_infuser'),
        [
            'ABA',
            'CDE',
            'FGH'
        ],
        {
            A: 'botania:elementium_block',
            B: 'botania:terra_plate',
            C: 'botania:rune_spring',
            D: [
                'botania:glimmering_dreamwood',
                'botania:glimmering_dreamwood_log'
            ],
            E: 'botania:rune_winter',
            F: 'botania:rune_summer',
            G: 'mythicbotany:asgard_rune',
            H: 'botania:rune_autumn'
        }
    )
    event.remove({ output: 'mythicbotany:alfsteel_pylon' })
    event.shaped(
        Item.of('mythicbotany:alfsteel_pylon'),
        [
            ' A ',
            'BCB',
            ' D '
        ],
        {
            A: 'mythicbotany:alfsteel_ingot',
            B: 'enderio:redstone_alloy_ingot',
            C: 'botania:natura_pylon',
            D: Item.of('occultism:dimensional_matrix')
        }
    )
    event.remove({ output: 'botania:gaia_pylon' })
    event.shaped(
        Item.of('botania:gaia_pylon'),
        [
            ' A ',
            'BCB',
            ' D '
        ],
        {
            A: 'extrabotany:gaia_quartz',
            B: 'botania:elementium_ingot',
            C: 'mythicbotany:alfsteel_pylon',
            D: Item.of('occultism:dimensional_matrix')
        }
    )
    event.remove({ output: 'botania:spark_upgrade_dispersive' })
    event.shapeless(
        Item.of('botania:spark_upgrade_dispersive'),
        [
            [
                'botania:pixie_dust',
                'botania:mana_pearl'
            ],
            'botania:manasteel_ingot',
            'botania:rune_water'
        ]
    )
    event.remove({ output: 'botania:spark_upgrade_dominant' })
    event.shapeless(
        Item.of('botania:spark_upgrade_dominant'),
        [
            [
                'botania:pixie_dust',
                'botania:mana_pearl'
            ],
            'botania:manasteel_ingot',
            'botania:rune_fire'
        ]
    )
    event.remove({ output: 'botania:spark_upgrade_recessive' })
    event.shapeless(
        Item.of('botania:spark_upgrade_recessive'),
        [
            [
                'botania:pixie_dust',
                'botania:mana_pearl'
            ],
            'botania:manasteel_ingot',
            'botania:rune_earth'
        ]
    )
    event.remove({ output: 'botania:spark_upgrade_isolated' })
    event.shapeless(
        Item.of('botania:spark_upgrade_isolated'),
        [
            [
                'botania:pixie_dust',
                'botania:mana_pearl'
            ],
            'botania:manasteel_ingot',
            'botania:rune_air'
        ]
    )
    event.remove({ output: 'mythicbotany:central_rune_holder' })
    event.shaped(
        Item.of('mythicbotany:central_rune_holder'),
        [
            ' A ',
            'BCB'
        ],
        {
            A: 'botanicalextramachinery:malachite_ingot',
            B: [
                'naturesaura:infused_iron',
                'botanicalextramachinery:malachite_ingot'
            ],
            C: 'mythicbotany:rune_holder'
        }
    )
    event.remove({ id: 'extrabotany:pedestal_livingrock' })
    event.shapeless(
        Item.of('extrabotany:pedestal_livingrock'),
        [
            'extrabotany:pedestal_calcite',
            'botania:livingrock'
        ]
    )
    event.remove({ id: 'extrabotany:pedestal_calcite' })
    event.shapeless(
        Item.of('extrabotany:pedestal_calcite'),
        [
            'extrabotany:pedestal_livingrock',
            'minecraft:calcite'
        ]
    )
    event.remove({ output: 'botanicalmachinery:mechanical_mana_infuser' })
    event.shaped(
        Item.of('botanicalmachinery:mechanical_mana_infuser'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'botania:elementium_ingot',
            B: 'botania:dragonstone',
            C: 'mythicbotany:alfsteel_ingot',
            D: 'botania:aura_ring_greater',
            E: 'mythicbotany:mana_infuser'
        }
    )
    event.remove({ output: 'botanicpledge:ritual_center' })
    event.shaped(
        Item.of('botanicpledge:ritual_center'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'botanicadds:dreamrock',
            B: 'mythicbotany:alfsteel_ingot',
            C: 'kubejs:mana_ingot',
            D: 'botanicpledge:ritual_pedestal',
            E: 'mythicbotany:alfheim_rune'
        }
    )
    event.remove({ output: 'extrabotany:dimension_catalyst' })
    event.shaped(
        Item.of('extrabotany:dimension_catalyst'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'botania:livingrock',
            B: 'botania:mana_pearl',
            C: 'extrabotany:elementium_quartz',
            D: 'botania:alchemy_catalyst',
            E: 'botania:elementium_ingot'
        }
    )
})