import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Formular } from '../_interfaces/formular';
import { ContactService } from '../contact.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-my-contact',
  templateUrl: './my-contact.component.html',
  styleUrls: ['./my-contact.component.scss']
})
export class MyContactComponent implements OnInit, AfterViewInit, FormsModule {

  /*---------------------------- variables for page-transition --------------------------------*/
  @ViewChild('main', { static: true }) public main: any;
  @ViewChild('panelLeft', { static: true }) public panelLeft: any;
  @ViewChild('panelRight', { static: true }) public panelRight: any;
  @ViewChild('loadIcon', { static: true }) public loadIcon: any;
  @ViewChild('contactForm', { static: true }) public contactForm: any;
  @ViewChild('flipCardInner', { static: true }) public flipCardInner: any;

  surname: string;
  nickname: string;
  email: string;
  company: string;
  projectHeader: string;
  project: string;
  form: Formular;
  id: number;
  idValue: number;

  formular: Formular[];


  constructor(private contactService: ContactService) { }

  contactUrl: string = '/api/form';

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

  }

  onSubmit() {
    this.idValue = 1 + Math.random() * 10;

    this.form = {
      id: this.idValue,
      surname: this.surname,
      nickname: this.nickname,
      email: this.email,
      company: this.company,
      projectHeader: this.projectHeader,
      project: this.project,
    };

    this.contactService.sendForm(this.contactUrl, this.form).subscribe();
    this.getForm();
    this.flipCard();
  }

  getForm() {
    this.contactService.getForm(this.contactUrl).subscribe((result) => {
      this.formular = result;
      console.log('getForm vom Server: ', this.formular);
    });
  }

  flipCard() {
    this.flipCardInner.nativeElement.classList.add('flipCardTurn');
  }

}
