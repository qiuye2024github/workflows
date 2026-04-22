ServerEvents.recipes(event => {
    event.remove({ output: 'functionalstorage:ender_drawer' })
    event.remove({ output: 'functionalstorage:framed_storage_controller' })
    event.shapeless(
        Item.of('functionalstorage:framed_storage_controller'),
        [
            'functionalstorage:storage_controller',
            'functionalstorage:framed_1'
        ]
    )
    event.remove({ output: 'functionalstorage:storage_controller' })
    event.shaped(
        Item.of('functionalstorage:storage_controller'),
        [
            'ABA',
            'CDC',
            'EBE'
        ],
        {
            A: 'minecraft:smooth_stone',
            B: '#forge:storage_blocks/quartz',
            C: '#functionalstorage:drawer',
            D: 'kubejs:machine_frame',
            E: '#forge:stone'
        }
    )
    event.shaped(
        Item.of('functionalstorage:puller_upgrade'),
        [
            'A',
        ],
        {
            A: 'functionalstorage:pusher_upgrade',
        }
    )
    event.shaped(
        Item.of('functionalstorage:pusher_upgrade'),
        [
            'A',
        ],
        {
            A: 'functionalstorage:puller_upgrade',
        }
    )
})