var breakTime = 5;
var workTime = 25;
var clockOn = true;
var second = 59;

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
  while (clockOn === true){
    for (var i = workTime; i = 0; i--){
      while(second >= 0){
        setInterval(displaySecond, 1000);
      }
      second = 59;
      workTime -= 1;
    }
  }
});
