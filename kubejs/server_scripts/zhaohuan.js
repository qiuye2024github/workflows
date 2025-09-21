// 修复副手末影之眼可以激活传送门Bug
BlockEvents.rightClicked(event => {
    const { player, block } = event

    if (player.offHandItem == 'minecraft:ender_eye' && block == 'minecraft:end_portal_frame') {
        player.statusMessage = [Text.white('这个眼睛不想被使用')]
        event.cancel()
    }
})

// 修复副手末影之眼可以搜索传送门Bug
ItemEvents.rightClicked('minecraft:ender_eye', event => {
    const { player } = event
    player.statusMessage = [Text.white('对不起,我不明白你的指示')]
    event.cancel()
})

BlockEvents.rightClicked((event) => {
    const { block, player, hand, item } = event
    const { x, y, z } = block.pos

    /**
     * @param {string} blockid 方块
     * @param {string} itemid 手中物品
     * @param {string} entityid 召唤实体的名字
     * @param {boolean} isChangeCount 是否改变物品数量
     */
    function summonBoss(blockid, itemid, entityid, isChangeCount) {
        if (block.id == blockid && item.id == itemid) {
            let entity = block.createEntity(entityid)
            entity.setPosition(x, y, z)
            entity.spawn()
            if (isChangeCount) player.mainHandItem.count--
        }
    }
    // 判断是否为主手 不是主手就退出
    if (hand != 'MAIN_HAND') return
    //  如果在暮色 目标方块为风化死岩 物品是守卫者核心 召唤终焉之主 消耗材料
    if (event.level.dimension == "twilightforest:twilight_forest")
    summonBoss('twilightforest:weathered_deadrock', 'eeeabsmobs:guardian_core', 'eeeabsmobs:immortal', true)
    //  如果在主世界 目标方块为辐射石 物品是铀棒 召唤核能苦力怕 消耗材料
    if (event.level.dimension == "minecraft:overworld")
        summonBoss('alexscaves:radrock', 'alexscaves:uranium_rod', 'alexscaves:nucleeper', true)
    // 目标方块为苔藓块 物品是紫水晶块 召唤紫水晶巨蟹 消耗材料
    summonBoss('minecraft:moss_block', 'minecraft:amethyst_block', 'cataclysm:amethyst_crab', true)
    // 目标方块为草方块 物品是黄玉块 召唤刚玉守护者 消耗材料 
    summonBoss('minecraft:grass_block', 'terramity:topaz_block', 'corundumguardian:corundum_guardian', true)
    // 目标方块为烈焰祭坛 物品是烈焰棒 召唤炽燃狂魂 消耗材料
    summonBoss('cataclysm:altar_of_fire', 'minecraft:blaze_rod', 'cataclysm:ignited_berserker', true)
    // 目标方块为淤泥 物品是珍珠 召唤碎船兽 消耗材料
    summonBoss('alexscaves:muck', 'alexscaves:pearl', 'alexscaves:hullbreaker', true)
    // 目标方块为泥胚 物品是黑暗布条 召唤遗弃者2 消耗材料
    summonBoss('minecraft:packed_mud', 'alexscaves:dark_tatters', 'alexscaves:forsaken', true)
    // 目标方块为深板岩 物品是石英块 召唤光辉守护者 消耗材料
    summonBoss('minecraft:deepslate', 'minecraft:quartz_block', 'faded_conquest_2:radiance_guardian', true)
    // 目标方块为强化深板岩 物品是石英块 召唤灾难容器 消耗材料
    summonBoss('minecraft:reinforced_deepslate', 'minecraft:quartz_block', 'faded_conquest_2:vessel_shield', true)
    //  如果在末地 目标方块为末地石 物品是紫颂果 召唤末影之王 消耗材料
    if (event.level.dimension == "minecraft:the_end")
        summonBoss('minecraft:end_stone', 'minecraft:netherite_block', 'animatedmobsmod:ender_king', true)
})

