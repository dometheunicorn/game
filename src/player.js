export default class Player {
  constructor(gameWidth, gameHeight) {
    this.w = 20;
    this.h = 80;
    this.pos = {
      x: gameWidth/2,
      y: gameHeight/2,
    }
  }

  draw(ctx) {
    ctx.fillRect(this.pos.x,this.pos.y,this.w,this.h)
  }
}
