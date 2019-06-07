setInterval(function () {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let millis = currentTime.getMilliseconds();
    let period = "AM";

    if (hours >= 12) {
        period = "PM";
    }
    if (hours > 12) {
        hours -= 12;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }


    millis = millis.toString().slice(0, 1);

    let clockTime = hours + ":" + minutes + ":" + seconds + ":" + millis;

    let clock = document.getElementById('clock');
    clock.innerText = clockTime;
}, 50);