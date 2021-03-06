// Types
import { Brick } from "~/objects/Brick";
import { Paddle } from "~/objects/Paddle";
import { Ball } from "~/objects/Ball";

export class CanvasView {
  canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D | null;
  private scoreDisplay: HTMLObjectElement | null;
  private start: HTMLObjectElement | null;
  private info: HTMLObjectElement | null;

  constructor(canvasName: string) {
    this.canvas = document.querySelector(canvasName) as HTMLCanvasElement;
    this.context = this.canvas.getContext("2d");
    this.scoreDisplay = document.querySelector("#score");
    this.start = document.querySelector("#start");
    this.info = document.querySelector("#info");
  }
  // Clear canvas method
  clear(): void {
    this.context?.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  // Init function
  initStartButton(startFunction: (view: CanvasView) => void): void {
    this.start?.addEventListener("click", () => startFunction(this));
  }
  // Draw score
  drawScore(score: number): void {
    if (this.scoreDisplay) this.scoreDisplay.innerHTML = score.toString();
  }
  // Draw info
  drawInfo(text: string): void {
    if (this.info) this.info.innerHTML = text;
  }
  // Draw objects
  drawObject(brick: Brick | Paddle | Ball): void {
    if (!brick) return;

    this.context?.drawImage(
      brick.image,
      brick.pos.x,
      brick.pos.y,
      brick.width,
      brick.height
    );
  }
  // Draw bricks
  drawBricks(bricks: Brick[]): void {
    bricks.forEach((brick) => this.drawObject(brick));
  }
}
