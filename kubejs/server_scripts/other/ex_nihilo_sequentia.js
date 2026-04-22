ServerEvents.recipes(event => {
    event.remove({ output: 'exnihilosequentia:flint_mesh' })
    event.shaped(
        Item.of('exnihilosequentia:flint_mesh'),
        [
            'ABA',
            'AAA',
            'ABA'
        ],
        {
            A: 'minecraft:flint',
            B: 'exnihilosequentia:string_mesh'
        }
    )
    event.remove({ output: 'exnihilosequentia:iron_mesh' })
    event.shaped(
        Item.of('exnihilosequentia:iron_mesh'),
        [
            'ABA',
            'AAA',
            'ABA'
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'exnihilosequentia:flint_mesh',
        }
    )
    event.remove({ output: 'exnihilosequentia:diamond_mesh' })
    event.shaped(
        Item.of('exnihilosequentia:diamond_mesh'),
        [
            'ABA',
            'AAA',
            'ABA'
        ],
        {
            A: 'minecraft:diamond',
            B: 'exnihilosequentia:iron_mesh',
        }
    )
    event.remove({ output: 'exnihilosequentia:emerald_mesh' })
    event.shaped(
        Item.of('exnihilosequentia:emerald_mesh'),
        [
            'ABA',
            'AAA',
            'ABA'
        ],
        {
            A: 'minecraft:emerald',
            B: 'exnihilosequentia:diamond_mesh',
        }
    )
    event.remove({ output: 'exnihilosequentia:netherite_mesh' })
    event.smithing(
        'exnihilosequentia:netherite_mesh',
        'minecraft:netherite_upgrade_smithing_template',
        'exnihilosequentia:emerald_mesh',
        '#forge:storage_blocks/netherite'
    )
    event.remove({ id: 'exnihilosequentia:sifting/ens_copper_pieces_gravel' })
    event.remove({ id: 'exnihilosequentia:sifting/ens_iron_pieces_gravel' })
    event.remove({ output: 'exmachinis:flux_sieve' })
    event.shaped(
        Item.of('exmachinis:flux_sieve'),
        [
            'ABA',
            'ACA',
            'DED'
        ],
        {
            A: 'minecraft:iron_bars',
            B: 'minecraft:piston',
            C: '#exnihilosequentia:sieves',
            D: 'minecraft:iron_block',
            E: 'thermal:redstone_servo'
        }
    )
    event.remove({ output: 'exmachinis:flux_hammer' })
    event.shaped(
        Item.of('exmachinis:flux_hammer'),
        [
            'ABA',
            'ACA',
            'DED'
        ],
        {
            A: 'minecraft:iron_bars',
            B: 'minecraft:piston',
            C: Item.of('exnihilosequentia:diamond_hammer', '{Damage:0}'),
            D: 'minecraft:iron_block',
            E: 'thermal:redstone_servo'
        }
    )
    event.remove({ output: 'exmachinis:flux_compactor' })
    event.shaped(
        Item.of('exmachinis:flux_compactor'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'minecraft:iron_block',
            B: 'minecraft:piston',
            C: 'minecraft:hopper',
            D: 'minecraft:comparator',
            E: 'thermal:redstone_servo'
        }
    )
    event.remove({ id: 'exnihilosequentia:solidify/ens_cobblestone' })
    event.remove({ id: 'exnihilosequentia:sifting/ens_platinum_pieces_gravel' })
    event.remove({ id: 'exnihilosequentia:sifting/ens_kelp' })
    event.remove({ id: 'exnihilosequentia:sifting/ens_sea_pickle' })

    event.smelting('2x mekanism:nugget_osmium', 'kubejs:osmium_pieces')
    event.smelting('2x tconstruct:cobalt_nugget', 'kubejs:cobalt_pieces')
    event.smelting('2x minecraft:iron_nugget', 'exnihilosequentia:iron_pieces')
    event.smelting('2x minecraft:gold_nugget', 'exnihilosequentia:gold_pieces')
    event.smelting('2x create:copper_nugget', 'exnihilosequentia:copper_pieces')
    event.smelting('2x thermal:lead_nugget', 'exnihilosequentia:lead_pieces')
    event.smelting('2x thermal:nickel_nugget', 'exnihilosequentia:nickel_pieces')
    event.smelting('2x thermal:silver_nugget', 'exnihilosequentia:silver_pieces')
    event.smelting('2x thermal:tin_nugget', 'exnihilosequentia:tin_pieces')
    event.smelting('2x immersiveengineering:nugget_uranium', 'exnihilosequentia:uranium_pieces')
    event.smelting('2x create:zinc_nugget', 'exnihilosequentia:zinc_pieces')
})