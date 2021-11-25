import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent implements OnInit, AfterViewInit {

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