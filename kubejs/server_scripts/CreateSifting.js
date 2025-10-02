ServerEvents.recipes(event => {

  const siftingRecipes = [
      
      {mesh: 'createsifter:advanced_brass_mesh',
      input: 'minecraft:end_stone',
      results: [{ item: 'minecraft:chorus_flower', chance: 0.05 },
                { item: 'minecraft:shulker_shell', chance: 0.15 }]},

      {mesh: 'createsifter:advanced_brass_mesh',
      input: 'minecraft:sculk',
      results: [{ item: 'minecraft:echo_shard', chance: 0.1 },
                { item: 'minecraft:sculk_catalyst', chance: 0.005 },
                { item: 'minecraft:sculk_shrieker', chance: 0.005 },
                { item: 'minecraft:disc_fragment_5', chance: 0.01 },
                { item: 'minecraft:sculk_sensor', chance: 0.005 }]},

      {mesh: 'createsifter:advanced_brass_mesh',
      input: 'kubejs:gaia_sand',
      results: [{ item: 'botania:life_essence', chance: 0.005 }]},

      {mesh: 'createsifter:advanced_brass_mesh',
      input: 'minecraft:sand',
      results: [{ item: 'minecraft:blaze_powder', chance: 0.3 }]},

      {mesh: 'createsifter:advanced_brass_mesh',
      input: 'minecraft:soul_sand',
      results: [{ item: 'minecraft:ghast_tear', chance: 0.3 }]},

      {mesh: 'createsifter:advanced_brass_mesh',
      input: 'botania:black_petal_block',
      results: [{ item: 'minecraft:coal', chance: 1, count: 2 },
                { item: 'minecraft:coal', chance: 0.5 }]}

      ];

  siftingRecipes.forEach(recipe => {event.custom({type: "createsifter:sifting",ingredients: [{ item: recipe.mesh },{ item: recipe.input }],results: recipe.results.map(result => {
        const formatted = {item: result.item,chance: result.chance};if (result.count) formatted.count = result.count;return formatted;}),processingTime: 500});});

})