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
    // 目标方块为冰 物品是河豚 召唤鮟鱇鱼 消耗材料 
    summonBoss('minecraft:ice', 'minecraft:pufferfish', 'aquamirae:anglerfish', true)
    // 目标方块为冰 物品是棘鱼 召唤鳗鱼 消耗材料 
    summonBoss('minecraft:ice', 'aquamirae:spinefish', 'aquamirae:eel', true)
    // 目标方块为冰 物品是珊瑚长矛 召唤迷阵之母消耗材料 
    summonBoss('minecraft:ice', 'aquamirae:coral_lance', 'aquamirae:maze_mother', true)
})

