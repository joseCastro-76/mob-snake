var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = 25;
var y = 25;
var dx = 25;
var dy = 0;

var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;

let snakeBody = [];
let snakeLength = 4;

document.addEventListener("keydown", keyDownHandler, false);

function keyDownHandler(e) {
    e.preventDefault();
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
    else if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = true;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = true;
    }
}

function drawSnake() {
    snakeBody.push([x, y])
    ctx.beginPath();
    ctx.rect(x, y, 25, 25);
    ctx.fillStyle = "#32822F";
    ctx.fill();
    ctx.closePath();
    if (snakeBody.length > snakeLength) {
        const itemToRemove = snakeBody.shift();
        ctx.clearRect(itemToRemove[0], itemToRemove[1], 25, 25);
    }
}


function draw() {
    drawSnake();

    if(rightPressed) {
        dx = 25;
        dy = 0;
    } else if(leftPressed) {
        dx = -25;
        dy = 0;
    } else if(upPressed) {
        dx = 0;
        dy = -25;
    } else if(downPressed) {
        dx = 0;
        dy = 25;
    }

    rightPressed = false;
    leftPressed = false;
    upPressed = false;
    downPressed = false;

    x += dx;
    y += dy;
}

setInterval(draw, 200);



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