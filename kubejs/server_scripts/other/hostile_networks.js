ServerEvents.recipes(event => {
    event.remove({ output: 'hostilenetworks:sim_chamber' })
    event.shaped(
        Item.of('hostilenetworks:sim_chamber'),
        [
            'ABA',
            'CDE',
            'AFA'
        ],
        {
            A: 'minecraft:obsidian',
            B: 'ae2:engineering_processor',
            C: 'mekanism:advanced_control_circuit',
            D: 'extendedcrafting:frame',
            E: 'rftoolsutility:screen',
            F: 'quark:redstone_randomizer'
        }
    )
    event.remove({ output: 'hostilenetworks:loot_fabricator' })
    event.shaped(
        Item.of('hostilenetworks:loot_fabricator'),
        [
            'ABA',
            'CDE',
            'AFA'
        ],
        {
            A: 'minecraft:obsidian',
            B: 'ae2:logic_processor',
            C: 'mekanism:advanced_control_circuit',
            D: 'extendedcrafting:frame',
            E: '#mekanism:personal_storage',
            F: 'minecraft:comparator'
        }
    )
})