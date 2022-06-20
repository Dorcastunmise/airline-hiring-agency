var canvas = document.getElementById("circleCanvas");
var context = canvas.getContext("2d");
context.arc(50, 50, 50, 0, Math.PI * 2, false);
context.fillStyle = "red";
context.fill();