var breakTime = 5;
var workTime = 25;
var clockOn = true;
var second = 60;
var totalSeconds;
var secToPer;
var per = 100;

function displaySecond(){
  second -= 1;
  per -= secToPer;
  $("#work-remaining").css("height", per + "%");
  if (second > 9){
    $("#timer").html(workTime + ":" + second);
  }
  else{
    $("#timer").html(workTime + ":0" + second);
  }
  console.log(second);
  if (second === 0){
    workTime -= 1;
    second = 60;
  }
  second -= 1;
}

// Add or subtract time from clocks
$("#breakPlus").click(function(){
  breakTime +=  1;
  $("#breakTime").html(breakTime);
});

$("#workPlus").click(function(){
  workTime += 1;
  $("#workTime").html(workTime);
});

$("#breakMinus").click(function(){
  breakTime -= 1;
  $("#breakTime").html(breakTime);
});

$("#workMinus").click(function(){
  workTime -= 1;
  $("#workTime").html(workTime);
});

// Start clock
$("#start").click(function(){
  $("#timer").html(workTime + ":00");
  totalSeconds = workTime * 60;
  secToPer = 100/totalSeconds;
  console.log(secToPer);
  console.log(totalSeconds)
  setInterval(displaySecond, 1000);
});
