import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-my-contact',
  templateUrl: './my-contact.component.html',
  styleUrls: ['./my-contact.component.scss']
})
export class MyContactComponent implements OnInit, AfterViewInit {

  /*---------------------------- variables for page-transition --------------------------------*/
  @ViewChild('main', { static: true }) public main: any;
  @ViewChild('panelLeft', { static: true }) public panelLeft: any;
  @ViewChild('panelRight', { static: true }) public panelRight: any;
  @ViewChild('loadIcon', { static: true }) public loadIcon: any;

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
    }, 1500)
  }


}
