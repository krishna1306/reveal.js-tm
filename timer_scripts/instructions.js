var bell = new Audio('/audio/bell.wav');

function show_green() {

  var c = document.getElementById("myCanvas-1");
  var ctx = c.getContext("2d");
  ctx.fillStyle = "#41c450";
  ctx.fillRect(5, 5, 590, 290);

}

function show_yellow() {

  var c = document.getElementById("myCanvas-1");
  var ctx = c.getContext("2d");
  ctx.fillStyle = "#f5f556";
  ctx.fillRect(5, 5, 590, 290);

}

function show_red() {

  var c = document.getElementById("myCanvas-1");
  var ctx = c.getContext("2d");
  ctx.fillStyle = "#bf1d2a";
  ctx.fillRect(5, 5, 590, 290);

}

function ring_button() {
  bell.play();
}

function show_5to7() {
  document.getElementById("timing-info").innerHTML = "Green (5) | Yellow (6) | Red (7)";
}

function show_4to6() {
  document.getElementById("timing-info").innerHTML = "Green (4) | Yellow (5) | Red (6)";
}

function show_2to3() {
  document.getElementById("timing-info").innerHTML = "Green (2) | Yellow (2:30) | Red (3)";
}

function show_1to2() {
  document.getElementById("timing-info").innerHTML = "Green (1) | Yellow (1:30) | Red (2)";
}
