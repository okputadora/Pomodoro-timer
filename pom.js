var ogBreakTime = 1;
var ogWorkTime = 1;
var second = 0;
var totalSeconds;
var workSecToPer;
var breakSecToPer;
var percent = 100;
// declare variable to stop setInterval here so all
// functions have acces to it
var stop;

function countdown(percentage, id){
  console.log(percentage);
  console.log(percent);
  percent -= percentage;
  $("#" + id + "-remaining").css("height", percent + "%");
  if (second > 9){
    $("#timer").html(time + ":" + second);
  }
  else{
    $("#timer").html(time + ":0" + second);
  }
  console.log(second);
  if (second === 0){
    if (time > 0){
      time -= 1;
      second = 60;
    }
    console.log("minute: " + time);
  }
  second -= 1;
  if (time === 0 && second === 0 && id === "work"){
    console.log("Worktime done");
    percent = 100;
    clearInterval(stop);
    id = "break";
    time = ogWorkTime;
    // change title to break
    $("#sess-type").html("Break");
    // reset graph
    $("#work-remaining").css("height", "100%");
    setInterval(function(){
      stop = countdown(breakSecToPer, id);
    }, 1000);
  }
  if (time === 0 && second === 0 && id === "break"){
    console.log("breaktime done");
    percent = 100;
    clearInterval(stop);
    id = "work";
    second = 0;
    time = ogBreakTime;
    // change title to break
    $("#sess-type").html("Work");
    // reset graph
    $("#break-remaining").css("height", "100%");
    setInterval(function(){
      stop = countdown(workSecToPer, id);
    }, 1000);
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
  breakTime = ogBreakTime;
  workTime = ogWorkTime;
  $("#timer").html(workTime + ":00");
  totalSecondsWork = workTime * 60;
  totalSecondsBreak = breakTime * 60;
  workSecToPer = 100/totalSecondsWork;
  breakSecToPer = 100/totalSecondsBreak;
  console.log(breakSecToPer);
  id = "work";
  console.log("starting time " + workTime);
  time = workTime;
  stop = setInterval(function(){
    countdown(workSecToPer, id);
  }, 1000);
});
