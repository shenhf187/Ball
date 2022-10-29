class Ball {
  constructor(x, y, velX, velY, color, size, exist) {
    this.x = x; // 球的圆心所在x轴位置
    this.y = y; // 球的圆心所在y轴位置
    this.velX = velX; // 球的x轴移动速度
    this.velY = velY; // 球的y方向移动速度
    this.color = color; // 球的颜色
    this.size = size; // 球的半径
    this.exist = exist; // 球是否存在
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.x, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }
  update(width, height) {
    if (this.x + this.size >= width || this.x - this.size <= 0) {
      this.velX = -this.velX;
    }
    if (this.y + this.size >= this.height || this.y - this.size <= 0) {
      this.velY = -this.velY;
    }
    this.x += this.velX;
    this.y += this.velY;
  }
  collisionDetect(balls, color) {
    for (let i = 0, len = balls.length; i < len; i++) {
      if (this !== balls[i]) {
        const dx = this.x - balls[i].x;
        const dy = this.y - balls[i].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < this.size + balls[i].size) {
          this.color = balls[i].color = color;
        }
      }
    }
  }
}

class Eater extends Ball {
  constructor(x, y, velX, velY, color, size, exist) {
    super(x, y, velX, velY, color, size, exist);
  }
  update() {
    if (this.x + this.size >= width || this.x - this.size <= 0) {
      this.velX -= this.size;
    }
    if (this.y + this.size >= this.height || this.y - this.size <= 0) {
      this.velY -= this.size;
    }
  }
  collisionDetect(balls) {
    for (let i = 0, len = balls.length; i < len; i++) {
      const dx = this.x - balls[i].x;
      const dy = this.y - balls[i].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < this.size + balls[i].size) {
        balls[i].exist = false;
      }
    }
  }
  setControl() {
    windows.addEventListener("keyup", (e) => {
      switch (e.code) {
        case "a":
          this.x -= this.velX;
          brake;
        case "d":
          this.x += this.velX;
          break;
        case "s":
          this.y += this.velY;
          break;
        case "w":
          this.y -= this.velY;
      }
    });
  }
}
