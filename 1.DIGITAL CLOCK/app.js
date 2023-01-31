
var hourE1=document.getElementById("h");
var minutesE1=document.getElementById("m");
var secondsE1=document.getElementById("s");

function updateTime(){
    var today=new Date();
    var hours=today.getHours();
    var minutes=today.getMinutes();
  var seconds=today.getSeconds();
  var amps=document.getElementById("am");
  if(hours>12)
  {
    amps.innerHTML="pm"
    hours=hours-12;
  }
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  amps.innerHTML="am"
    hourE1.innerHTML=hours;
    minutesE1.innerHTML=minutes;
    secondsE1.innerHTML=seconds;
    
    
    setTimeout(updateTime,1000);

}
setTimeout(updateTime,1000);