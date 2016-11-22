var ogBreakTime = 1;
var ogWorkTime = 1;
var second = 59;
var totalSeconds;
var workSecToPer;
var breakSecToPer;
var percent = 100;
var id;
var numBreak = 0;
var numWork = 0;
var timerInitiated = false;
// declare variable to stop setInterval here so all
// functions have acces to it
var stop;

function countdown(percentage, id){
  percent -= percentage;
  if (second > 9){
    $("#timer").html(time + ":" + second);
  }
  else{
    $("#timer").html(time + ":0" + second);
  }
  if (second === 0){
    if (time > 0){
      time -= 1;
      second = 60;
    }
  }
  second -= 1;
  $("#" + id + "-remaining").css("height", percent + "%");
  if (time === 0 && second === -1){
    numWork += 1;
    $("#workValue").html(numWork);
    console.log("calling new function");
    percent = 100;
    clearInterval(stop);
    // reset graph
    $("#" + id + "-remaining").css("height", "100%");
    second = 59;
    if (id === "Work"){
      console.log("id = work");
      time = ogBreakTime-1;
      id = "Break";
      $("#clock").css("border", "10px solid #FF0D00")
      stop = setInterval(function(){
        countdown(breakSecToPer, id);
      }, 1000);
    }
    else if (id === "Break"){
      // increment number of breaks
      numBreak += 1;
      $("#breakValue").html(numBreak);
      console.log("id = break");
      time = ogWorkTime-1;
      id = "Work";
      $("#clock").css("border", "10px solid seagreen")
      stop = setInterval(function(){
        countdown(workSecToPer, id);
      }, 1000);
    }
    // toggle session type;
    $("#sess-type").html(id);
  }
}
// Add or subtract time from clocks
$("#breakPlus").click(function(){
  ogBreakTime +=  1;
  $("#breakTime").html(ogBreakTime);
});

$("#workPlus").click(function(){
  ogWorkTime += 1;
  $("#workTime").html(ogWorkTime);
});

$("#breakMinus").click(function(){
  ogBreakTime -= 1;
  $("#breakTime").html(ogBreakTime);
});

$("#workMinus").click(function(){
  ogWorkTime -= 1;
  $("#workTime").html(ogWorkTime);
});

// Start clock
$("#start").click(function(){
  // reset if timer is already running
  if (timerInitiated === true){
    console.log("in here");
    clearInterval(stop);
    second = 59;
    numWork = 0;
    numBreak = 0;
    percent = 100;
    $("#Work-remaining").css("height", "100%");
    $("#Break-remaining").css("height", "100%");
    $("#clock").css("border", "10px solid seagreen")
  }
  timerInitiated = true;
  breakTime = ogBreakTime;
  workTime = ogWorkTime;
  $("#timer").html(workTime + ":00");
  totalSecondsWork = workTime * 60;
  totalSecondsBreak = breakTime * 60;
  workSecToPer = 100/totalSecondsWork;
  breakSecToPer = 100/totalSecondsBreak;
  console.log(breakSecToPer);
  id = "Work";
  console.log("starting time " + workTime);
  time = workTime - 1;
  stop = setInterval(function(){
    countdown(workSecToPer, id);
  }, 1000);
});
