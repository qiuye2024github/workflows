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
    //  如果在诡异维度
    if (event.level.dimension == "macabre:the_pit")
    // 目标方块为活土 物品是铁块 召唤空心人 消耗材料 
    summonBoss('macabre:living_dirt', 'minecraft:iron_block', 'macabre:the_hollow_man', true)
    // 目标方块为活土 物品是金块 召唤摩斐戈 消耗材料 
    summonBoss('macabre:living_dirt', 'minecraft:gold_block', 'macabre:morphegor', true)
    // 目标方块为活土 物品是石英块 召唤加尔加魔 消耗材料 
    summonBoss('macabre:living_dirt', 'minecraft:quartz_block', 'macabre:gargamaw', true)
    // 目标方块为活土 物品是钻石块 召唤瓦拉蒙 消耗材料 
    summonBoss('macabre:living_dirt', 'minecraft:diamond_block', 'macabre:valamon', true)
    // 目标方块为活土 物品是绿宝石块 召唤戈莫里 消耗材料 
    summonBoss('macabre:living_dirt', 'minecraft:emerald_block', 'macabre:gomoria', true)
    // 目标方块为活土 物品是下界合金块 召唤巴尔诅咒 消耗材料 
    summonBoss('macabre:living_dirt', 'minecraft:netherite_block', 'macabre:baal', true)
})

