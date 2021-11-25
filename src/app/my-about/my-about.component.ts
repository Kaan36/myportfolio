import { Component, OnInit, ViewChild, ViewChildren, AfterViewInit, ElementRef, HostListener, QueryList } from '@angular/core';
import { projects } from '../_interfaces/projects';
import { Card } from '../_interfaces/card';
import { skills } from '../_interfaces/skills';

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

  projects: Card[] = projects;

  skills: any[] = skills;
  element: any;
  ratio: any;
  className: any;
  status: any;

  mouseoverBox1(){
    let color = '#';
    color += Math.random().toString(16).slice(2, 8);
    this.box1.nativeElement.style.backgroundColor = color;
  }

  mouseleaveBox1(){
    this.box1.nativeElement.style.backgroundColor = '';
  }

  mouseoverBox2(){
    let color = '#';
    color += Math.random().toString(16).slice(2, 8);
    this.box2.nativeElement.style.backgroundColor = color;
  }

  mouseleaveBox2(){
    this.box2.nativeElement.style.backgroundColor = '';
  }

  mouseoverBox3(){
    let color = '#';
    color += Math.random().toString(16).slice(2, 8);
    this.box3.nativeElement.style.backgroundColor = color;
  }

  mouseleaveBox3(){
    this.box3.nativeElement.style.backgroundColor = '';
  }

  mouseoverBox4(){
    let color = '#';
    color += Math.random().toString(16).slice(2, 8);
    this.box4.nativeElement.style.backgroundColor = color;
  }

  mouseleaveBox4(){
    this.box4.nativeElement.style.backgroundColor = '';
  }


  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    /*---------------------------------- init page-transition --------------------------------------*/

    setTimeout(() => {
      this.skill.nativeElement.classList.add('open-skill');
      this.project.nativeElement.classList.add('open-project');
    }, 125)

    

  }

}


