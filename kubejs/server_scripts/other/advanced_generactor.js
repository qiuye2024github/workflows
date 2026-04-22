ServerEvents.recipes(event => {
    event.remove({ output: 'advgenerators:iron_frame' })
    event.shaped(
        Item.of('advgenerators:iron_frame', 4),
        [
            'CAC',
            'ABA',
            'CAC'
        ],
        {
            A: 'minecraft:iron_ingot',
            B: [
                '#pneumaticcraft:plastic_sheets', 'industrialforegoing:plastic'
            ],
            C: 'thermal:cured_rubber'
        }
    )
    event.shaped(
        Item.of('advgenerators:iron_frame', 2),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'minecraft:iron_ingot',
            B: [
                '#pneumaticcraft:plastic_sheets', 'industrialforegoing:plastic'
            ],
            C: 'thermal:cured_rubber'
        }
    )
    event.remove({ output: 'advgenerators:controller' })
    event.shaped(
        Item.of('advgenerators:controller'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: '#forge:wires/copper',
            B: 'minecraft:quartz',
            C: 'minecraft:redstone',
            D: 'ae2:printed_calculation_processor',
            E: '#forge:plates/iron'
        }
    )
    event.remove({ output: 'advgenerators:heating_chamber' })
    event.shaped(
        Item.of('advgenerators:heating_chamber'),
        [
            'ABA',
            'CDC',
            'ACA'
        ],
        {
            A: 'advgenerators:iron_frame',
            B: 'advgenerators:pressure_valve',
            C: 'advgenerators:iron_tubing',
            D: 'mekanism:superheating_element'
        }
    )
    event.remove({ output: 'advgenerators:heat_exchanger' })
    event.shaped(
        Item.of('advgenerators:heat_exchanger'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'advgenerators:iron_frame',
            B: 'advgenerators:iron_tubing',
            C: 'immersiveengineering:radiator'
        }
    )
    event.remove({ output: 'advgenerators:iron_tubing' })
    event.shaped(
        Item.of('advgenerators:iron_tubing', 2),
        [
            ' BA',
            'BCB',
            'AB '
        ],
        {
            A: 'minecraft:stick',
            B: '#forge:wires/iron',
            C: 'minecraft:iron_ingot'
        }
    )
    event.remove({ output: 'advgenerators:pressure_valve' })
    event.shaped(
        Item.of('advgenerators:pressure_valve', 2),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'minecraft:iron_ingot',
            B: '#forge:plates/iron',
            C: 'advgenerators:iron_tubing',
            D: 'create:fluid_valve'
        }
    )
    event.remove({ output: 'advgenerators:iron_wiring' })
    event.shaped(
        Item.of('advgenerators:iron_wiring'),
        [
            ' BA',
            'CDC',
            'AB '
        ],
        {
            A: 'minecraft:stick',
            B: 'minecraft:redstone',
            C: 'immersiveengineering:wirecoil_redstone',
            D: 'advgenerators:iron_tubing'
        }
    )
})