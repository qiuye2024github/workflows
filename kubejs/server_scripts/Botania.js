ServerEvents.recipes(event => {

const orechidRecipes = [["minecraft:coal_ore", "botania:black_petal_block"],["minecraft:iron_ore", "botania:white_petal_block"],["minecraft:gold_ore", "botania:yellow_petal_block"],
    ["minecraft:diamond_ore", "botania:cyan_petal_block"],["create:zinc_ore", "botania:light_gray_petal_block"],["minecraft:copper_ore", "botania:orange_petal_block"],
    ["minecraft:emerald_ore", "botania:green_petal_block"],["minecraft:lapis_ore", "botania:blue_petal_block"],["minecraft:redstone_ore", "botania:red_petal_block"],
    ["ae2:quartz_block", "botania:light_blue_petal_block"]]
orechidRecipes.forEach(([output, input]) => {event.recipes.botania.orechid(output, input, 1)})


    event.recipes.botania.marimorphosis("minecraft:soul_sand", "minecraft:sand", 1, 1000)
    event.recipes.botania.marimorphosis('minecraft:end_stone', 'botania:yellow_petal_block', 1, 1000)
    event.recipes.botania.marimorphosis('minecraft:obsidian', 'botania:black_petal_block', 1, 1000)

    event.recipes.botania.pure_daisy("minecraft:dirt", "botania:brown_petal_block", 1)
    event.recipes.botania.pure_daisy("minecraft:clay", "botania:light_gray_petal_block", 1)

    event.recipes.botania.elven_trade(["kubejs:superior_dust"], ["projecte:low_covalence_dust","projecte:medium_covalence_dust","projecte:high_covalence_dust"])
    event.recipes.botania.elven_trade(["minecraft:wither_skeleton_skull"], ["minecraft:skeleton_skull"])
    event.recipes.botania.elven_trade(["minecraft:ancient_debris"], ["botania:brown_petal_block","botania:gray_petal_block"])

const alchemyCatalystRecipes = [["kubejs:water_petal", "botania:blue_double_flower", 400],["kubejs:fire_petal", "botania:orange_double_flower", 400],
    ["kubejs:air_petal", "botania:light_blue_double_flower", 400],["kubejs:earth_petal", "botania:green_double_flower", 400],["kubejs:mana_petal", "botania:purple_double_flower", 400],
    ["minecraft:bamboo", "minecraft:stick", 200],["minecraft:brown_mushroom", "minecraft:red_mushroom", 100],["minecraft:red_mushroom", "minecraft:brown_mushroom", 100],
    ["4x minecraft:pointed_dripstone", "minecraft:dripstone_block", 100]]
alchemyCatalystRecipes.forEach(([output, input, mana]) => {event.recipes.botania.mana_infusion(output, input, mana, "botania:alchemy_catalyst")})

const terrestrialCatalystRecipes = [["botania:blacker_lotus", "kubejs:superior_dust", 10000],["minecraft:ice", "minecraft:snow_block", 200],
    ["projecte:transmutation_tablet", "projecte:transmutation_table", 100000],["minecraft:amethyst_shard", "minecraft:quartz", 100],["thermal:sulfur_dust", "botania:yellow_petal", 50],
    ["kubejs:gear_press", "#ae2:inscriber_presses", 5000],["minecraft:brown_mushroom", "botania:brown_petal", 100],["minecraft:red_mushroom", "botania:red_petal", 100],
    ["botania:living_root", "botania:redstone_root", 100],["minecraft:dripstone_block", "minecraft:calcite", 100]]
terrestrialCatalystRecipes.forEach(([output, input, mana]) => {event.recipes.botania.mana_infusion(output, input, mana, "kubejs:terrestrial_catalyst")})

const conjurationCatalystRecipes = [["2x minecraft:dragon_breath", "minecraft:dragon_breath", 50]]
conjurationCatalystRecipes.forEach(([output, input, mana]) => {event.recipes.botania.mana_infusion(output, input, mana, "botania:conjuration_catalyst")})

    event.recipes.botania.runic_altar(Item.of('projecte:philosophers_stone', 1),['minecraft:redstone_block','minecraft:redstone_block','minecraft:glowstone','minecraft:glowstone',
      'botania:manasteel_ingot','botania:manasteel_ingot','botania:manasteel_ingot','botania:manasteel_ingot','botania:terrasteel_nugget','botania:terrasteel_nugget',
      'botania:terrasteel_nugget','botania:terrasteel_nugget'],5000)

    event.recipes.botania.terra_plate('kubejs:blaze_rod_block', ["kubejs:fire_oil_bucket","minecraft:campfire","botania:rune_fire","botania:cocoon"], 500000)
    event.recipes.botania.terra_plate("projecte:dark_matter", ["kubejs:superior_dust","kubejs:superior_dust","kubejs:superior_dust","projecte:aeternalis_fuel",
      "projecte:aeternalis_fuel","projecte:aeternalis_fuel"], 50000)

  })
