ServerEvents.recipes(event => {
  
    event.custom({"type": "avaritia:shaped_table","category": "misc","key": {
      "a": {"item": "mob_grinding_utils:mob_swab"},
      "b": {"item": "minecraft:wheat_seeds"},
      "c": {"item": "kubejs:hyper_experience_block"},
      "d": {"item": "minecraft:chicken_spawn_egg"},},
    "pattern": [" b ","cac"," d "],"result": {"item": "minecraft:warden_spawn_egg"},"show_notification": false,"tier": 1})

    event.custom({"type": "avaritia:shaped_table","category": "misc","key": {
      "a": {"item": "ae2:flawed_budding_quartz"},
      "b": {"item": "avaritia:crystal_matrix"},
      "c": {"item": "minecraft:budding_amethyst"}},
    "pattern": ["aba","bcb","aba"],"result": {"item": "ae2:flawless_budding_quartz"},"show_notification": false,"tier": 1})

})