import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, } from '@angular/core';
import { projects } from '../_interfaces/projects';
import { Card } from '../_interfaces/card';
import { skills } from '../_interfaces/skills';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-my-about',
  templateUrl: './my-about.component.html',
  styleUrls: ['./my-about.component.scss']
})
export class MyAboutComponent implements OnInit, AfterViewInit {


  @ViewChild('skill', { static: true }) public skill: any;
  @ViewChild('project', { static: true }) public project: any;
  @ViewChild('box1') public box1: ElementRef;
  @ViewChild('box2') public box2: ElementRef;
  @ViewChild('box3') public box3: ElementRef;
  @ViewChild('box4') public box4: ElementRef;
  @ViewChild('canvas') public canvas: ElementRef;


  projects: Card[] = projects;

  skills: any[] = skills;
  element: any;
  ratio: any;
  className: any;
  status: any;
  config: any;
  chart: any = [];

  mouseoverBox1() {
    let color = '#';
    color += Math.random().toString(16).slice(2, 8);
    this.box1.nativeElement.style.backgroundColor = color;
  }

  mouseleaveBox1() {
    this.box1.nativeElement.style.backgroundColor = '';
  }

  mouseoverBox2() {
    let color = '#';
    color += Math.random().toString(16).slice(2, 8);
    this.box2.nativeElement.style.backgroundColor = color;
  }

  mouseleaveBox2() {
    this.box2.nativeElement.style.backgroundColor = '';
  }

  mouseoverBox3() {
    let color = '#';
    color += Math.random().toString(16).slice(2, 8);
    this.box3.nativeElement.style.backgroundColor = color;
  }

  mouseleaveBox3() {
    this.box3.nativeElement.style.backgroundColor = '';
  }

  mouseoverBox4() {
    let color = '#';
    color += Math.random().toString(16).slice(2, 8);
    this.box4.nativeElement.style.backgroundColor = color;
  }

  mouseleaveBox4() {
    this.box4.nativeElement.style.backgroundColor = '';
  }


  constructor() {
    Chart.register(...registerables);

  }

  ngOnInit(): void {


    /*------------ chart js ------------------*/

    const labels = [
      'Javascript',
      'Typescript',
      'Angular',
      'Node.js',

    ];
    const data = {
      labels: labels,
      datasets: [{
        label: 'My First dataset',
        backgroundColor: [
          'rgba(255, 206, 86, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 99, 132, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)',
          'rgba(255, 159, 64, 0.8)'
        ],
        borderColor: [
          'rgba(255, 206, 86, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,
        data: [9, 3, 3, 0],
      }]
    };

    let delayed;
    this.config = {
      type: 'pie',
      data: data,
      options: {
        animation: {
          onComplete: () => {
            delayed = true;
          },
          delay: (context) => {
            let delay = 0;
            if (context.type === 'data' && context.mode === 'default' && !delayed) {
              delay = context.dataIndex * 300 + context.datasetIndex * 100;
            }
            return delay;
          },
        },
      
      }
    };


    Chart.overrides[this.config.type].plugins.legend.position = 'bottom';

    this.chart = new Chart(
      'canvas',
      this.config
    );
  }

  ngAfterViewInit(): void {

    /*---------------------------------- init page-transition --------------------------------------*/

    setTimeout(() => {
      this.skill.nativeElement.classList.add('open-skill');
      this.project.nativeElement.classList.add('open-project');
    }, 125)



  }

}


