var t0 = 0;

var green;
var yellow;
var red;

var bell = new Audio('/audio/bell.wav');

function start(green_time, yellow_time, red_time, grace_time) {

  green_time = green_time * 60000;
  yellow_time = yellow_time * 60000;
  red_time = red_time * 60000;
  grace_time = grace_time * 60000;

  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.fillStyle = "#d9dbd9";
  ctx.fillRect(5, 5, 790, 390);

  t0 = performance.now()
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");


  green = setTimeout(function() {
    ctx.fillStyle = "#41c450";
    ctx.fillRect(5, 5, 790, 390);
  }, green_time);

  yellow = setTimeout(function() {
    ctx.fillStyle = "#f5f556";
    ctx.fillRect(5, 5, 790, 390);
  }, yellow_time);

  red = setTimeout(function() {
    ctx.fillStyle = "#bf1d2a";
    ctx.fillRect(5, 5, 790, 390);
  }, red_time);

  bell_wrapper = setTimeout(function() {
    bell.play();
    document.getElementById("elapsed").innerHTML = "Time exceeded 🛎";
    bell_sound = setInterval(function() {
      bell.play();
    }, 10000);
  }, grace_time);

  document.getElementById("elapsed").innerHTML = "Timer is running 🏃‍♀️";
}

function stop() {
  var t1 = performance.now()
  if (t0 > 0){

    var seconds = (t1 - t0) / 1000;
    var mins = seconds / 60;
    seconds = seconds % 60;

    document.getElementById("elapsed").innerHTML = Math.floor(mins) + " mins " + Math.round(seconds) + " seconds.";

    clearTimeout(green);
    clearTimeout(yellow);
    clearTimeout(red);
    clearInterval(bell_sound);
    clearTimeout(bell_wrapper);

  }
  else {
    document.getElementById("elapsed").innerHTML = "Timer not started yet 🤷‍♂️";
    clearInterval(bell_sound);
    clearTimeout(bell_wrapper);
  }
}

function reset() {

  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.fillStyle = "#d9dbd9";
  ctx.fillRect(5, 5, 790, 390);

  document.getElementById("elapsed").innerHTML = "";

  t0 = 0;

}
