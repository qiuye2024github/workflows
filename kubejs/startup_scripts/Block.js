StartupEvents.registry('block', event => {

    event.create('terrestrial_catalyst').displayName('Terrestrial Catalyst')
    .stoneSoundType().mapColor('terracotta_white').hardness(2.0).resistance(2.0).requiresTool(true).tagBlock('minecraft:mineable/pickaxe')

    event.create('sculk_metal_block').displayName('Sculk Metal Block')
    .soundType('netherite_block').mapColor('deepslate').hardness(5.0).resistance(5.0).requiresTool(true).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_diamond_tool')

    event.create('compressed_sculk').displayName('Compressed Sculk')
    .soundType('moss').mapColor('deepslate').hardness(2.0).resistance(2.0).requiresTool(false).tagBlock('minecraft:mineable/hoe')

    event.create('hyper_experience_block').displayName('Hyper Experience Block')
    .soundType('amethyst').mapColor('diamond').hardness(10.0).resistance(10.0).requiresTool(true).lightLevel(1.0).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_diamond_tool')

    event.create('compressed_amethyst_block').displayName('Compressed Amethyst Block')
    .soundType('amethyst').mapColor('color_purple').hardness(1.5).resistance(1.5).requiresTool(true).tagBlock('minecraft:mineable/pickaxe')

    event.create('chromatic_block').displayName('Chromatic Block').lightLevel(1.0)
    .soundType('amethyst').mapColor('color_purple').hardness(1.5).resistance(1.5).requiresTool(true).tagBlock('minecraft:mineable/pickaxe')

    event.create('blaze_rod_block').displayName('Blaze Rod Block')
    .soundType('stone').mapColor('gold').hardness(3.0).resistance(3.0).requiresTool(true).lightLevel(1.0).tagBlock('minecraft:mineable/pickaxe')

    event.create('end_awakened_draconium_ore').displayName('Awakened Draconium Ore')
    .soundType('stone').mapColor('sand').hardness(3.0).resistance(3.0).requiresTool(true).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_diamond_tool')

    event.create('nether_star_ore').displayName('Nether Star Ore')
    .soundType('stone').mapColor('nether').hardness(3.0).resistance(3.0).requiresTool(true).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_diamond_tool')

    event.create('stick_block').displayName('Stick block')
    .soundType('wood').mapColor('wood').hardness(1.0).resistance(1.0).requiresTool(false).tagBlock('minecraft:mineable/axe')

    event.create('flint_block').displayName('Flint block')
    .soundType('stone').mapColor('stone').hardness(2.0).resistance(2.0).requiresTool(true).tagBlock('minecraft:mineable/pickaxe')

    event.create('earth_flint_block').displayName('Earth Flint Block')
    .soundType('stone').mapColor('stone').hardness(4.0).resistance(4.0).requiresTool(true).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool')

    event.create('compressed_andesite').displayName('Compressed Andesite')
    .soundType('stone').mapColor('stone').hardness(2.0).resistance(2.0).requiresTool(true).tagBlock('minecraft:mineable/pickaxe')

    event.create('gaia_sand').displayName('Gaia Sand')
    .soundType('sand').mapColor('terracotta_magenta').hardness(1.0).resistance(1.0).requiresTool(true).tagBlock('minecraft:mineable/shovel').tagBlock('minecraft:needs_iron_tool')

    event.create('diamond_sand').displayName('Diamond Sand')
    .soundType('sand').mapColor('diamond').hardness(1.0).resistance(1.0).requiresTool(true).tagBlock('minecraft:mineable/shovel').tagBlock('minecraft:needs_iron_tool')

    event.create('sulfur_sand').displayName('Sulfur Sand')
    .soundType('sand').mapColor('color_yellow').hardness(1.0).resistance(1.0).requiresTool(false).tagBlock('minecraft:mineable/shovel')

    event.create('niter_sand').displayName('Niter Sand')
    .soundType('sand').mapColor('color_light_gray').hardness(1.0).resistance(1.0).requiresTool(false).tagBlock('minecraft:mineable/shovel')

    event.create('compressed_clay').displayName('Compressed Clay')
    .soundType('grass').mapColor('color_light_gray').hardness(2.0).resistance(2.0).requiresTool(false).tagBlock('minecraft:mineable/shovel')

    event.create('emerald_sand').displayName('Emerald Sand')
    .soundType('sand').mapColor('emerald').hardness(1.0).resistance(1.0).requiresTool(true).tagBlock('minecraft:mineable/shovel').tagBlock('minecraft:needs_iron_tool')

    event.create('deepslate_infinity_ore').displayName('Infinty Ore').lightLevel(1.0)
    .soundType('stone').mapColor('stone').hardness(10.0).resistance(10.0).requiresTool(true).tagBlock('minecraft:mineable/pickaxe').tagBlock('projecte:needs_diamond_tool')

    event.create('infinity_casing').displayName('Infinty Casing').lightLevel(1.0)
    .soundType('metal').mapColor('color_black').hardness(200.0).resistance(200.0).requiresTool(true).tagBlock('minecraft:mineable/pickaxe').tagBlock('create:casing')

    event.create('hardest_stone').displayName('Hardest Stone')
    .soundType('stone').mapColor('stone').hardness(1000.0).resistance(1000.0).requiresTool(true).tagBlock('minecraft:mineable/pickaxe')

    event.create('dense_redstone_block').displayName('Dense Redstone Block')
    .soundType('stone').mapColor('color_red').hardness(7.0).resistance(7.0).requiresTool(true).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool')

    event.create('polish_rose_quartz_block').displayName('Polish Rose Quartz Block')
    .soundType('amethyst').mapColor('color_pink').hardness(3.0).resistance(3.0).requiresTool(true).tagBlock('minecraft:mineable/pickaxe')

    event.create('obsidian_sand').displayName('Obsidian Sand')
    .soundType('sand').mapColor('color_black').hardness(3.0).resistance(3.0).requiresTool(true).tagBlock('minecraft:mineable/shovel')

    event.create('glowing_obsidian_sand').displayName('Glowging Obsidian Sand').lightLevel(1.0)
    .soundType('sand').mapColor('color_black').hardness(3.0).resistance(3.0).requiresTool(true).tagBlock('minecraft:mineable/shovel')

    event.create('dense_glowstone').displayName('Dense Glowstone')
    .soundType('glass').mapColor('color_yellow').lightLevel(1.0).hardness(1.5).resistance(1.5).requiresTool(false).tagBlock('minecraft:mineable/pickaxe')

    event.create('prismarine_crystal_block').displayName('Prismarine Crystal Block')
    .soundType('glass').mapColor('color_light_blue').lightLevel(1.0).hardness(1.0).resistance(1.0).requiresTool(false).tagBlock('minecraft:mineable/pickaxe')

    event.create('ender_pearl_block').displayName('Ender Pearl Block')
    .soundType('glass').mapColor('warped_nylium').hardness(5.0).resistance(5.0).requiresTool(true).tagBlock('minecraft:mineable/pickaxe')

    event.create('chorus_block').displayName('Crate of Chorus')
    .soundType('wood').mapColor('color_purple').hardness(1.0).resistance(1.0).requiresTool(false).tagBlock('minecraft:mineable/axe')

    event.create('cursed_pumpkin').displayName('Cursed Pumpkin')
    .soundType('wood').mapColor('color_green').hardness(1.0).resistance(1.0).requiresTool(false).tagBlock('minecraft:mineable/axe')
    

  })