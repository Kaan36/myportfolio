import { Component, OnInit, ViewChild, ViewChildren, AfterViewInit, ElementRef, QueryList } from '@angular/core';
import { projects } from '../_interfaces/projects';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit, AfterViewInit {

  @ViewChildren('element') public elements: QueryList<ElementRef>;
  @ViewChildren('bar') public bar: QueryList<ElementRef>;

  projects: any[] = projects;

  mouseoverBar(){
    let color = '#';
    color += Math.random().toString(16).slice(2, 8);
    this.bar.forEach(el =>
    el.nativeElement.style = 'background:' + color )
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    

    console.log(this.elements)
    const isTrigger = function (element, className) {
      return element.classList.contains(className);
    }
    const startAnimation = function (element, status) {
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
      element.style.opacity = ratio;

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
