ServerEvents.recipes(event => {

    event.custom({"type": "pneumaticcraft:thermo_plant","exothermic": false,
        "fluid_output": {"amount": 1000,"fluid": "mekanism:steam"},
        "item_input": {"item": "thermal:rubber_block",},
        "item_output": {"item": "pneumaticcraft:plastic","count": 4},
        "pressure": 1.5,
        "temperature": {"min_temp": 373}})

    event.custom({"type": "pneumaticcraft:thermo_plant","exothermic": false,
        "fluid_input": {"type": "pneumaticcraft:fluid","amount": 50,"fluid": "industrialforegoing:latex"},
        "item_input": {"item": "pneumaticcraft:pressure_tube"},
        "item_output": {"item": "pneumaticcraft:reinforced_pressure_tube"},
        "pressure": 1.5})

    event.custom({"type": "pneumaticcraft:thermo_plant","exothermic": false,
        "fluid_input": {"type": "pneumaticcraft:fluid","amount": 1000,"fluid": "kubejs:corium"},
        "item_input": {type: "forge:nbt",item: "extendedcrafting:singularity",count: 1,nbt: '{Id:"extendedcrafting:chaos"}'},
        "item_output": {"item": "kubejs:chaos"},
        "pressure": 10})

    event.custom({"type": "pneumaticcraft:thermo_plant","exothermic": false,
        "fluid_input": {"type": "pneumaticcraft:fluid","amount": 1000,"fluid": "kubejs:corium"},
        "item_input": {type: "forge:nbt",item: "extendedcrafting:singularity",count: 1,nbt: '{Id:"extendedcrafting:antimatter"}'},
        "item_output": {"item": "kubejs:antimatter"},
        "pressure": 10})

    event.custom({"type": "pneumaticcraft:thermo_plant","exothermic": false,
        "fluid_input": {"type": "pneumaticcraft:fluid","amount": 1000,"fluid": "kubejs:corium"},
        "item_input": {type: "forge:nbt",item: "extendedcrafting:singularity",count: 1,nbt: '{Id:"extendedcrafting:gaia"}'},
        "item_output": {"item": "kubejs:gaia"},
        "pressure": 10})

    event.custom({"type": "pneumaticcraft:thermo_plant","exothermic": false,
        "fluid_input": {"type": "pneumaticcraft:fluid","amount": 1000,"fluid": "kubejs:corium"},
        "item_input": {type: "forge:nbt",item: "extendedcrafting:singularity",count: 1,nbt: '{Id:"extendedcrafting:hyper_experience"}'},
        "item_output": {"item": "kubejs:experience"},
        "pressure": 10})

    event.custom({"type": "pneumaticcraft:thermo_plant","exothermic": false,
        "fluid_input": {"type": "pneumaticcraft:fluid","amount": 1000,"fluid": "kubejs:destabilized_star"},
        "fluid_output": {"amount": 1000,"fluid": "kubejs:corium"},
        "item_input": {"item": "kubejs:corium"},
        "temperature": {"min_temp": 2073}})

    event.custom({"type": "pneumaticcraft:thermo_plant","exothermic": false,
        "fluid_input": {"type": "pneumaticcraft:fluid","amount": 1000,"tag": "forge:lpg"},
        "fluid_output": {"amount": 1000,"fluid": "pneumaticcraft:lubricant"},
        "item_input": {"tag": "forge:dusts/redstone"},
        "temperature": {"min_temp": 373}})

    event.custom({"type": "pneumaticcraft:thermo_plant","exothermic": false,
        "fluid_input": {"type": "pneumaticcraft:fluid","amount": 2500,"fluid": "minecraft:water"},
        "fluid_output": {"amount": 2500,"fluid": "create_enchantment_industry:ink"},
        "item_input": {"item": "botania:black_petal_block"},
        "temperature": {"min_temp": 373}})

    event.custom({"type": "pneumaticcraft:thermo_plant","exothermic": false,
        "fluid_input": {"type": "pneumaticcraft:fluid","amount": 1000,"fluid": "kubejs:artificial_hyper_experience"},
        "item_input": {"item": "create:experience_block"},
        "item_output": {"item": "kubejs:hyper_experience_block"},
        "temperature": {"min_temp": 673}})

    event.custom({"type": "pneumaticcraft:thermo_plant","exothermic": false,
        "fluid_input": {"type": "pneumaticcraft:fluid","amount": 4500,"fluid": "industrialforegoing:latex"},
        "item_input": {"item": "kubejs:sulfur_sand"},
        "item_output": {"item": "thermal:rubber","count": 9},
        "temperature": {"min_temp": 473}})

    function Mixer(fluidoutput,Cfo,input1,Ci1,input2,Ci2,pressure,time) {event.custom({"type": "pneumaticcraft:fluid_mixer",
    "fluid_output": {"amount": Cfo,"fluid": fluidoutput},"input1": {"type": "pneumaticcraft:fluid","amount": Ci1,"fluid": input1},
    "input2": {"type": "pneumaticcraft:fluid","amount": Ci2,"fluid": input2},"pressure": pressure,"time": time})}
    Mixer('kubejs:glow_ink',1000,'create_enchantment_industry:ink',1000,'thermal:glowstone',250,1.0,40)
    Mixer('kubejs:enchanted_lapis',5000,'kubejs:molten_lapis',3000,'kubejs:glow_ink',2000,1.5,100)
    Mixer('kubejs:artificial_hyper_experience',1000,'kubejs:enchanted_lapis',10000,'industrialforegoing:essence',10000,3.0,500)

})