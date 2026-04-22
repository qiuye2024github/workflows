const $EventBuses = Java.loadClass("dev.architectury.platform.forge.EventBuses")
const $GasDeferredRegister = Java.loadClass("mekanism.common.registration.impl.GasDeferredRegister")
const GASES = new $GasDeferredRegister("kubejs")
 
//注册气体 (id, 颜色)
GASES.register("fire_water", 0xcb8c34)
GASES.register("dew_of_the_void", 0x4cb359)
GASES.register("chaos_fluid", 0xcb3489)
//所属模组
GASES.register(Java.loadClass("dev.architectury.platform.forge.EventBuses").getModEventBus("kubejs").get())