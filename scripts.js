// const canvas = {
//     element: document.querySelector("canvas"),
//     context: document.querySelector("canvas").getContext('2d')
//   }
  
//   const board = {
//     rows: 25,
//     columns: 25,
//     colors: {
//       light: '#a3cf53',
//       dark: '#abd55a'
//     }
//   }
  
//   canvas.context.beginPath();
//   canvas.context.fillStyle = board.colors.dark;
//   canvas.context.rect(0, 0, canvas.element.width, canvas.element.height);
//   canvas.context.fill();
  
//   canvas.context.beginPath();
//   canvas.context.fillStyle = board.colors.light;
//   for (let column = 0; column < board.columns; column++) {
//     for (let row = 0; row < board.rows; row++) {
//       if (row % 2 === 0 && column % 2 === 1 || row % 2 === 1 && column % 2 === 0) {
//         canvas.context.rect(
//           column * canvas.element.width / board.columns,
//           row * canvas.element.height / board.rows,
//           canvas.element.width / board.columns,
//           canvas.element.height / board.rows
//         );
//       }
//     }
//   }
//   canvas.context.fill();

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
// var x = canvas.width/2;
var x = 25;
// var y = canvas.height-30;
var y = 25;
var dx = 0;
var dy = 25;
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;

function drawBall() {
    ctx.beginPath();
    ctx.rect(x, y, 25, 25);
    // ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#32822F";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    y += dy;
}

setInterval(draw, 500);