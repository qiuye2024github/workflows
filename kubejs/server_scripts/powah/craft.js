ServerEvents.recipes(event => {
    event.remove({ id: 'powah:crafting/dielectric_rod' })
    event.shaped(
        Item.of('powah:dielectric_rod', 6),
        [
            'ABA',
            'ACA',
            'ABA'
        ],
        {
            A: 'powah:dielectric_paste',
            B: 'mekanism:hdpe_rod',
            C: '#forge:wires/steel'
        }
    )
    event.remove({ id: 'powah:crafting/dielectric_rod_h' })
    event.shaped(
        Item.of('powah:dielectric_rod_horizontal', 6),
        [
            'AAA',
            'BCB',
            'AAA'
        ],
        {
            A: 'powah:dielectric_paste',
            B: 'mekanism:hdpe_rod',
            C: '#forge:wires/steel'
        }
    )
    event.remove({ output: 'powah:dielectric_casing' })
    event.shaped(
        Item.of('powah:dielectric_casing'),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: '#forge:ingots/black_iron',
            B: 'powah:dielectric_rod_horizontal',
            C: 'powah:dielectric_rod',
            D: 'enderio:void_chassis'
        }
    )
    event.remove({ output: 'powah:energizing_orb' })
    event.shaped(
        Item.of('powah:energizing_orb'),
        [
            'ABA',
            'ACA',
            'DED'
        ],
        {
            A: '#forge:glass',
            B: 'ae2:charger',
            C: 'powah:dielectric_casing',
            D: 'powah:dielectric_rod_horizontal',
            E: 'create:depot'
        }
    )
    event.remove({ output: 'powah:capacitor_basic' })
    event.shaped(
        Item.of('powah:capacitor_basic', 2),
        [
            ' AB',
            'ACA',
            'BA '
        ],
        {
            A: 'powah:dielectric_paste',
            B: 'enderio:basic_capacitor',
            C: 'immersiveengineering:coil_hv'
        }
    )
})