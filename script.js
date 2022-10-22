// Tab Controls

let tabHeader = document.getElementsByClassName('tab-header')[0];
let tabIndicator = document.getElementsByClassName('tab-indicator')[0];
let tabBody = document.getElementsByClassName('tab-body')[0];
let tabsPane = tabHeader.querySelectorAll('.tab-item');
let audio = document.getElementById('clockTicking');


for (let i = 0; i < tabsPane.length; i++) {
   
    tabsPane[i].addEventListener('click', function () {
        tabHeader.getElementsByClassName('active')[0].classList.remove('active');
        tabsPane[i].classList.add('active');

       
        tabBody.getElementsByClassName('active')[0].classList.remove('active');
        tabBody.getElementsByTagName('div')[i].classList.add('active');

        tabIndicator.style.left = `calc(calc((100% / 4)) * ${i})`

    });

}

// CLOCK TIME

const currentTime = () => {
   
    today = new Date();
    h = today.getHours();
    m = today.getMinutes();
    s = today.getSeconds();
    session = "AM";

    if (h===0){
        h=12;
    }
    else if (h>12){
        h=h-12;
        session = "PM";
    }
    
    if(h<10){
        h ="0" + h;
    }
    if(m<10){
        m ="0" + m;
    }
    if(s<10){
        s = "0" + s;
    }

    time = `${h} : ${m} : ${s} ${session}`;

    document.querySelector('.digital_clock').innerHTML = time;

    setInterval(() => {
        
        hrotation = (30 * h) + (m / 2) + (s / 120);
        mrotation = (6 * m) + (s / 10);
        srotation = (6 * s);

        hour_hand.style.transform = `rotate(${hrotation}deg)`;
        minute_hand.style.transform = `rotate(${mrotation}deg)`;
        second_hand.style.transform = `rotate(${srotation}deg)`;
        

    }, 1000);

    t = setTimeout(() => {
        currentTime();
    },1000);

}

// StopWatch implementation

var hr = 0;
var min = 0;
var sec = 0;
var count = 0;
var timer = false;

function startStopWatch() {
    timer = true;
    stopwatch();
}
function stopStopWatch() {
    timer = false;
}
function resetStopWatch() {
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;
    document.querySelector('.sw_hr').innerHTML = "00";
    document.querySelector('.sw_min').innerHTML = "00";
    document.querySelector('.sw_sec').innerHTML = "00";
    document.querySelector('.sw_ms').innerHTML = "00";
}
function stopwatch(){

if(timer == true){
    count = count + 1;
    
    if(count == 100){
        sec = sec + 1;
        count = 0;
    }
    if(sec == 60){
        min = min + 1;
        sec = 0;
    }
    if(min == 60){
    hr = hr + 1;
    min = 0;
    sec = 0;
    }

    var hrString = hr;
    var minString = min;
    var secString = sec;
    var countString = count;

    if(hr < 10){
        hrString = "0" + hr;
    }

    if(min < 10){
        minString = "0" + min;
    }

    if(sec < 10){
        secString = "0" + sec;
    }

    if(count < 10){
        countString = "0" + count;
    }

    document.querySelector('.sw_hr').innerHTML = hrString;
    document.querySelector('.sw_min').innerHTML = minString;
    document.querySelector('.sw_sec').innerHTML = secString;
    document.querySelector('.sw_ms').innerHTML = count;
    setTimeout("stopwatch()",10);
}
}