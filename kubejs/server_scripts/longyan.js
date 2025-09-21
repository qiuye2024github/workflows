PlayerEvents.tick(event =>{
    let player = event.player;
    let health = player.health;
    let maxHealth = player.maxHealth;
    let head = player.headArmorItem;
    let chestplate = player.chestArmorItem;
    let leggings = player.legsArmorItem;
    let boots = player.feetArmorItem;
    let mainHandItem = player.mainHandItem;//获取玩家生命值、装备栏和主手物品等
    let attacker = player.lastAttacker;//获取攻击玩家的对象
    if(head.id =='iceandfire:dragonsteel_fire_helmet'&&chestplate.id =='iceandfire:dragonsteel_fire_chestplate'&&leggings.id =='iceandfire:dragonsteel_fire_leggings'&&boots.id =='iceandfire:dragonsteel_fire_boots')
        {
            player.potionEffects.add('minecraft:resistance',30,2);//穿龙炎钢甲直接给抗性3、力量3、速度2、跳跃2、水下呼吸3
            player.potionEffects.add('minecraft:strength',60,2); 
            player.potionEffects.add('minecraft:speed',60,1);
            player.potionEffects.add('minecraft:jump_boost',60,1);
            player.potionEffects.add('minecraft:water_breathing',60,2);
        }
        if(attacker != null&&(attacker.isLiving()))
        {
            attacker.potionEffects.add('minecraft:slowness',60,2);//穿龙炎钢套时，给予攻击者缓慢3、挖掘疲劳3
            attacker.potionEffects.add('minecraft:mining_fatigue',60,2);
        }
    

})