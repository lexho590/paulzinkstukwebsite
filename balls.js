
document.addEventListener('DOMContentLoaded', () => {
const container = document.getElementById('bouncing-balls-container') || document.body;
const numBalls = 15; // Adjust the number of balls
const ballSize = 40; // Matches CSS
const balls = [];

function createBall() {
    const ball = document.createElement('div');
    ball.classList.add('water-polo-ball');
    ball.style.width = `${ballSize}px`;
    ball.style.height = `${ballSize}px`;

    // Random starting position
    ball.x = Math.random() * (container.offsetWidth - ballSize);
    ball.y = Math.random() * (container.offsetHeight - ballSize);
    ball.style.left = `${ball.x}px`;
    ball.style.top = `${ball.y}px`;

    // Random velocity
    ball.vx = (Math.random() - 0.5) * 2; // Adjust for speed (e.g., * 5)
    ball.vy = (Math.random() - 0.5) * 2; // Adjust for speed

    container.appendChild(ball);
    balls.push(ball);
}

function updateBalls() {
    console.log("Updating balls...");
    for (const ball of balls) {
        ball.x += ball.vx;
        ball.y += ball.vy;

        // Bounce off the walls
        if (ball.x + ballSize > container.offsetWidth || ball.x < 0) {
            ball.vx *= -1;
        }
        if (ball.y + ballSize > container.offsetHeight || ball.y < 0) {
            ball.vy *= -1;
        }

        ball.style.left = `${ball.x}px`;
        ball.style.top = `${ball.y}px`;
    }

    requestAnimationFrame(updateBalls);
}

// Create the balls
for (let i = 0; i < numBalls; i++) {
    createBall();
}

// Start the animation loop
requestAnimationFrame(updateBalls);
});
``