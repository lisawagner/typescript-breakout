// Types
import { Brick } from "./objects/Brick";
import { Paddle } from "./objects/Paddle";
import { Ball } from "./objects/Ball";
import { CanvasView } from "./view/CanvasView";

export class Collisions {
  isCollidingBrick(ball: Ball, brick: Brick): boolean {
    if (
      ball.pos.x < brick.pos.x + brick.width &&
      ball.pos.x + ball.width > brick.pos.x &&
      ball.pos.y < brick.pos.y + brick.height &&
      ball.pos.y + ball.height > brick.pos.y
    ) {
      return true;
    }
    return false;
  }
  // Check ball collision with bricks
  isCollidingBricks(ball: Ball, bricks: Brick[]): boolean {
    let colliding = false;

    bricks.forEach((brick, i) => {
      if (this.isCollidingBrick(ball, brick)) {
        ball.changeYDirection();

        if (brick.energy === 1) {
          bricks.splice(i, 1);
        } else {
          brick.energy -= 1;
        }
        colliding = true;
      }
    });
    return colliding;
  }

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
