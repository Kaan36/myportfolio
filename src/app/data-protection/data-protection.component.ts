import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-data-protection',
  templateUrl: './data-protection.component.html',
  styleUrls: ['./data-protection.component.scss']
})
export class DataProtectionComponent implements OnInit, AfterViewInit {

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
