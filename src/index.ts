import { CanvasView } from "./view/CanvasView";
import { Ball } from "./objects/Ball";
import { Brick } from "./objects/Brick";
import { Paddle } from "./objects/Paddle";
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
  padde: Paddle,
  ball: Ball
) {}

function startGame(view: CanvasView) {}

// Create a new view
const view = new CanvasView("#playField");
view.initStartButton(startGame);
