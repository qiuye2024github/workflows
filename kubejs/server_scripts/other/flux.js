ServerEvents.recipes(event => {
    event.remove({ output: 'fluxnetworks:flux_core' })
    event.shaped(
        Item.of('fluxnetworks:flux_core',4),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'fluxnetworks:flux_dust',
            B: 'enderio:vibrant_alloy_ingot',
            C: 'naturesaura:infused_iron',
            D: 'mekanism:teleportation_core'
        }
    )
})