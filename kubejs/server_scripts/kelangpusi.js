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
    
    //  如果在主世界
    if (event.level.dimension == "minecraft:overworld")
    // 目标方块为石英块 物品是绿宝石块 召唤克朗普斯 消耗材料 
    summonBoss('minecraft:pumpkin', 'minecraft:emerald_block', 'born_in_chaos_v1:krampus', true)
})