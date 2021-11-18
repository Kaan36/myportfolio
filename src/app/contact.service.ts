import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formular } from './_interfaces/formular';

@Injectable({
  providedIn: 'root'
})
export class ContactService { 
  
  constructor(private httpClient: HttpClient) { }

  getForm(contactUrl: string): Observable<Formular[]>{
    let response = this.httpClient.get<Formular[]>(contactUrl);
    return response;
  }

  sendForm(contactUrl: string, form: Formular): Observable<Formular>{
    let request = this.httpClient.post<Formular>(contactUrl, form);
    return request;
  }

}
