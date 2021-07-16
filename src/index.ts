import { CanvasView } from "./view/CanvasView";
import { Ball } from "./objects/Ball";
import { Brick } from "./objects/Brick";
import { Paddle } from "./objects/Paddle";
import { Collisions } from "./Collisions";
// images
import PADDLE_IMAGE from "./images/paddle.png";
import BALL_IMAGE from "./images/ball.png";
// level and colors
import {
  PADDLE_SPEED,
  PADDLE_HEIGHT,
  PADDLE_WIDTH,
  PADDLE_STARTX,
  BALL_SPEED,
  BALL_SIZE,
  BALL_STARTX,
  BALL_STARTY,
} from "./setup";
// Helpers
import { createBricks } from "./helpers";

let gameOver = false;
let score = 0;

function setGameOver(view: CanvasView) {
  view.drawInfo("Game Over!");
  gameOver = false;
}

function setGameWin(view: CanvasView) {
  view.drawInfo("Winner!");
  gameOver = false;
}

function gameLoop(
  view: CanvasView,
  bricks: Brick[],
  paddle: Paddle,
  ball: Ball,
  collision: Collisions
) {
  view.clear();
  view.drawBricks(bricks);
  view.drawObject(paddle);
  view.drawObject(ball);

  //   Ball Movement
  ball.moveBall();

  //   Constrain Paddle to playfield
  if (
    (paddle.isMovingLeft && paddle.pos.x > 0) ||
    (paddle.isMovingRight && paddle.pos.x < view.canvas.width - paddle.width)
  ) {
    paddle.movePaddle();
  }

  //   Ball Collisions
  collision.checkBallCollision(ball, paddle, view);

  requestAnimationFrame(() => gameLoop(view, bricks, paddle, ball, collision));
}

function startGame(view: CanvasView) {
  // Reset display
  score = 0;
  view.drawInfo("");
  view.drawScore(0);
  //   Create collisions instance
  const collision = new Collisions();
  // Create bricks
  const bricks = createBricks();
  //   Create ball
  const ball = new Ball(
    BALL_SPEED,
    BALL_SIZE,
    { x: BALL_STARTX, y: BALL_STARTY },
    BALL_IMAGE
  );
  //   Create paddle
  const paddle = new Paddle(
    PADDLE_SPEED,
    PADDLE_WIDTH,
    PADDLE_HEIGHT,
    {
      x: PADDLE_STARTX,
      y: view.canvas.height - PADDLE_HEIGHT - 5,
    },
    PADDLE_IMAGE
  );

  gameLoop(view, bricks, paddle, ball, collision);
}

// Create a new view
const view = new CanvasView("#playField");
view.initStartButton(startGame);
