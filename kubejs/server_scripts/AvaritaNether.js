ServerEvents.recipes(event => {
  
    event.custom({"type": "avaritia:shaped_table","category": "misc","key": {
      "a": {"item": "minecraft:netherrack"},
      "b": {"item": "minecraft:diamond_block"},
      "c": {"item": "minecraft:nether_wart_block"}},
    "pattern": ["aabaa","abcba","bcbcb","acbca","aabaa"],
    "result": {"item": "minecraft:netherite_upgrade_smithing_template"},
    "show_notification": false,"tier": 2})

    event.custom({"type": "avaritia:shaped_table","category": "misc","key": {
      "a": {"item": "minecraft:coal_block"},
      "b": {"item": "avaritia:neutron_ingot"}},
    "pattern": ["     "," aaa "," aba "," aaa ","     "],
    "result": {"item": "avaritia:refined_coal_block"},
    "show_notification": false,"tier": 2})

})