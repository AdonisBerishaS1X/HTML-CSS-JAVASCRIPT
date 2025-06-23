var wakeuptime;
var dstime;
var sleeptime;

var noon =12;

function showCurrentTime() {

var clock = document.getElementById("clock");
var curremtTime = new Data;
var hours = curremtTime.getHours;
var minutes = curremtTime.getMinutes;
var seconds = curremtTime.getSeconds;

var meridian = "AM";

if(hours>=noon) {
    meridian = "PM"
}

var clockTime = hours + ':' + minutes +":"+seconds + " " + meridian;
clock.innerText = clockTime;

changeImage();

}

showCurrentTime();

function changeImage(){

    var time = new Data().getHorus;
    console.log(time);

    var images = "img/ds_clook.png";

    var images Html = document.getElementById("timeImage");



if(time == wakeuptime) {
    images = "img/morning.gif";
    console.log("morning");
}

else if (time == dstime) {

    images = "img/classs.gif";
    console.log("classtime");
}

else if (time=sleeptime) {

    images = "img/night.gif";
    console.log("sleeptime")
}


}

function updateClock() {

    var dsTimeSelector = document.getElementById('wakeUpTimeSelector');
    wakeuptime = wakeuptimeselector.value;

    var dsTimeSelector = document.getElementById('dsTimeSelector');
    dsTime = wakeuptimeselector.value;    

        var sleeptimeSelector = document.getElementById('sleeptimeSelector');
    wakeuptime = sleeptimeSelector.value;

    var saveButton = document.getElementById('sleepSelector');
    saveButton.addEventListener("click",updateClock);



}



