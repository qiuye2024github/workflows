LootJS.modifiers((event) => {

    //Awakened Draconium Ore Loot Table
    const DraFortune = LootEntry.of("draconicevolution:awakened_draconium_dust").applyOreBonus("minecraft:fortune").when((c) => c.matchMainHand(ItemFilter.hasEnchantment("minecraft:fortune")));
    const DraSilkTouch = LootEntry.of("kubejs:end_awakened_draconium_ore").when((c) => c.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")));
    const Dra = "draconicevolution:awakened_draconium_dust";
    event.addBlockLootModifier("kubejs:end_awakened_draconium_ore").removeLoot(Ingredient.all).addAlternativesLoot(DraFortune,DraSilkTouch,Dra);

    //Nether Star Ore Loot Table
    const StarFortune = LootEntry.of("kubejs:nether_star_dust").applyOreBonus("minecraft:fortune").when((c) => c.matchMainHand(ItemFilter.hasEnchantment("minecraft:fortune")));
    const StarSilkTouch = LootEntry.of("kubejs:nether_star_ore").when((c) => c.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")));
    const Star = "kubejs:nether_star_dust";
    event.addBlockLootModifier("kubejs:nether_star_ore").removeLoot(Ingredient.all).addAlternativesLoot(StarFortune,StarSilkTouch,Star);

    //Infinity Ore Loot Table
    const InfFortune = LootEntry.of("kubejs:infinity_pile").applyOreBonus("minecraft:fortune").when((c) => c.matchMainHand(ItemFilter.hasEnchantment("minecraft:fortune")));
    const InfSilkTouch = LootEntry.of("kubejs:deepslate_infinity_ore").when((c) => c.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")));
    const Inf = "kubejs:infinity_pile";
    event.addBlockLootModifier("kubejs:deepslate_infinity_ore").removeLoot(Ingredient.all).addAlternativesLoot(InfFortune,InfSilkTouch,Inf);

    event.addBlockLootModifier("cmr:empty_snowman_cooler").removeLoot(Ingredient.all).addAlternativesLoot("cmr:empty_snowman_cooler");

})