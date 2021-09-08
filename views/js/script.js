window.addEventListener("message", function (event) {
    if (event.data.vehicle == true){
        document.getElementById("vehicle").style.display = "block";
        document.getElementById("speed").innerHTML = event.data.speed+" KM"
    }else if (event.data.vehicle == false){
        document.getElementById("vehicle").style.display = "none";
    }
    if (event.data.hud == true){
        var now = new Date
        if (now.getMinutes() < 10) {getMinutes = "0"+now.getMinutes()}else{getMinutes = now.getMinutes()}
        if (now.getHours() < 10) {getHours = "0"+now.getHours()}else{getHours = now.getHours()}

        document.getElementById("health").style.width = event.data.health+"%"
        document.getElementById("hours").innerHTML = getHours +":"+getMinutes
    }
   
})