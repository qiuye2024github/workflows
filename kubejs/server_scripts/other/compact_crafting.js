ServerEvents.recipes(event => {
    event.remove({ output: 'compactcrafting:base' })
    event.shaped(
        Item.of('compactcrafting:base'),
        [
            ' A ',
            'BCB',
            'DBD'
        ],
        {
            A: 'create:mechanical_bearing',
            B: 'immersiveengineering:sheetmetal_steel',
            C: 'rftoolsbase:machine_base',
            D: 'immersiveengineering:sheetmetal_lead'
        }
    )
    event.remove({ output: 'compactcrafting:projector_dish' })
    event.shaped(
        Item.of('compactcrafting:projector_dish'),
        [
            'ABC',
            'DEC',
            'ABC'
        ],
        {
            A: 'immersiveengineering:sheetmetal_lead',
            B: 'minecraft:iron_ingot',
            C: '#forge:glass_panes/colorless',
            D: 'immersiveengineering:sheetmetal_steel',
            E: '#ae2:illuminated_panel'
        }
    )
})