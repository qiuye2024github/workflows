PlayerEvents.loggedIn(event => {if (!event.player.stages.has('starting_items')) {event.player.give('ftbquests:book');event.player.stages.add('starting_items')}})

ItemEvents.rightClicked(event => {
  const tokenTimes = {
    'kubejs:time_token':           { value: 3600,    label: '3 minutes',     consume: true },
    'kubejs:advance_time_token':   { value: 36000,   label: '30 minutes',    consume: true },
    'kubejs:ultimate_time_token':  { value: 360000,  label: '5 hours',       consume: true },
    'kubejs:creative_time_token':  { value: 1728000, label: '1 day',         consume: false }}
  const id = event.item.id
  if (!(id in tokenTimes)) return
  if (event.player.inventory.find(Item.of('gag:time_sand_pouch')) == -1) {event.player.tell('§cYou do not have a Temporal Pouch in your inventory.');return}
  event.player.addItemCooldown(id, 40)
  const tokenData = tokenTimes[id]
  const time = tokenData.value
  const label = tokenData.label
  const cmd = `gag give_time ${event.player.username} ${time}`
  let success = false
  try {success = event.server && event.server.runCommandSilent(cmd)} catch (e) {}
  if (!success) {try {success = event.level && event.level.runCommandSilent(cmd)} catch (e) {}}
  if (!success) {event.player.tell('§cInsufficient permissions to grant time. Please contact an administrator.');return}
  if (tokenData.consume) {event.item.count--;if (event.item.count <= 0) {event.player.mainHandItem = Item.of('minecraft:air')}}
  event.player.tell(`§a→ ${label} of time granted.`)})











