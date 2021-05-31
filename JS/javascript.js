

//Richards kod.

var today = new Date();

var date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate();

console.log(today);
console.log(date);

setInterval(showTime, 1000);
function showTime(){
    let time = new Date();
    let hour = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    am_pm = "AM";

    if(hour > 12){
        hour -= 12;
        am_pm = "PM";
    }

    if(hour==0){
        hour = 12;
        am_pm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let currentTime = hour + ":" + minutes + ":" + seconds + am_pm;

    document.getElementById("Clock").innerHTML = currentTime;
}