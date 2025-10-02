ProjectEEvents.registerWorldTransmutations(event => {

    event.transform("botania:natura_pylon", "botania:mana_pylon");
    event.transform("botania:mana_pylon", "botania:natura_pylon");
    event.transform("emc_interface:emc_interface", "ae2:mysterious_cube");
    event.transform("ae2:mysterious_cube", "emc_interface:emc_interface");
    event.transform("thermal:sugar_cane_block", "minecraft:cake");

})