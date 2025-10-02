ServerEvents.recipes(event => {

    event.recipes.createSequencedAssembly(['kubejs:empty_rune'],'botania:livingrock',  
   [event.recipes.createPressing('botania:livingrock','botania:livingrock'),
    event.recipes.createCutting('botania:livingrock', 'botania:livingrock').processingTime(50)])
    .transitionalItem('botania:livingrock').loops(1)

    event.recipes.createSequencedAssembly(['kubejs:rough_star'],'ifeu:empty_nether_star',  
   [event.recipes.createFilling('kubejs:incomplete_rough_star', ['kubejs:incomplete_rough_star', Fluid.of('kubejs:destabilized_star', 1000)]),
    event.recipes.createPressing('kubejs:incomplete_rough_star','kubejs:incomplete_rough_star')])
    .transitionalItem('kubejs:incomplete_rough_star').loops(1)

   function makeRune(type) {event.recipes.createSequencedAssembly([`botania:rune_${type}`],`kubejs:empty_rune`,
           [event.recipes.createDeploying(`kubejs:empty_${type}_rune`, [`kubejs:empty_${type}_rune`, `kubejs:${type}_petal`]),
            event.recipes.createPressing(`kubejs:empty_${type}_rune`, `kubejs:empty_${type}_rune`),
            event.recipes.createDeploying(`kubejs:empty_${type}_rune`, [`kubejs:empty_${type}_rune`, '#ae2:knife']),
            event.recipes.createDeploying(`kubejs:empty_${type}_rune`, [`kubejs:empty_${type}_rune`, 'botania:mana_powder']),
            event.recipes.createFilling(`kubejs:empty_${type}_rune`, [`kubejs:empty_${type}_rune`, Fluid.of(`kubejs:${type}_oil`, 1000)]),
            event.recipes.createDeploying(`kubejs:empty_${type}_rune`, [`kubejs:empty_${type}_rune`, 'botania:mana_powder']),
            event.recipes.createPressing(`kubejs:empty_${type}_rune`, `kubejs:empty_${type}_rune`)]).transitionalItem(`kubejs:empty_${type}_rune`).loops(1)}
   const runes = ['water', 'fire', 'air', 'earth', 'mana']; runes.forEach(makeRune)

    function makeBlazeCake(output, base, TrsItem, steps) 
    {event.recipes.createSequencedAssembly([output],base,steps.map(item => event.recipes.createDeploying( TrsItem, [ TrsItem, item]))).transitionalItem(TrsItem).loops(100)}
    makeBlazeCake('create:creative_blaze_cake','avaritia:enhancement_core', 'create:blaze_cake_base',
      ['avaritia:neutron_nugget','create:blaze_cake','cmr:frozen_cake','create:blaze_cake','cmr:frozen_cake','avaritia:infinity_nugget'])

  })