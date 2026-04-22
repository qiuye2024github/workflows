ServerEvents.recipes(event => {
    event.remove({ output: 'create:sturdy_sheet' })
    event.recipes.create.sequenced_assembly(
        [
            Item.of('create:sturdy_sheet'),
        ],
        '#forge:dusts/refined_obsidian',
        [
            event.recipes.create.filling(
                'mekanism:dust_refined_obsidian',
                [
                    Fluid.of('minecraft:lava', 500),
                    'mekanism:dust_refined_obsidian'
                ]),
            event.recipes.create.pressing(
                'mekanism:dust_refined_obsidian',
                'mekanism:dust_refined_obsidian'
            ),
            event.recipes.create.pressing(
                'mekanism:dust_refined_obsidian',
                'mekanism:dust_refined_obsidian'
            )
        ]
    )
        .transitionalItem('mekanism:dust_refined_obsidian')
        .loops(1)
    event.custom({
        "type": "thermal:chiller",
        "ingredients": [
            {
                "fluid": "minecraft:lava",
                "amount": 500
            },
            {
                "tag": "forge:dusts/refined_obsidian"
            }
        ],
        "result": [
            {
                "item": "create:sturdy_sheet",
                "count": 1
            }
        ],
        "energy": 8000
    })

    event.remove({ output: 'create:precision_mechanism' })
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "tag": "forge:plates/gold"
        },
        "loops": 3,
        "results": [
            {
                "chance": 150.0,
                "item": "create:precision_mechanism"
            },
            {
                "chance": 8.0,
                "item": "create:andesite_alloy"
            },
            {
                "chance": 5.0,
                "item": "create:cogwheel"
            },
            {
                "chance": 5.0,
                "item": "minecraft:gold_nugget"
            },
            {
                "chance": 2.0,
                "item": "create:shaft"
            },
            {
                "item": "minecraft:iron_ingot"
            },
            {
                "item": "minecraft:clock"
            }
        ],
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "create:incomplete_precision_mechanism"
                    },
                    {
                        "item": "create:cogwheel"
                    }
                ],
                "results": [
                    {
                        "item": "create:incomplete_precision_mechanism"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "create:incomplete_precision_mechanism"
                    },
                    {
                        "item": "create:large_cogwheel"
                    }
                ],
                "results": [
                    {
                        "item": "create:incomplete_precision_mechanism"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "create:incomplete_precision_mechanism"
                    },
                    {
                        "tag": "forge:nuggets/iron"
                    }
                ],
                "results": [
                    {
                        "item": "create:incomplete_precision_mechanism"
                    }
                ]
            }
        ],
        "transitionalItem": {
            "item": "create:incomplete_precision_mechanism"
        }
    })
})