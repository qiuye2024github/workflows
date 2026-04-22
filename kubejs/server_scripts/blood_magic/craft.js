ServerEvents.recipes(event => {
    event.remove({ output: 'bloodmagic:altar' })
    event.shaped(
        Item.of('bloodmagic:altar'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            A: 'enderio:redstone_alloy_ingot',
            B: 'botania:rune_greed',
            C: 'minecraft:obsidian',
            D: 'create:basin',
            E: 'botanicalextramachinery:crystal_ingot',
            F: 'minecraft:smooth_stone'
        }
    )
    event.remove({ output: 'bloodmagic:alchemytable' })
    event.shaped(
        Item.of('bloodmagic:alchemytable'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            A: 'naturesaura:infused_stone',
            B: 'bloodmagic:blankrune',
            C: 'bloodmagic:demonslate',
            D: 'immersiveengineering:craftingtable',
            E: 'minecraft:gold_ingot',
            F: 'bloodmagic:archmagebloodorb'
        }
    )
    event.remove({ output: 'bloodmagic:soulforge' })
    event.shaped(
        Item.of('bloodmagic:soulforge'),
        [
            'ABA',
            'CDC',
            'E E'
        ],
        {
            A: [
                Item.of('bloodmagic:soulgempetty'),
                Item.of('bloodmagic:basemonstersoul')
            ],
            B: 'bloodmagic:ingot_hellforged',
            C: 'bloodmagic:demonslate',
            D: 'minecraft:smithing_table',
            E: 'bloodmagic:blankrune'
        }
    )
    event.remove({ output: 'bloodmagic:demoncrucible' })
    event.shaped(
        Item.of('bloodmagic:demoncrucible'),
        [
            'ABA',
            'CDC',
            'E E'
        ],
        {
            A: [
                Item.of('bloodmagic:soulgempetty'),
                Item.of('bloodmagic:basemonstersoul')
            ],
            B: 'minecraft:diamond',
            C: 'bloodmagic:etherealslate',
            D: [
                'exnihilosequentia:fired_crucible',
                'minecraft:cauldron'
            ],
            E: 'bloodmagic:blankrune',
            F: 'minecraft:lapis_block'
        }
    )
    event.remove({ output: 'bloodmagic:simplekey' })
    event.shaped(
        Item.of('bloodmagic:simplekey', 3),
        [
            ' BA',
            'BCB',
            'BB '
        ],
        {
            A: 'minecraft:redstone_block',
            B: 'minecraft:iron_ingot',
            C: 'bloodmagic:reinforcedslate'
        }
    )
    event.remove({ output: 'bloodmagic:hellforgedparts' })
    event.shaped(
        Item.of('bloodmagic:hellforgedparts', 2),
        [
            'ABA',
            'BCB',
            'ABD'
        ],
        {
            A: 'bloodmagic:defaultcrystal',
            B: 'bloodmagic:ingot_hellforged',
            C: 'bloodmagic:hellforgedparts',
            D: 'bloodmagic:noderouter'
        }
    )
    event.remove({ output: 'bloodmagic:incensealtar' })
    event.shaped(
        Item.of('bloodmagic:incensealtar'),
        [
            'A A',
            'ABA',
            'CDC'
        ],
        {
            A: 'minecraft:dripstone_block',
            B: 'botania:incense_stick',
            C: 'bloodmagic:blankrune',
            D: 'minecraft:fire_charge'
        }
    )
})