ServerEvents.recipes(event => {
    event.remove({ output: 'immersiveengineering:alloybrick' })
    event.shaped(
        Item.of('immersiveengineering:alloybrick', 2),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: '#forge:ingots/brick',
            B: 'kubejs:mud_brick',
            C: '#forge:sandstone'
        }
    )
    event.remove({ output: 'immersiveengineering:blastbrick' })
    event.shaped(
        Item.of('immersiveengineering:blastbrick', 3),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'minecraft:nether_brick',
            B: 'kubejs:mud_brick',
            C: '#forge:ingots/brick',
            D: 'minecraft:magma_block'
        }
    )
    event.remove({ output: 'immersiveengineering:cokebrick' })
    event.shaped(
        Item.of('immersiveengineering:cokebrick', 3),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'tconstruct:seared_brick',
            B: '#forge:ingots/brick',
            C: '#forge:sandstone'
        }
    )
    event.remove({ output: 'immersiveengineering:heavy_engineering' })
    event.shaped(
        Item.of('immersiveengineering:heavy_engineering', 4),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'immersiveengineering:sheetmetal_steel',
            B: 'immersiveengineering:component_steel',
            C: 'kubejs:basic_engineering'
        }
    )
    event.remove({ output: 'immersiveengineering:rs_engineering' })
    event.shaped(
        Item.of('immersiveengineering:rs_engineering', 4),
        [
            'ABA',
            'DCD',
            'ABA'
        ],
        {
            A: 'immersiveengineering:sheetmetal_iron',
            B: 'minecraft:redstone',
            C: 'kubejs:basic_engineering',
            D: 'immersiveengineering:component_electronic'
        }
    )
    event.remove({ output: 'immersiveengineering:light_engineering' })
    event.shaped(
        Item.of('immersiveengineering:light_engineering', 4),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'immersiveengineering:sheetmetal_iron',
            B: 'immersiveengineering:component_iron',
            C: 'kubejs:basic_engineering'
        }
    )
    event.shaped(
        Item.of('immersiveengineering:wirecoil_redstone', 2),
        [
            ' A ',
            'BCB',
            ' A '
        ],
        {
            A: '#forge:wires/copper',
            B: 'minecraft:redstone',
            C: '#forge:rods/wooden'
        }
    )
    event.shaped(
        Item.of('immersiveengineering:blueprint', '{blueprint:"components"}'),
        [
            'ABC',
            'DDD',
            'EEE'
        ],
        {
            A: 'minecraft:copper_ingot',
            B: '#forge:ingots/tin',
            C: 'minecraft:iron_ingot',
            D: '#forge:dyes/blue',
            E: 'minecraft:paper'
        }
    )
    event.remove({ output: 'immersiveindustry:electrolyzer' })
    event.shaped(
        Item.of('immersiveindustry:electrolyzer'),
        [
            'ABC',
            'FEF',
            'GDG'
        ],
        {
            A: '#forge:ingots/gold',
            B: 'immersiveengineering:coil_lv',
            C: '#forge:ingots/silver',
            D: 'immersiveengineering:circuit_board',
            E: Item.of('immersiveengineering:graphite_electrode'),
            F: '#forge:ingots/steel',
            G: 'immersiveengineering:heavy_engineering'
        }
    )
    event.remove({ output: 'immersiveengineering:furnace_heater' })
    event.shaped(
        Item.of('immersiveengineering:furnace_heater'),
        [
            'ABA',
            'CDE',
            'AFA'
        ],
        {
            A: '#forge:plates/iron',
            B: 'mekanism:superheating_element',
            C: 'minecraft:redstone',
            D: 'immersiveengineering:coil_lv',
            E: '#forge:plates/copper',
            F: 'create:blaze_burner'
        }
    )
})