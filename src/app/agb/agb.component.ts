import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-agb',
  templateUrl: './agb.component.html',
  styleUrls: ['./agb.component.scss']
})
export class AgbComponent implements OnInit, AfterViewInit {

  @ViewChild('skill', { static: true }) public skill: any;
  @ViewChild('project', { static: true }) public project: any;

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
