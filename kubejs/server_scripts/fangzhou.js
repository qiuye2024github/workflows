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
    //  如果在主世界
    if (event.level.dimension == "minecraft:overworld")
    // 目标方块为深板岩 物品是冰 召唤霜星 消耗材料 
    summonBoss('minecraft:deepslate', 'minecraft:ice', 'torchesbecomesunlight:frost_nova', true)
    // 目标方块为深板岩 物品是钻石块 召唤爱国者 消耗材料 
    summonBoss('minecraft:deepslate', 'minecraft:diamond_block', 'torchesbecomesunlight:patriot', true)
    // 目标方块为深板岩 物品是绿宝石块 召唤皇帝的利刃 消耗材料 
    summonBoss('minecraft:deepslate', 'minecraft:emerald_block', 'torchesbecomesunlight:pursuer', true)
    // 目标方块为深板岩 物品是下界合金块 召唤博卓卡斯替，圣卫铳骑 消耗材料 
    summonBoss('minecraft:deepslate', 'minecraft:netherite_block', 'torchesbecomesunlight:gun_knight_patriot', true)
    // 目标方块为深板岩 物品是金块 召唤迷迭香消耗材料 
    summonBoss('minecraft:deepslate', 'minecraft:gold_block', 'torchesbecomesunlight:rosmontis', true)
})

