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
    
    //  如果在冒险领域
    if (event.level.dimension == "minecraft:overworld")
    // 目标方块为草方块 物品是金块 召唤蘑菇王 消耗材料 
    summonBoss('minecraft:grass_block', 'minecraft:gold_block', 'bloxysstructures:mushroom_king', true)
    // 目标方块为草方块 物品是钻石块 召唤九头蛇 消耗材料 
    summonBoss('minecraft:grass_block', 'minecraft:diamond_block', 'bloxysstructures:inferno_hydra', true)
    // 目标方块为草方块 物品是下界合金块 召唤黑暗王子 消耗材料 
    summonBoss('minecraft:grass_block', 'minecraft:netherite_block', 'bloxysstructures:prince_of_darkness', true)
    // 目标方块为草方块 物品是绿宝石块 召唤布洛克西 消耗材料 
    summonBoss('minecraft:grass_block', 'minecraft:emerald_block', 'bloxysstructures:bloxy', true)

})