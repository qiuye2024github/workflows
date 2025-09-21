const tetraStrEtherium = new RegExp('(blade|knife|machete)/etherium');//正则表达式（判断主手nbt）

PlayerEvents.tick(event =>{
    let player = event.player;
    let mainHandItem = player.mainHandItem;
    if(player.mainHandItem.id =='enigmaticlegacy:etherium_sword'||tetraStrEtherium.test(mainHandItem.nbtString))
        {
            event.player.modifyAttribute('minecraft:generic.max_health','etherium_health',-0.15,'multiply_total');//减15%生命值
            let health = player.health;
            let maxHealth = player.maxHealth;
            if(health/maxHealth>0.6)
            {                
                player.setHealth(0.70*maxHealth);//锁定血量不高于70%
            }
        }
    else
    {
        event.player.removeAttribute('minecraft:generic.max_health','etherium_health');
        event.player.removeAttribute("minecraft:generic.attack_damage",'etherium_attack_damage');
    }
})
