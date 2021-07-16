// Types
import { Brick } from "./objects/Brick";
import { Paddle } from "./objects/Paddle";
import { Ball } from "./objects/Ball";
import { CanvasView } from "./view/CanvasView";

export class Collisions {
  checkBallCollision(ball: Ball, paddle: Paddle, view: CanvasView): void {
    // Check ball collision with paddle
    if (
      ball.pos.x + ball.width > paddle.pos.x &&
      ball.pos.x < paddle.pos.x + paddle.width &&
      ball.pos.y + ball.height === paddle.pos.y
    ) {
      ball.changeYDirection();
    }
    // Check ball collision with viewport
    if (ball.pos.x > view.canvas.width - ball.width || ball.pos.x < 0) {
      ball.changeXDirection();
    }
    if (ball.pos.y < 0) {
      ball.changeYDirection();
    }
  }
}
