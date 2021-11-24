import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-project-first',
  templateUrl: './project-first.component.html',
  styleUrls: ['./project-first.component.scss']
})
export class ProjectFirstComponent implements OnInit, AfterViewInit {

  @ViewChild('image1') public image1: ElementRef;
  @ViewChild('image2') public image2: ElementRef;
  @ViewChild('image3') public image3: ElementRef;

  public indexValue: number = 1;

  constructor() {

  }
  ngAfterViewInit(): void {

    this.startSlider();
  }

  startSlider() {
    const imageOne = this.image1.nativeElement;
    const imageSecond = this.image2.nativeElement;
    const imageThird = this.image3.nativeElement;

    setTimeout(function () {
      imageOne.style.transform = 'translateX(-100%)';
      imageSecond.style.transform = 'translateX(0)';
      imageThird.style.transform = 'translateX(100%)';
      this.indexValue = 2;
    }, 3000)

    setTimeout(function () {
      imageOne.style.transform = 'translateX(-200%)';
      imageSecond.style.transform = 'translateX(-100%)';
      imageThird.style.transform = 'translateX(0%)';
      this.indexValue = 3;
    }, 6000)

    setTimeout(function () {
      imageOne.style.transform = 'translateX(0%)';
      imageSecond.style.transform = 'translateX(100%)';
      imageThird.style.transform = 'translateX(200%)';
      this.indexValue = 1;
    }, 9000)
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
