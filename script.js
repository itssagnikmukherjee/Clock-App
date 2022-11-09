// Tab Controls

let tabHeader = document.getElementsByClassName("tab-header")[0];
let tabIndicator = document.getElementsByClassName("tab-indicator")[0];
let tabBody = document.getElementsByClassName("tab-body")[0];
let tabsPane = tabHeader.querySelectorAll(".tab-item");
let timer_audio = document.querySelector("#timer_audio");

for (let i = 0; i < tabsPane.length; i++) {
  tabsPane[i].addEventListener("click", function () {
    tabHeader.getElementsByClassName("active")[0].classList.remove("active");
    tabsPane[i].classList.add("active");

    tabBody.getElementsByClassName("active")[0].classList.remove("active");
    tabBody.getElementsByTagName("div")[i].classList.add("active");

    tabIndicator.style.left = `calc(calc((100% / 4)) * ${i})`;
  });
}

// CLOCK TIME

const currentTime = () => {
  today = new Date();
  h = today.getHours();
  m = today.getMinutes();
  s = today.getSeconds();
  session = "AM";

  if (h === 0) {
    h = 12;
  } else if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }

  time = `${h} : ${m} : ${s} ${session}`;

  document.querySelector(".digital_clock").innerHTML = time;

  

  setInterval(() => {
    hrotation = 30 * h + m / 2 + s / 120;
    mrotation = 6 * m + s / 10;
    srotation = 6 * s;

    hour_hand.style.transform = `rotate(${hrotation}deg)`;
    minute_hand.style.transform = `rotate(${mrotation}deg)`;
    second_hand.style.transform = `rotate(${srotation}deg)`;
  }, 1000);

  t = setTimeout(() => {
    currentTime();
  }, 1000);

};

// StopWatch implementation

var hr = 0;
var min = 0;
var sec = 0;
var count = 0;
var timer = false;

function startStopWatch() {
  document.querySelector(".startStopWatch").style.display = "none";
  document.querySelector(".stopStopWatch").style.display = "block";
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
  document.querySelector(".sw_hr").innerHTML = "00";
  document.querySelector(".sw_min").innerHTML = "00";
  document.querySelector(".sw_sec").innerHTML = "00";
  document.querySelector(".sw_ms").innerHTML = "00";

  document.querySelector(".startStopWatch").style.display = "block";
  document.querySelector(".stopStopWatch").style.display = "none";
}
function stopwatch() {
  if (timer == true) {
    count = count + 1;

    if (count == 100) {
      sec = sec + 1;
      count = 0;
    }
    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    var hrString = hr;
    var minString = min;
    var secString = sec;
    var countString = count;

    if (hr < 10) {
      hrString = "0" + hr;
    }

    if (min < 10) {
      minString = "0" + min;
    }

    if (sec < 10) {
      secString = "0" + sec;
    }

    if (count < 10) {
      countString = "0" + count;
    }

    document.querySelector(".sw_hr").innerHTML = hrString;
    document.querySelector(".sw_min").innerHTML = minString;
    document.querySelector(".sw_sec").innerHTML = secString;
    document.querySelector(".sw_ms").innerHTML = count;
    setTimeout("stopwatch()", 10);
  }
}

// Timer

var start = document.querySelector(".start_timer");
var reset = document.querySelector(".reset_timer");

var hh = document.querySelector("#timer_hr");
var mm = document.querySelector("#timer_min");
var ss = document.querySelector("#timer_sec");

var start_Timer = null;

const timer_start = () => {
  if (hh.value == 0 && mm.value == 0 && ss.value == 0) {
    hh.value = 0;
    mm.value = 0;
    ss.value = 0;
  } else if (ss.value != 0) {
    ss.value--;
  } else if (mm.value != 0 && ss.value == 0) {
    ss.value = 59;
    mm.value--;
  } else if (hh.value != 0 && mm.value == 0) {
    mm.value = 60;
    hh.value--;
  }

  return;
};

start.addEventListener("click", function () {
  if (ss.value != 0 || mm.value != 0 || hh.value != 0) {
    function start_timer_Interval() {
      start_Timer = setInterval(function () {
        timer_start();
        timer_stop();
      }, 1000);
    }
    start_timer_Interval();
  }
});

reset.addEventListener("click", function () {
  hh.value = 0;
  mm.value = 0;
  ss.value = 0;
  stop_timer_interval();
});

const stop_timer_interval = () => {
  clearInterval(start_Timer);
};

const timer_stop = () => {
  if (hh.value == 0 && mm.value == 0 && ss.value == 0) {
    timer_audio.play();
    alert("TIME UP !");
    timer_audio.pause();
    clearInterval(start_Timer);
  }
};

// Alarm

let alarmListArr = [];
const selectMenu = document.querySelectorAll("#alarm_select");
const setAlarmBtn = document.querySelector("#setAlarmBtn");
let alarmCount = 0;
let alarmTime;
let ring = new Audio("Timer Audio.mp3");

const updateClock = () =>{
  var now = new Date();
  var dname = now.getDay(),
      mo = now.getMonth(),
      dnum = now.getDate(),
      yr = now.getFullYear(),
      hou = now.getHours(),
      min = now.getMinutes(),
      sec = now.getSeconds(),
      pe = "AM";

      if(hou==0){
          hou = 12;
      }

      if(hou>12){
          hou -=12;
          pe = "PM";
      }

      Number.prototype.pad = function(digits){
          for(var n = this.toString(); n.length<digits; n=0+n);
          return n;
      }

      var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      var ids =["dayName", "month", "dayNum", "year", "hour", "minutes", "seconds", "period"];
      var values = [`${months[mo]}-${dnum.pad(2)} , ${yr} , ${week[dname]} 
      `];
      
      var values1 = [`${hou.pad(2)} : ${min.pad(2)} : ${sec.pad(2)} ${pe}`];
      
      for(var i=0; i<ids.length;i++){
          document.getElementById(ids[i]).firstChild.nodeValue = values[i];
      }

      for(var j=0; j<ids.length; j++){
        document.getElementById("hour").innerHTML = values1;
      }

      for(let i=0; i<alarmListArr.length;i++){
          if(alarmListArr[i]==`${hou.pad(2)}:${min.pad(2)}:${sec.pad(2)} ${pe}`){
              console.log("Alarm ringing...");
              ring.load();
              ring.play();
              alert(`It's ${hou.pad(2)} : ${min.pad(2)} : ${sec.pad(2)} ${pe}`);
              document.querySelector("#stopAlarmBtn").style.visibility= "visible";
          }
      }
}

const initClock = () => {
  updateClock();
  window.setInterval("updateClock()",1000);
}

for(let i=12; i>0;i--){
  i=i<10 ? "0"+i :i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for(let i=59; i>=0;i--){
  i=i<10 ? "0"+i :i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for(let i=2; i>0;i--){
  let ampm = i== 1? "AM":"PM";
  let option = `<option value="${ampm}">${ampm}</option>`;
  selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

const deleteAlarm = (click_id) => {
  var element = document.getElementById("alarm"+click_id);
  var deleteIndex = alarmListArr.indexOf(document.querySelector("#span"+click_id).innerText);
  alarmListArr.splice(deleteIndex,1);
  element.remove();
}

const setAlarm = ()=>{
  document.querySelector(".upcoming_alarms").innerText = "---- ALARM LIST ----";
  let time = `${selectMenu[0].value}:${selectMenu[1].value}:00 ${selectMenu[2].value}`;
  if(time.includes("setHour") || time.includes("setMinute") || time.includes("AM/PM")){
      alert("Please, Select Valide Input");
   }
   else if(alarmTime == `${selectMenu[0].value}:${selectMenu[1].value}:00 ${selectMenu[2].value}`){
    alert(`Alarm for ${selectMenu[0].value}:${selectMenu[1].value} is already set`);
   }
  else{
      alarmCount++;
      document.querySelector(".alarmList").innerHTML += `
      <section class="alarmLog" id="alarm${alarmCount}">
          <span id="span${alarmCount}">${time}</span>
          <button class="btn-delete" id="${alarmCount}" onClick="deleteAlarm(this.id)"><i class="fa-solid fa-xmark"></i></button>
      </section>`;

      alarmTime = `${selectMenu[0].value}:${selectMenu[1].value}:00 ${selectMenu[2].value}`;
      alarmListArr.push(alarmTime);
      console.log(document.querySelector(".btn-delete").value);
  }

}

setAlarmBtn.addEventListener("click",setAlarm);


const stopAlarm = () =>{
  ring.pause();
  document.querySelector("#stopAlarmBtn").style.visibility= "hidden";
}