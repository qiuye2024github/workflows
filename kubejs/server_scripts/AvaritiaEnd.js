ServerEvents.recipes(event => {
  
    event.custom({"type": "avaritia:shaped_table","category": "misc","key": {
      "a": {"item": 'mekanism:crystal_iron'},
      "b": {"item": 'mekanism:crystal_gold'},
      "c": {"item": 'mekanism:crystal_osmium'},
      "d": {"item": 'mekanism:crystal_copper'},
      "e": {"item": 'mekanism:crystal_tin'},
      "f": {"item": 'mekanism:crystal_lead'},
      "g": {"item": 'mekanism:crystal_uranium'}},
    "pattern": ["abcdefg","abcdefg","abcdefg","abcdefg","abcdefg","abcdefg","abcdefg"],
    "result": {"item": 'kubejs:draconium_crystal'},
    "show_notification": false,"tier": 3})

    event.custom({"type": "avaritia:shaped_table","category": "misc","key": {
      "a": {"item": 'kubejs:sculk_metal_block'},
      "b": {"item": 'draconicevolution:draconium_core'},
      "c": {"item": 'botania:mana_diamond_block'},
      "d": {"item": 'draconicevolution:wyvern_energy_core'},
      "e": {"item": 'pneumaticcraft:printed_circuit_board'},
      "f": {"item": 'minecraft:iron_block'}},
    "pattern": ["aababaa","accdcca","bcebecb","adbfbda","bcebecb","accdcca","aababaa"],
    "result": {"item": 'draconicevolution:basic_crafting_injector'},
    "show_notification": false,"tier": 3})

    event.custom({"type": "avaritia:shaped_table","category": "misc","key": {
      "a": {"item": 'minecraft:lapis_block'},
      "b": {"item": 'botania:mana_diamond_block'},
      "c": {"item": 'draconicevolution:wyvern_core'},
      "d": {"item": 'draconicevolution:draconium_core'},
      "f": {"item": 'draconicevolution:wyvern_energy_core'},
      "e": {"item": 'draconicevolution:dislocator'},
      "g": {"item": 'pneumaticcraft:printed_circuit_board'},
      "h": {"item": 'draconicevolution:dragon_heart'}},
    "pattern": ["aabcbaa","adfefda","bfgggfb","ceghgec","bfgggfb","adfefda","aabcbaa"],
    "result": {"item": 'draconicevolution:crafting_core'},
    "show_notification": false,"tier": 3})

    event.custom({"type": "avaritia:shaped_table","category": "misc","key": {
      "a": {"item": 'pneumaticcraft:pressure_chamber_glass'},
      "b": {"item": 'minecraft:nether_star'},
      "c": {"item": 'mekanism:block_refined_glowstone'}},
    "pattern": ["   a   ","   a   ","  aba  ","aabcbaa","  aba  ","   a   ","   a   "],
    "result": {"item":'ifeu:empty_nether_star',"count":16},
    "show_notification": false,"tier": 3})

    event.custom({"type": "avaritia:shaped_table","category": "misc","key": {
      "A": {"item": 'avaritia:crystal_matrix_ingot'},
      "B": {"item": 'botania:bifrost_perm'},
      "E": {"item": 'mekanism:block_refined_glowstone'},
      "D": {"item": 'powah:spirited_crystal_block'},
      "C": {"item": 'thermal:electrum_block'},
      "F": {"item": 'minecraft:respawn_anchor'},
      "G": {"item": 'botania:mana_bomb'},
      "H": {type: "forge:nbt",item: 'botania:brew_flask',count: 1,nbt:'{brewKey:"botania:fire_resistance"}'},
      "I": {"item": 'minecraft:villager_spawn_egg'},
      "J": {type: "forge:nbt",item: 'botania:brew_flask',count: 1,nbt:'{brewKey:"botania:regen"}'},
      "K": {type: "forge:nbt",item: 'botania:brew_flask',count: 1,nbt:'{brewKey:"botania:absorption"}'}},
    "pattern": ["ABCCCBA","BBDEDBB","BBCECBB","CCFGFCC","BCHIJCB","BBCKCBB","ABCCCBA"],
    "result": {"item":'minecraft:totem_of_undying',"count":1},
    "show_notification": false,"tier": 3})

})