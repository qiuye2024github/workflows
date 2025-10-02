StartupEvents.registry('item', event => {
    
    event.create('mana_petal').glow(true).displayName('Mana Flower')
    event.create('water_petal').glow(true).displayName('Water Flower')
    event.create('fire_petal').glow(true).displayName('Fire Flower')
    event.create('air_petal').glow(true).displayName('Air Flower')
    event.create('earth_petal').glow(true).displayName('Earth Flower')
    event.create('impure_brass_ingot').displayName('Impure Brass Ingot')
    event.create('empty_rune').displayName('Blank Rune')
    event.create('empty_mana_rune').displayName('Blank Rune')
    event.create('empty_water_rune').displayName('Blank Rune')
    event.create('empty_air_rune').displayName('Blank Rune')
    event.create('empty_fire_rune').displayName('Blank Rune')
    event.create('empty_earth_rune').displayName('Blank Rune')
    event.create('superior_dust').displayName('Superior Covalent Dust').rarity("RARE")
    event.create('supreme_dust').displayName('Supreme Covalent Dust').rarity("RARE")
    event.create('gear_press').displayName('Gear Press')
    event.create('unstable_dust').displayName('Unstable Dust')
    event.create('unstable_dragon_dust').displayName('Strange Dust')
    event.create('unstable_dragon_pebble').displayName('Strange Pebble')
    event.create('unstable_dust_hot').displayName('Heated Unstable Dust')
    event.create('unstable_solar_infused_dust').displayName('Stabilized Dust')
    event.create('draconium_crystal').displayName('Draconium Crystal')
    event.create('draconium_clump').displayName('Draconium Clump')
    event.create('draconium_dust_dirty').displayName('Dirty Draconium Dust')
    event.create('draconium_shard').displayName('Draconium Shard')
    event.create('awakened_draconium_clump').displayName('Awakened Draconium Clump')
    event.create('awakened_draconium_crystal').displayName('Awakened Draconium Crystal')
    event.create('awakened_draconium_dust_dirty').displayName('Awakened Dirty Draconium Dust')
    event.create('awakened_draconium_shard').displayName('Awakened Draconium Shard')
    event.create('nether_star_dust').displayName('Nether Star Dust')
    event.create('infinity_catalyst').displayName('Infinity Catalyst').maxStackSize(16).rarity("EPIC")
    event.create('infinity_pile').displayName('Infinity Pile').rarity("RARE")
    event.create('antimatter').displayName('Antimatter Core').maxStackSize(1).rarity("RARE")
    event.create('experience').displayName('Hyper Experience Core').maxStackSize(1).rarity("RARE")
    event.create('chaos').displayName('Chaos Core').maxStackSize(1).rarity("RARE")
    event.create('gaia').displayName('Gaia Core').maxStackSize(1).rarity("RARE")
    event.create('sculk_ingot').displayName('Sculk Ingot')
    event.create('capacitor_ender').displayName('Ender Capacitor')
    event.create('time_token').displayName('Time Token')
    event.create('advance_time_token').displayName('Advance Time Token').rarity("UNCOMMON")
    event.create('ultimate_time_token').displayName('Ultimate Time Token').rarity("RARE")
    event.create('creative_time_token').displayName('Creative Time Token').rarity('EPIC')
    event.create('chromatic_compound').displayName('Chromatic Compound')
    event.create('incomplete_rough_star').displayName('Incomplete Rough Star')
    event.create('rough_star').displayName('Rough Star')
    event.create('cell_component_creative').displayName('Creative ME Storage Component').maxStackSize(1).rarity("EPIC")
    event.create('storage_core').displayName('Storage Core').maxStackSize(1).rarity("EPIC")
    event.create('corium').displayName('Corium Shard').maxStackSize(8).rarity("UNCOMMON")
    event.create('bedrock_dust').displayName('Bedrock Dust').rarity("UNCOMMON")
    event.create('bedrockium').displayName('Bedrockium Ingot').rarity("RARE")
    event.create('ultimate_storage_component').displayName('Ultimate Storage Component').rarity("RARE")
    event.create('ultimate_spatial_component').displayName('Ultimate Spatial Component').rarity("RARE")
    event.create('compressed_draconium_core').displayName('Compressed Draconium Core').rarity("RARE").glow(true)
    event.create('compressed_wyvern_core').displayName('Compressed Wyvern Core').rarity("RARE").glow(true)
    event.create('compressed_awakened_core').displayName('Compressed Draconic Core').rarity("RARE").glow(true)
    event.create('compressed_chaotic_core').displayName('Compressed Chaotic Core').rarity("RARE").glow(true)

    var moduleDefs = [
      { type: 'apple',  max: 6 },
      { type: 'thread', max: 6 },
      { type: 'eff',    max: 6 },
      { type: 'proc',   max: 6 },
      { type: 'speed',  max: 6 },
      { type: 'heal',   max: 6 },
      { type: 'range',  max: 12 }]
    moduleDefs.forEach(function(def) {for (var tier = 1; tier <= def.max; tier++) {
        var id = `t${tier}${def.type}`
        var pretty = def.type.charAt(0).toUpperCase() + def.type.slice(1)
        var name = `Tier ${tier} ${pretty} Module`
        event.create(id).displayName(name)}})
  
  })