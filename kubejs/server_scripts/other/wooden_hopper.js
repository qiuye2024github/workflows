ServerEvents.recipes(event => {
    event.shaped(
        Item.of('woodenhopper:wooden_hopper'),
        [
            'ABA',
            'ABA',
            ' A '
        ],
        {
            A: '#minecraft:planks',
            B: '#minecraft:logs'
        }
    )
})