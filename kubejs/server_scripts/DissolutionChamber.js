ServerEvents.recipes(event => {

    function normalizeItem(input) {if (typeof input === "string") return { item: input };return input}

    function normalizeInputs(inputs) {return inputs.map(normalizeItem).concat(Array(8).fill(null)).slice(0, 8)}

    function normalizeFluid(fluid) {if (!fluid) return '{Amount:0,FluidName:"minecraft:water"}';if (typeof fluid === "string") {return `{Amount:1000,FluidName:"${fluid}"}`}
        if (Array.isArray(fluid)) {const [id, amount] = fluid;return `{Amount:${amount},FluidName:"${id}"}`}return JSON.stringify(fluid)}

    function normalizeOutput(output) {if (typeof output === "string") return { item: output, count: 1 };return output}

    function Dissolution(inputs, inputFluid, output, outputFluid, time) {event.custom({type: "industrialforegoing:dissolution_chamber",
            input: normalizeInputs(inputs),inputFluid: normalizeFluid(inputFluid),output: normalizeOutput(output),outputFluid: normalizeFluid(outputFluid),processingTime: time})}

Dissolution(Array(8).fill('industrialforegoing:pink_slime'),['industrialforegoing:latex', 2400],{ item: 'minecraft:slime_ball', count: 4 },['industrialforegoing:pink_slime', 2400],200)

Dissolution(Array(8).fill({ tag: 'forge:foods/meat/raw' }),['minecraft:milk', 2000],'minecraft:rotten_flesh',['industrialforegoing:meat', 2000],200)

Dissolution(['thermal:tin_gear','industrialforegoing:machine_frame_supreme','thermal:tin_gear','ae2:quartz_vibrant_glass','ae2:quartz_vibrant_glass','thermal:tin_gear',
        'thermal:redstone_servo','thermal:tin_gear'],['thermal:crude_oil', 8000],'thermal:machine_frame',null,12000)

Dissolution(['thermal:tin_gear','industrialforegoing:machine_frame_supreme','thermal:tin_gear','ae2:quartz_vibrant_glass','ae2:quartz_vibrant_glass','thermal:tin_gear',
        'thermal:redstone_servo','thermal:tin_gear'],['thermal:refined_fuel', 1000],'thermal:machine_frame',null,300)

Dissolution(['thermal:sapphire_gear','industrialforegoing:machine_frame_supreme','thermal:sapphire_gear','thermal:gold_plate','thermal:gold_plate','thermal:steel_gear',
        'rftoolsbase:infused_enderpearl','thermal:steel_gear'],['thermal:creosote', 1000],'rftoolsbase:machine_frame',null,300)

Dissolution(['thermal:ruby_gear','industrialforegoing:machine_frame_supreme','thermal:ruby_gear','thermal:gold_plate','thermal:gold_plate','thermal:steel_gear',
        'rftoolsbase:infused_enderpearl','thermal:steel_gear'],['thermal:creosote', 1000],{ item: 'rftoolsbase:machine_base', count: 4 },null,300)

Dissolution(['minecraft:glass',{ tag: 'forge:storage_blocks/invar' },'minecraft:glass',{ tag: 'forge:storage_blocks/charcoalncoal' },{ tag: 'forge:storage_blocks/charcoalncoal' },
        'minecraft:glass','minecraft:clay','minecraft:glass'],['minecraft:lava', 1000],{ item: 'powah:dielectric_paste', count: 64 },null,100)

Dissolution(['create:shadow_steel_casing','powah:dielectric_rod_horizontal','create:shadow_steel_casing','powah:dielectric_rod','powah:dielectric_rod','create:shadow_steel_casing',
        'powah:dielectric_rod_horizontal','create:shadow_steel_casing'],['ifeu:liquid_sculk_matter', 500],'powah:dielectric_casing',null,300)

Dissolution(['thermal:steel_gear','ifeu:ultimate_machine_frame','thermal:steel_gear','thermal:enderium_glass','thermal:enderium_glass','thermal:steel_gear',
        'mekanism:basic_control_circuit','thermal:steel_gear'],['kubejs:liquid_nitrogen', 5000],'mekanism:steel_casing',null,300)

Dissolution(['pneumaticcraft:upgrade_matrix','minecraft:sugar','pneumaticcraft:upgrade_matrix','minecraft:sugar','minecraft:sugar','pneumaticcraft:upgrade_matrix','minecraft:sugar',
        'pneumaticcraft:upgrade_matrix'],['pneumaticcraft:lubricant', 1000],'pneumaticcraft:speed_upgrade',null,40)

Dissolution(Array(8).fill('minecraft:golden_apple'),['industrialforegoing:essence', 8000],{ item: 'minecraft:enchanted_golden_apple', count: 8 },null,10)

    function FluidConvert(inputFluid, outputFluid, time) {event.custom({
            type: "industrialforegoing:dissolution_chamber",input: [{ item: 'create_enchantment_industry:experience_rotor' }],
            inputFluid: normalizeFluid(inputFluid),output: { item: 'create_enchantment_industry:experience_rotor', count: 1 },
            outputFluid: normalizeFluid(outputFluid),processingTime: time})}

    ;["mob_grinding_utils:fluid_xp","pneumaticcraft:memory_essence","cofh_core:experience","sophisticatedcore:xp_still","experienceobelisk:cognitium"
    ].forEach(f => FluidConvert(f, "industrialforegoing:essence", 10))

    FluidConvert("industrialforegoing:essence", "experienceobelisk:cognitium", 10)

})
