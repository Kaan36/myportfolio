import { Component, OnInit, ViewChild, ViewChildren, QueryList, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-simple-crm',
  templateUrl: './simple-crm.component.html',
  styleUrls: ['./simple-crm.component.scss']
})
export class SimpleCrmComponent implements OnInit, AfterViewInit {

  @ViewChild('image1') public image1: ElementRef;
  @ViewChild('image2') public image2: ElementRef;
  @ViewChild('image3') public image3: ElementRef;

/**
 * ---------------------- intersection Observer ------------------------------------
 */
  @ViewChildren('element') public elements: QueryList<ElementRef>;
  element: any;
  ratio: any;
  className: any;
  status: any;


  public indexValue: number = 1;

  constructor() {

  }
  ngAfterViewInit(): void {
    this.startSlider();

    /**
 * ---------------------- intersection Observer ------------------------------------
 */

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

  startSlider() {

    setTimeout(function () {
      this.image1.nativeElement.style.transform = 'translateX(-100%)';
      this.image2.nativeElement.style.transform = 'translateX(0)';
      this.image3.nativeElement.style.transform = 'translateX(100%)';
      this.indexValue = 2;

    }.bind(this), 3000)

    setTimeout(function () {
      this.image1.nativeElement.style.transform = 'translateX(-200%)';
      this.image2.nativeElement.style.transform = 'translateX(-100%)';
      this.image3.nativeElement.style.transform = 'translateX(0%)';
      this.indexValue = 3;
    }.bind(this), 6000)

    setTimeout(function () {
      this.image1.nativeElement.style.transform = 'translateX(0%)';
      this.image2.nativeElement.style.transform = 'translateX(100%)';
      this.image3.nativeElement.style.transform = 'translateX(200%)';
      this.indexValue = 1;
      console.log(this);
      this.startSlider();
    }.bind(this), 9000)
  }

  nextImg() {
    if (this.indexValue == 1) {
      this.showImg1();
      this.indexValue++;
    }
    else if (this.indexValue == 2) {
      this.showImg2();
      this.indexValue++;
    }
    else if (this.indexValue == 3) {
      this.showImg3();
      this.indexValue = 1;
    }
  }

  prevImg() {
    if (this.indexValue == 1) {
      this.showImg1();
      this.indexValue = 3;
    }
    else if (this.indexValue == 2) {
      this.showImg2();
      this.indexValue--;
    }
    else if (this.indexValue == 3) {
      this.showImg3();
      this.indexValue--;
    }
  }

  showImg1() {
    console.log('button1');
    this.image1.nativeElement.style = 'transform: translateX(-100%)';
    this.image2.nativeElement.style = 'transform: translateX(0)';
    this.image3.nativeElement.style = 'transform: translateX(100%)';
  }

  showImg2() {
    console.log('button2');
    this.image1.nativeElement.style = 'transform: translateX(-200%)';
    this.image2.nativeElement.style = 'transform: translateX(-100%)';
    this.image3.nativeElement.style = 'transform: translateX(0%)';
  }


  showImg3() {
    console.log('button3');
    this.image1.nativeElement.style = 'transform: translateX(0%)';
    this.image2.nativeElement.style = 'transform: translateX(100%)';
    this.image3.nativeElement.style = 'transform: translateX(200%)';
  }

  ngOnInit(): void {
  }

}
