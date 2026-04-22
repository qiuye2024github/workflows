ServerEvents.recipes(event => {
    event.remove({ id: 'projecte:low_covalence_dust' })
    event.remove({ id: 'projecte:medium_covalence_dust' })
    event.remove({ id: 'projecte:high_covalence_dust' })
    event.remove({ output: 'projecte:philosophers_stone' })
    event.shaped(
        Item.of('projecte:philosophers_stone'),
        [
            'ABC',
            'DED',
            'CBA'
        ],
        {
            C: 'voidminers:citrinetine_block',
            A: 'voidminers:aurantium_block',
            B: 'projecte:high_covalence_dust',
            D: 'mythicbotany:alfsteel_block',
            E: 'powah:nitro_crystal_block'
        }
    )
    event.remove({ output: 'projecte:transmutation_table' })
    event.shaped(
        Item.of('projecte:transmutation_table'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'projecte:dark_matter_block',
            B: 'ae2:dark_monitor',
            C: 'ae2:quartz_block',
            D: 'projecte:philosophers_stone',
            E: 'ae2:fluix_block'
        }
    )
    event.remove({ output: 'projecte:collector_mk1' })
    event.shaped(
        Item.of('projecte:collector_mk1'),
        [
            'ABA',
            'ACA',
            'ADA'
        ],
        {
            A: 'minecraft:glowstone',
            B: 'projecte:alchemical_coal',
            C: 'minecraft:diamond_block',
            D: 'minecraft:furnace'
        }
    )
    event.remove({ output: 'projecte:relay_mk1' })
    event.shaped(
        Item.of('projecte:relay_mk1'),
        [
            'ABA',
            'ACA',
            'AAA'
        ],
        {
            A: 'minecraft:obsidian',
            B: 'projecte:alchemical_coal',
            C: 'minecraft:diamond_block',
        }
    )
    event.remove({ output: 'projecte:dm_pedestal' })
    event.shaped(
        Item.of('projecte:dm_pedestal'),
        [
            'ABA',
            'ACA',
            'CCC'
        ],
        {
            A: 'projecte:red_matter',
            B: 'create:depot',
            C: 'projecte:dark_matter_block'
        }
    )
    event.remove({ output: 'projecte:watch_of_flowing_time' })
    event.shaped(
        Item.of('projecte:watch_of_flowing_time'),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'projecte:dark_matter',
            B: 'minecraft:glowstone',
            C: 'minecraft:obsidian',
            D: Item.of('tiab:time_in_a_bottle')
        }
    )
})