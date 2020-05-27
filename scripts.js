var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = 25;
var y = 25;
var dx = 25;
var dy = 0;
let appleX = Math.round((Math.random() * 800) / 25) * 25;
let appleY = Math.round((Math.random() * 800) / 25) * 25;

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

function drawApple() {
    ctx.beginPath();
    ctx.rect(appleX, appleY, 25, 25);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    drawSnake();
    drawApple();
    let snakeHead = snakeBody[snakeBody.length - 1];
    let snakeTail = snakeBody.slice(0, snakeBody.length - 1);

    // Direction
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

    // Apple detection
    if(appleX == snakeHead[0] && appleY == snakeHead[1]) {
        appleX = Math.round((Math.random() * 800) / 25) * 25;
        appley = Math.round((Math.random() * 800) / 25) * 25;
        snakeLength += 1;
    }

    // Snake body detection
    if(snakeTail.includes(snakeHead)){
        console.log('I eated myself');
    }

    // Wall detection

    // Resets arrow presses
    rightPressed = false;
    leftPressed = false;
    upPressed = false;
    downPressed = false;

    // Moves the snake
    x += dx;
    y += dy;
}

setInterval(draw, 200);

// SNAKE 
// 1. Clear apple once eaten.  Make sure does not respawn*  same spot 
// 2. Body detection 
// 3. Wall detection 
// 4. Grass Grid* 
// 5. Apple Logic- can not place apple on body of snake   
// 6. Audio-sound effect(chomp!) when apple is eaten   
// 7.  Score board   
// 8.  High Score   
// 9.  Start Screen with start button 
// 10. Game Over screen with continue button

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