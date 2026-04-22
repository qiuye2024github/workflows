ServerEvents.recipes(event => {
    event.remove({ output: 'enderio:conduit_binder_composite' })
    event.shaped(
        Item.of('enderio:conduit_binder_composite', 6),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: '#forge:gravel',
            B: 'minecraft:clay_ball',
            C: '#forge:sand',
            D: 'immersiveengineering:concrete_bucket'
        }
    ).replaceInput('minecraft:bucket', 'immersiveengineering:concrete_bucket',)
    event.remove({ output: 'enderio:void_chassis' })
    event.shaped(
        Item.of('enderio:void_chassis'),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'enderio:dark_steel_bars',
            B: 'bloodmagic:reinforcedslate',
            C: 'create:refined_radiance_casing',
            D: 'thermal:energy_cell_frame'
        }
    )
    event.remove({ output: 'enderio:ensouled_chassis' })
    event.shaped(
        Item.of('enderio:ensouled_chassis'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'enderio:soul_chain',
            B: '#forge:ingots/soularium',
            C: 'enderio:void_chassis'
        }
    )
    event.remove({ output: 'enderio:soul_binder' })
    event.shaped(
        Item.of('enderio:soul_binder'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'botanicalextramachinery:shadow_ingot',
            B: 'enderio:empty_soul_vial',
            C: 'enderio:energized_gear',
            D: 'enderio:ensouled_chassis',
            E: 'enderio:z_logic_controller'
        }
    )
    event.remove({ output: 'enderio:reinforced_obsidian_block' })
    event.shaped(
        'enderio:reinforced_obsidian_block',
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'extendedcrafting:black_iron_ingot',
            B: 'enderio:dark_steel_bars',
            C: 'minecraft:obsidian'
        }
    )
    event.remove({ output: 'enderio:primitive_alloy_smelter' })
    event.shaped(
        Item.of('enderio:primitive_alloy_smelter'),
        [
            'AAA',
            'BCB',
            'BDB'
        ],
        {
            A: 'minecraft:furnace',
            B: 'minecraft:deepslate',
            C: 'enderio:grains_of_infinity',
            D: 'enderio:reinforced_obsidian_block'
        }
    )
    event.remove({ output: 'enderio:pulsating_crystal' })
    event.shaped(
        Item.of('enderio:pulsating_crystal'),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'enderio:pulsating_alloy_nugget',
            B: 'powah:crystal_niotic'
        }
    )
})