import { Component, OnInit, ViewChild, ViewChildren, AfterViewInit, ElementRef, QueryList, asNativeElements, ContentChild, ContentChildren, AfterContentInit } from '@angular/core';
import { projects } from '../_interfaces/projects';
import { Card } from '../_interfaces/card';
import { skills } from '../_interfaces/skills';
import { boxes } from '../_interfaces/box';


@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit, AfterViewInit  {

  @ViewChildren('element') public elements: QueryList<ElementRef>;
    /*---------------------------- variables for page-transition --------------------------------*/
    @ViewChild('main', { static: true }) public main: any;
    @ViewChild('panelLeft', { static: true }) public panelLeft: any;
    @ViewChild('panelRight', { static: true }) public panelRight: any;
    @ViewChild('loadIcon', { static: true }) public loadIcon: any;
 
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
    this.main.nativeElement.classList.add('z-none');
    this.panelLeft.nativeElement.classList.add('open-left');
    this.panelRight.nativeElement.classList.add('open-right');
    this.loadIcon.nativeElement.classList.add('loadIcon-close');
  }, 1120)

    console.log(this.elements)
    const isTrigger = function (element, className) {
      return element.classList.contains(className);
    }
    const startAnimation = function(element, status) {
      if (status) {
        element.classList.add('animation');
      } else {
        element.classList.remove('animation');
      }
    }

    const generateThresholds = () => {
      const threshold = [];
      for (let i = 1; i < 101; i++) {
        threshold.push((i - 1) / 100);
      }
      return threshold;
    }

    const startMove = function (element: any, ratio: number) {
      element.style.opacity = ratio;
      element.style.transform = `rotate(${(360 * ratio)}deg)`;
  
    };
    const startOpacity = function (element: any, ratio: number) {
        element.style.opacity = (ratio/2);
    
    };

    const myObserver = new IntersectionObserver(elements => {
      elements.forEach(element => {

        if (isTrigger(element.target, 'first')) {
          startMove(element.target, element.intersectionRatio);
        }
        if (isTrigger(element.target, 'animated')) {
          startAnimation(element.target, element.isIntersecting);
        }
        if (isTrigger(element.target, 'opacity')) {
          startOpacity(element.target, element.intersectionRatio);
        }
      })
    }, {
      root: document.querySelector('#element'),
      rootMargin: '0px',
      threshold: generateThresholds()
    });

    
    this.elements.forEach(elm => {
    myObserver.observe(elm.nativeElement);
    });
  }


}