Wait = (ms) => new Promise(resolve => setTimeout(resolve,ms))

setTick(async () => {
    var health = (GetEntityHealth(PlayerPedId()))/300*100
    SendNuiMessage(JSON.stringify({hud: true,health: health.toFixed(0)})) 
    if  (IsPedInAnyVehicle(PlayerPedId(), false)) {
        var speed = GetEntitySpeed(GetVehiclePedIsUsing(PlayerPedId(),false)) * 2.236936
        SendNuiMessage(JSON.stringify({vehicle: true, speed: speed.toFixed(0)})) 
    }else{
        SendNuiMessage(JSON.stringify({vehicle: false}))
    }
    await Wait(150)
})