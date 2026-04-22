ServerEvents.recipes(event => {
    event.remove({ output: 'integrateddynamics:mechanical_drying_basin' })
    event.shaped(
        Item.of('integrateddynamics:mechanical_drying_basin'),
        [
            ' A ',
            'BCB',
            ' D '
        ],
        {
            A: 'minecraft:obsidian',
            B: Item.of('integrateddynamics:energy_battery'),
            C: 'integrateddynamics:drying_basin',
            D: 'immersiveengineering:furnace_heater'
        }
    )
})