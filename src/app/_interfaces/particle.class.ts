export class Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    color: string;
    mouseX: any;
    mouseY: any;
    hue: any;
    canvas: any;
    ctx: any;
    

    constructor(ctx, mouseX, mouseY, hue){
        this.x = mouseX;
        this.y = mouseY;
        this.size = Math.random() * 15 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = 'hsl(' + hue + ', 100%, 50%)';
        this.ctx = ctx;
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.1;
    }
    draw(){
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.ctx.fill();
    }
}
