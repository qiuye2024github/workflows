 ItemEvents.modification(event => {
    
  event.modify(['botania:lime_petal',
                'botania:green_petal', 
                'botania:cyan_petal', 
                'botania:light_blue_petal', 
                'botania:blue_petal', 
                'botania:purple_petal', 
                'botania:magenta_petal', 
                'botania:pink_petal', 
                'botania:white_petal', 
                'botania:light_gray_petal', 
                'botania:gray_petal', 
                'botania:black_petal', 
                'botania:brown_petal', 
                'botania:red_petal', 
                'botania:orange_petal', 
                'botania:yellow_petal'], 
                item => {item.burnTime = 200})

})