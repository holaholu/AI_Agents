const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('score');
const highScoreElement = document.getElementById('high-score');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');

// Game constants
const gridSize = 20;
const tileCount = canvas.width / gridSize;

// Game state
let snake = [];
let food = {};
let dx = 0;
let dy = 0;
let score = 0;
let highScore = localStorage.getItem('snakeHighScore') || 0;
let gameLoop = null;
let isPaused = false;
let isGameRunning = false;

// Initialize
highScoreElement.textContent = highScore;

function initGame() {
    // Start snake in the middle
    snake = [
        { x: 10, y: 10 },
        { x: 9, y: 10 },
        { x: 8, y: 10 }
    ];
    dx = gridSize;
    dy = 0;
    score = 0;
    scoreElement.textContent = score;
    isPaused = false;
    isGameRunning = true;
    pauseBtn.textContent = 'Pause';
    
    spawnFood();
}

function spawnFood() {
    food = {
        x: Math.floor(Math.random() * tileCount) * gridSize,
        y: Math.floor(Math.random() * tileCount) * gridSize
    };
    
    // Make sure food doesn't spawn on the snake
    for (let segment of snake) {
        if (segment.x === food.x && segment.y === food.y) {
            spawnFood();
            break;
        }
    }
}

function drawGame() {
    // Clear canvas
    ctx.fillStyle = '#0f0f23';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw grid (subtle)
    ctx.strokeStyle = '#1a1a3a';
    ctx.lineWidth = 0.5;
    for (let i = 0; i < tileCount; i++) {
        ctx.beginPath();
        ctx.moveTo(i * gridSize, 0);
        ctx.lineTo(i * gridSize, canvas.height);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, i * gridSize);
        ctx.lineTo(canvas.width, i * gridSize);
        ctx.stroke();
    }
    
    // Draw food
    ctx.fillStyle = '#e63946';
    ctx.beginPath();
    ctx.arc(
        food.x + gridSize / 2,
        food.y + gridSize / 2,
        gridSize / 2 - 2,
        0,
        Math.PI * 2
    );
    ctx.fill();
    
    // Draw snake
    snake.forEach((segment, index) => {
        // Head is brighter green
        if (index === 0) {
            ctx.fillStyle = '#4ecca3';
        } else {
            // Body segments gradient
            const greenValue = Math.max(60, 140 - index * 5);
            ctx.fillStyle = `rgb(30, ${greenValue}, 90)`;
        }
        
        ctx.fillRect(segment.x + 1, segment.y + 1, gridSize - 2, gridSize - 2);
        
        // Draw eyes on head
        if (index === 0) {
            ctx.fillStyle = '#0f0f23';
            if (dx > 0) { // moving right
                ctx.fillRect(segment.x + 12, segment.y + 5, 3, 3);
                ctx.fillRect(segment.x + 12, segment.y + 12, 3, 3);
            } else if (dx < 0) { // moving left
                ctx.fillRect(segment.x + 5, segment.y + 5, 3, 3);
                ctx.fillRect(segment.x + 5, segment.y + 12, 3, 3);
            } else if (dy < 0) { // moving up
                ctx.fillRect(segment.x + 5, segment.y + 5, 3, 3);
                ctx.fillRect(segment.x + 12, segment.y + 5, 3, 3);
            } else { // moving down
                ctx.fillRect(segment.x + 5, segment.y + 12, 3, 3);
                ctx.fillRect(segment.x + 12, segment.y + 12, 3, 3);
            }
        }
    });
}

function updateGame() {
    if (isPaused || !isGameRunning) return;
    
    // Calculate new head position
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    
    // Check wall collision
    if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
        gameOver();
        return;
    }
    
    // Check self collision
    for (let segment of snake) {
        if (head.x === segment.x && head.y === segment.y) {
            gameOver();
            return;
        }
    }
    
    // Add new head
    snake.unshift(head);
    
    // Check food collision
    if (head.x === food.x && head.y === food.y) {
        score += 10;
        scoreElement.textContent = score;
        
        if (score > highScore) {
            highScore = score;
            highScoreElement.textContent = highScore;
            localStorage.setItem('snakeHighScore', highScore);
        }
        
        spawnFood();
    } else {
        // Remove tail if no food eaten
        snake.pop();
    }
    
    drawGame();
}

function gameOver() {
    isGameRunning = false;
    clearInterval(gameLoop);
    
    // Draw game over overlay
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#e63946';
    ctx.font = 'bold 36px "Segoe UI", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('GAME OVER', canvas.width / 2, canvas.height / 2 - 20);
    
    ctx.fillStyle = '#fff';
    ctx.font = '20px "Segoe UI", sans-serif';
    ctx.fillText(`Final Score: ${score}`, canvas.width / 2, canvas.height / 2 + 20);
    ctx.fillText('Press Start to play again', canvas.width / 2, canvas.height / 2 + 55);
}

function startGame() {
    if (gameLoop) {
        clearInterval(gameLoop);
    }
    initGame();
    drawGame();
    gameLoop = setInterval(updateGame, 120);
}

function togglePause() {
    if (!isGameRunning) return;
    
    isPaused = !isPaused;
    pauseBtn.textContent = isPaused ? 'Resume' : 'Pause';
    
    if (!isPaused) {
        drawGame();
    } else {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 28px "Segoe UI", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('PAUSED', canvas.width / 2, canvas.height / 2);
    }
}

// Keyboard controls
document.addEventListener('keydown', (event) => {
    if (!isGameRunning) return;
    
    switch(event.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
            if (dy === 0) {
                dx = 0;
                dy = -gridSize;
            }
            break;
        case 'ArrowDown':
        case 's':
        case 'S':
            if (dy === 0) {
                dx = 0;
                dy = gridSize;
            }
            break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
            if (dx === 0) {
                dx = -gridSize;
                dy = 0;
            }
            break;
        case 'ArrowRight':
        case 'd':
        case 'D':
            if (dx === 0) {
                dx = gridSize;
                dy = 0;
            }
            break;
        case ' ':
            event.preventDefault();
            togglePause();
            break;
    }
});

startBtn.addEventListener('click', startGame);
pauseBtn.addEventListener('click', togglePause);

// Initial draw
ctx.fillStyle = '#0f0f23';
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = '#4ecca3';
ctx.font = 'bold 24px "Segoe UI", sans-serif';
ctx.textAlign = 'center';
ctx.fillText('Press Start to Play', canvas.width / 2, canvas.height / 2);
