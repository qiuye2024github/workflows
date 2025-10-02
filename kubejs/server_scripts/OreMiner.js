ServerEvents.recipes(event => {

    function oreminer(lens,output,maxY,minY,weight) {event.custom({"type": "industrialforegoing:laser_drill_ore",
        "catalyst": {"item": lens},"output": {"item": output},"pointer": 0,
        "rarity": [{"blacklist": {}, "depth_max": maxY,"depth_min": minY,"weight": weight,"whitelist": {}}]})}

    oreminer('industrialforegoing:laser_lens12','thermal:nickel_ore',200,-50,1)
    oreminer('industrialforegoing:laser_lens3','thermal:apatite_ore',200,-50,1)
    oreminer('industrialforegoing:laser_lens8','thermal:tin_ore',200,-50,1)
    oreminer('industrialforegoing:laser_lens10','thermal:lead_ore',200,-50,1)
    oreminer('industrialforegoing:laser_lens7','thermal:silver_ore',200,-50,1)
    oreminer('industrialforegoing:laser_lens4','thermal:sulfur_ore',200,-50,1)
    oreminer('industrialforegoing:laser_lens0','thermal:niter_ore',200,-50,1)
    oreminer('industrialforegoing:laser_lens14','thermal:ruby_ore',200,-50,1)
    oreminer('industrialforegoing:laser_lens11','thermal:sapphire_ore',200,-50,1)
    oreminer('industrialforegoing:laser_lens14','thermal:cinnabar_ore',200,-50,1)
    oreminer('industrialforegoing:laser_lens12','minecraft:iron_ore',200,-50,1)
    oreminer('industrialforegoing:laser_lens4','minecraft:gold_ore',200,-50,1)
    oreminer('industrialforegoing:laser_lens1','minecraft:copper_ore',200,-50,1)
    oreminer('industrialforegoing:laser_lens0','minecraft:nether_quartz_ore',200,-50,1)
    oreminer('industrialforegoing:laser_lens5','minecraft:emerald_ore',200,-50,1)
    oreminer('industrialforegoing:laser_lens12','minecraft:ancient_debris',200,-50,1)
    oreminer('industrialforegoing:laser_lens4','minecraft:glowstone',200,-50,1)
    oreminer('industrialforegoing:laser_lens3','minecraft:diamond_ore',200,-50,1)
    oreminer('industrialforegoing:laser_lens15','minecraft:coal_ore',200,-50,1)
    oreminer('industrialforegoing:laser_lens14','minecraft:redstone_ore',200,-50,1)
    oreminer('industrialforegoing:laser_lens11','minecraft:lapis_ore',200,-50,1)
    oreminer('industrialforegoing:laser_lens5','create:zinc_ore',200,-50,1)

})