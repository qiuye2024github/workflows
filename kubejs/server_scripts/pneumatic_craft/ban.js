ServerEvents.recipes(event => {
    event.remove({ id: 'pneumaticcraft:pressure_chamber_glass' })
    event.remove({ id: 'pneumaticcraft:pressure_chamber/empty_pcb' })
    event.remove({ id: 'pneumaticcraft:printed_circuit_board' })
    event.remove({ id: 'pneumaticcraft:pressure_chamber_valve' })
})