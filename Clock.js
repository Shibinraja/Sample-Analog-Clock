setInterval(setTime,1000)


// const Second_Hand = document.querySelector('[Data-Second-Hand]');
// const Minute_Hand = document.querySelector('[Data-Minute-Hand]');
// const Hour_Hand = document.querySelector('[Data-Hour-Hand]');


function setTime(){

  const Second_Hand = document.getElementById('Second-Hand').style;
  const Minute_Hand = document.getElementById('Minute-Hand').style;
  const Hour_Hand = document.getElementById('Hour-Hand').style;
  
    const currentDate = new Date();
    const currentSecond = currentDate.getSeconds() * 360 / 60
    const currentMinute = (currentSecond / 60 ) +(currentDate.getMinutes()) * 360 / 60
    const currentHour = (currentMinute/12) + (currentDate.getHours()) * 360/ 12  

    
  //console.log("Hour: "+currentHour+ " Minute: "+ currentMinute + " Second: "+ currentSecond);

    // rotation(Second_Hand, currentSecond);    
    // rotation(Minute_Hand, currentMinute);
    // rotation(Hour_Hand, currentHour);

    Second_Hand.transform = "rotate(" + currentSecond + "deg)";
    Minute_Hand.transform = "rotate(" + currentMinute + "deg)";
    Hour_Hand.transform = "rotate(" + currentHour + "deg)";
}


// function rotation(element, rotationratio){
//     element.style.setProperty("--rotates" , rotationratio )
// }

setTime()

var getTimer;
//var setTimer = document.querySelector('input[type="time"]');


function startTime(){
  
  var setTimer = document.getElementById("appt").value;
      // setTimer = "hh:mm:ss";
  var Times =  setTimer.split(":");
  
  if(Times[0]==0){
    var seconds = parseInt(Times[1]);
    seconds = seconds * 60;
  }
  else{
    var seconds = parseInt(Times[0])
    seconds = seconds * 3600;
  }


  console.log(seconds);

  const currentstamp = Date.now();
  const Afterstamp = currentstamp + seconds *1000;
  displayTheTime(seconds);
  
  
  getTimer = setInterval(()=>{
    const timer = Math.round((Afterstamp - Date.now()) /1000);
    
    if(timer>0){
      document.getElementById("start").disabled = true;
    }
    else{
      document.getElementById("start").disabled = false;
    }

    if(timer<= 0){
      clearInterval(getTimer);
      return;
    }

    displayTheTime(timer);
  },1000);
}


function displayTheTime(seconds){
  const display = document.getElementById('timer');
  const Hour  =  Math.floor(seconds/3600);
  const minutes = Math.floor(seconds/60);
  const remainderSeconds = seconds % 60;
  
  var timeDisplay = `${Hour} : ${minutes} : ${remainderSeconds < 10 ? '0': ''}${remainderSeconds}`;
  display.value = timeDisplay;
  console.log(minutes, remainderSeconds);
  // Time = setTimeout("startTime()",1000);

}

function stopTime(){
  // const endTimer = document.getElementById('stop');
  clearTimeout(getTimer);
}

function resetTime(){
  const display = document.getElementById('timer');
  clearTimeout(getTimer);
  display.value = "";
  document.getElementById("start").disabled = false;
  console.log(display);
};

// Stop-Watch timer

function stopWatch(){
let h1 = document.getElementById('stop-time')
start = document.getElementById("start1");
stop = document.getElementById("stop1");
reset = document.getElementById("reset1");

let seconds = 0;
minutes = 0;
hours = 0;
t ; 


seconds++;
if(seconds >=60){
  seconds = 0;
  minutes++;
if(minutes >=60) {

  minutes = 0;
  hours++;
  }
}

h1.innerText = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
}

var timer = 0;

function timer(){

t = setInterval(stopWatch, 1000)
}

function startwatch(){
  
  timer();
}

function stopwatch(){
  
  clearTimeout(t);
  
}


function resetTime(){

  h1.textContent = "00:00:00";
  seconds = 0; minutes = 0; hours = 0; 
}
