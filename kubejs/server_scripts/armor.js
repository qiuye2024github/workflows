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
    if(head.id =='minecraft:golden_helmet'&&chestplate.id =='minecraft:golden_chestplate'&&leggings.id =='minecraft:golden_leggings'&&boots.id =='minecraft:golden_boots')
    {
        player.potionEffects.add('minecraft:luck',15,0);//穿着全套金甲时幸运加1
    }
    if(head.id == 'cataclysm:ignitium_helmet'&&(chestplate.id == 'cataclysm:ignitium_chestplate'||chestplate.id == 'cataclysm:ignitium_elytra_chestplate')&&leggings.id == 'cataclysm:ignitium_leggings'&&boots.id == "cataclysm:ignitium_boots")
    {
        player.potionEffects.add('minecraft:strength',60,1);//穿炎魔套给力量2、抗性提升3、急迫3、跳跃提升2、水下呼吸3
        player.potionEffects.add('minecraft:resistance',30,2);
        player.potionEffects.add('minecraft:haste',60,2);
        player.potionEffects.add('minecraft:jump_boost',60,1);
        player.potionEffects.add('minecraft:water_breathing',60,2);
    }
    if(head.id =='cataclysm:cursium_helmet'&&chestplate.id =='cataclysm:cursium_chestplate'&&leggings.id =='cataclysm:cursium_leggings'&&boots.id =='cataclysm:cursium_boots')
        {
            player.potionEffects.add('minecraft:resistance',30,1);//穿咒魂套给抗性提升2、力量3、速度3、吸收2、水下呼吸3
            player.potionEffects.add('minecraft:strength',60,2)
            player.potionEffects.add('minecraft:speed',60,2);
            player.potionEffects.add('minecraft:absorption',60,1);
            player.potionEffects.add('minecraft:water_breathing',60,2);
        }
    if(head.id =='enigmaticlegacy:etherium_helmet'&&chestplate.id =='enigmaticlegacy:etherium_chestplate'&&leggings.id =='enigmaticlegacy:etherium_leggings'&&boots.id =='enigmaticlegacy:etherium_boots')
        {
            player.potionEffects.add('minecraft:resistance',30,4); //穿以太套给抗性提升5、生命恢复2、吸收3、水下呼吸3
            player.potionEffects.add('minecraft:regeneration',20,1);
            player.potionEffects.add('minecraft:absorption',60,2);
            player.potionEffects.add('minecraft:water_breathing',60,2);
        }
    if(head.id =='eeeabsmobs:ghost_warrior_helmet'&&chestplate.id =='eeeabsmobs:ghost_warrior_chestplate'&&leggings.id =='eeeabsmobs:ghost_warrior_leggings'&&boots.id =='eeeabsmobs:ghost_warrior_boots')
        {
            player.potionEffects.add('minecraft:strength',60,4);//穿幽冥武士套给力量5、抗性提升1、急迫3、速度1、水下呼吸3
            player.potionEffects.add('minecraft:resistance',30,0);
            player.potionEffects.add('minecraft:haste',60,2);
            player.potionEffects.add('minecraft:speed',60,0);
            player.potionEffects.add('minecraft:water_breathing',60,2);
        } 
    if(head.id =='born_in_chaos_v1:nightmare_mantleofthe_night_helmet'&&chestplate.id =='born_in_chaos_v1:nightmare_mantleofthe_night_chestplate'&&leggings.id =='born_in_chaos_v1:nightmare_mantleofthe_night_leggings'&&boots.id =='born_in_chaos_v1:nightmare_mantleofthe_night_boots')
        {
            player.potionEffects.add('minecraft:strength',60,0);//穿梦魇套给力量1
        } 
    if(head.id =='gobber2:gobber2_helmet_dragon'&&chestplate.id =='gobber2:gobber2_chestplate_dragon'&&leggings.id =='gobber2:gobber2_leggings_dragon'&&boots.id =='gobber2:gobber2_boots_dragon')
        {
            player.potionEffects.add('enigmaticaddons:pure_resistance',60,1)//穿龙之套装给纯化抗性3、力量3、急迫1、吸收3、水下呼吸3
            player.potionEffects.add('minecraft:strength',60,2); 
            player.potionEffects.add('minecraft:haste',60,1);
            player.potionEffects.add('minecraft:absorption',60,0);
            player.potionEffects.add('minecraft:water_breathing',60,2);
        }
    if(head.id =='gobber2:gobber2_helmet'&&chestplate.id =='gobber2:gobber2_chestplate'&&leggings.id =='gobber2:gobber2_leggings'&&boots.id =='gobber2:gobber2_boots')
        {
            player.potionEffects.add('minecraft:strength',60,0); //穿戈伯套装给力量1
        }
    if(head.id =='gobber2:gobber2_helmet_nether'&&chestplate.id =='gobber2:gobber2_chestplate_nether'&&leggings.id =='gobber2:gobber2_leggings_nether'&&boots.id =='gobber2:gobber2_boots_nether')
        {
            player.potionEffects.add('minecraft:strength',60,0) //穿下界戈伯套装给力量1、抗火
            player.potionEffects.add('minecraft:fire_resistance',60);
        }       
    if(head.id =='gobber2:gobber2_helmet_end'&&chestplate.id =='gobber2:gobber2_chestplate_end'&&leggings.id =='gobber2:gobber2_leggings_end'&&boots.id =='gobber2:gobber2_boots_end')
        {
            player.potionEffects.add('enigmaticaddons:pure_resistance',60,0)//穿末影戈伯套给纯化抗性1、力量1
            player.potionEffects.add('minecraft:strength',60,0); 
        }
    if(head.id =='iceandfire:dragonsteel_ice_helmet'&&chestplate.id =='iceandfire:dragonsteel_ice_chestplate'&&leggings.id =='iceandfire:dragonsteel_ice_leggings'&&boots.id =='iceandfire:dragonsteel_ice_boots')
        {
            player.potionEffects.add('minecraft:regeneration',20,3);//穿龙霜钢甲直接给生命恢复4、力量2、防火2、急迫2、水下呼吸3
            player.potionEffects.add('minecraft:strength',60,1); 
            player.potionEffects.add('minecraft:fire_resistance',60,1);
            player.potionEffects.add('minecraft:haste',60,2);
            player.potionEffects.add('minecraft:water_breathing',60,2);
        }
        if(attacker != null&&(attacker.isLiving()))
        {
            attacker.potionEffects.add('minecraft:slowness',60,2);//穿龙霜钢套时，给予攻击者缓慢3、挖掘疲劳3
            attacker.potionEffects.add('minecraft:mining_fatigue',60,2);
        }
    if(head.id =='iceandfire:dragonsteel_lightning_helmet'&&chestplate.id =='iceandfire:dragonsteel_lightning_chestplate'&&leggings.id =='iceandfire:dragonsteel_lightning_leggings'&&boots.id =='iceandfire:dragonsteel_lightning_boots')
        {
            player.potionEffects.add('minecraft:regeneration',20,1);//穿龙霆钢甲直接给生命恢复2、力量3、防火2、急迫3、水下呼吸3
            player.potionEffects.add('minecraft:strength',60,2); 
            player.potionEffects.add('minecraft:fire_resistance',60,1);
            player.potionEffects.add('minecraft:haste',60,2);
            player.potionEffects.add('minecraft:water_breathing',60,2);
        }
        if(attacker != null&&(attacker.isLiving()))
        {
            attacker.potionEffects.add('minecraft:slowness',60,2);//穿龙霆钢套时，给予攻击者缓慢3、挖掘疲劳3
            attacker.potionEffects.add('minecraft:mining_fatigue',60,2);
        }
    

})