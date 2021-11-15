import { Component, OnInit, AfterViewInit, ViewChild, HostListener, ElementRef } from '@angular/core';
import { Particle } from '../_interfaces/particle.class';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas1', { static: true }) public canvasDoc: ElementRef<HTMLCanvasElement>;
  @ViewChild('title1', { static: true }) public titleElementDoc: any;
  /*---------------------------- variables for page-transition --------------------------------*/
  @ViewChild('main', { static: true }) public main: any;
  @ViewChild('panelLeft', { static: true }) public panelLeft: any;
  @ViewChild('panelRight', { static: true }) public panelRight: any;
  @ViewChild('loadIcon', { static: true }) public loadIcon: any;

  canvas: any;
  ctx: CanvasRenderingContext2D;
  particlesArray: any[] = [];
  title: any;
  particle: any;
  hue = 0;
  mouseX: any;
  mouseY: any;


  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.canvas.width = event.target.innerWidth;
    this.canvas.height = event.target.innerHeight;
  }

  @HostListener('mousemove', ['$event'])
  mousemove(event: any) {
    this.mouseX = event.x;
    this.mouseY = event.y;
    for (let i = 0; i < 5; i++) {
      this.particlesArray.push(new Particle(this.ctx, this.mouseX, this.mouseY, this.hue));
    }

  }

  constructor() { }

  ngOnInit(): void {
    this.canvas = this.canvasDoc.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.particlesArray = [];
  }

  ngAfterViewInit() {
    /*---------------------------------- init page-transition --------------------------------------*/
    setTimeout(() => {
      this.main.nativeElement.classList.add('z-none');
      this.panelLeft.nativeElement.classList.add('open-left');
      this.panelRight.nativeElement.classList.add('open-right');
      this.loadIcon.nativeElement.classList.add('loadIcon-close');
    }, 1110)
 
    this.animate();
  }

  handleParticles() {
    for (let i = 0; i < this.particlesArray.length; i++) {
      this.particlesArray[i].update();
      this.particlesArray[i].draw(this.ctx);
      for (let j = i; j < this.particlesArray.length; j++) {
        const dx = this.particlesArray[i].x - this.particlesArray[j].x;
        const dy = this.particlesArray[i].y - this.particlesArray[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 100) {
          this.ctx.beginPath();
          this.ctx.strokeStyle = this.particlesArray[i].color;
          this.ctx.lineWidth = 0.2;
          this.ctx.moveTo(this.particlesArray[i].x, this.particlesArray[i].y);
          this.ctx.lineTo(this.particlesArray[j].x, this.particlesArray[j].y);
          this.ctx.stroke();
          this.ctx.closePath();
        }
      }
      if (this.particlesArray[i].size <= 0.3) {
        this.particlesArray.splice(i, 1);
        i--;
      }
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    //ctx.fillStyle = 'rgba(0,0,0,0.02)';
    //ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.handleParticles();
    this.hue += 2;
    let self = this;
    requestAnimationFrame(() => {
      self.animate();
    });
  }


}
