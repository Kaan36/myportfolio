import { Component, OnInit, ViewChild, ViewChildren, AfterViewInit, ElementRef, QueryList, asNativeElements, ContentChild, ContentChildren, AfterContentInit } from '@angular/core';
import { projects } from '../_interfaces/projects';
import { Card } from '../_interfaces/card';
import { skills } from '../_interfaces/skills';
import { boxes } from '../_interfaces/box';

@Component({
  selector: 'app-my-about',
  templateUrl: './my-about.component.html',
  styleUrls: ['./my-about.component.scss']
})
export class MyAboutComponent implements OnInit, AfterViewInit {


  @ViewChild('skill', { static: true }) public skill: any;
  @ViewChild('project', { static: true }) public project: any;

  projects: Card[] = projects;

  skills: any[] = skills;
  boxes: any[] = boxes;
  element: any;
  ratio: any;
  className: any;
  status: any;


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


