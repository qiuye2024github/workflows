// priority: 0
console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
    // === 删除配方 ===
    event.remove({ output: 'enigmaticlegacy:cursed_scroll' })      // 千咒卷轴
    event.remove({ output: 'enigmaticlegacy:desolation_ring' })    // 荒芜之戒
    event.remove({ output: 'enigmaticlegacy:eldritch_pan' })       // 饕餮之锅
    event.remove({ output: 'enigmaticlegacy:cosmic_heart' })       // 寰宇之心
    event.remove({ output: 'enigmaticaddons:cube' })     // 非欧立方（修正ID）

    // === 新增配方 ===
    
    // 1. 千咒卷轴配方
    event.shaped('enigmaticlegacy:cursed_scroll', [
        'DFD',
        'BAC',
        'EGE'
    ], {
        A: 'enigmaticlegacy:darkest_scroll',      // 至暗卷轴
        B: 'minecraft:netherite_ingot',           // 下界合金锭
        C: 'enigmaticlegacy:twisted_heart',       // 扭曲之心
        D: 'minecraft:phantom_membrane',          // 幻翼膜
        E: 'minecraft:crying_obsidian',           // 哭泣的黑曜石
        F: 'enigmaticlegacy:evil_essence',        // 邪恶精髓
        G: 'minecraft:wither_skeleton_skull'      // 凋灵骷髅头
    })

    // 2. 荒芜之戒配方
    event.shaped('enigmaticlegacy:desolation_ring', [
        'DCD',
        'BAB',
        'EFE'
    ], {
        A: 'alexscaves:pure_darkness',            // 纯粹黑暗
        B: 'alexsmobs:ghostly_ingot',             // 幽冥钢锭
        C: 'enigmaticlegacy:abyssal_heart',       // 深渊之心
        D: 'enigmaticlegacy:cosmic_heart',        // 寰宇之心
        E: 'enigmaticlegacy:evil_essence',        // 邪恶精髓
        F: 'enigmaticlegacy:evil_ingot'           // 极恶锭
    })

    // 3. 饕餮之锅配方
    event.shaped('enigmaticlegacy:eldritch_pan', [
        'EEE',
        'EAE',
        'EFE'
    ], {
        A: 'enigmaticlegacy:abyssal_heart',       // 深渊之心
        E: 'enigmaticlegacy:cosmic_heart',        // 寰宇之心
        F: 'twilightforest:hydra_chop'            // 九头蛇肉排
    })

    // 5. 寰宇之心配方
    event.shaped('enigmaticlegacy:cosmic_heart', [
        'DBD',
        'CAC',
        'DBD'
    ], {
        A: 'enigmaticaddons:pure_heart',          // 纯净之心
        B: 'celestial_core:pure_nether_star',     // 纯净之星
        C: 'minecraft:dragon_breath',             // 龙息
        D: 'enigmaticlegacy:astral_dust'          // 星尘
    })
    // 6. 非欧立方配方
    event.shaped('enigmaticaddons:cube', [
        'AAA',
        'AAA',
        'AAA'
    ], {
        A: 'enigmaticaddons:cube',          // 非欧立方
    })
})