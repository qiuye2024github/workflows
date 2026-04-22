ServerEvents.recipes(event => {
    event.remove({ output: 'draconicevolution:crafting_core' })
    event.shaped(
        Item.of('draconicevolution:crafting_core'),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: [
                'thermal:enderium_block',
                'extendedcrafting:enhanced_ender_ingot_block',
                'voidminers:caerium_block'
            ],
            B: 'advanced_ae:quantum_alloy_plate',
            C: 'voidminers:azurine',
            D: 'draconicevolution:draconium_core'
        }
    )
    event.remove({ id: 'draconicevolution:machines/basic_crafting_injector' })
    event.shaped(
        Item.of('draconicevolution:basic_crafting_injector'),
        [
            'ABA',
            'CDC',
            'ECE'
        ],
        {
            A: 'voidminers:azurine',
            B: 'draconicevolution:draconium_core',
            C: 'minecraft:iron_block',
            D: 'powah:dielectric_casing',
            E: 'advanced_ae:quantum_alloy'
        }
    )
    event.remove({ output: 'packageddraconic:fusion_crafter' })
    event.shaped(
        Item.of('packageddraconic:fusion_crafter'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'draconicevolution:draconium_ingot',
            B: 'packagedauto:me_package_component',
            C: 'extendedcrafting:crystaltine_component',
            D: 'draconicevolution:crafting_core',
            E: 'extendedcrafting:redstone_catalyst'
        }
    )
})