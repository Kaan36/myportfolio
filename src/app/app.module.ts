import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { IntersectionObserverComponent } from './intersection-observer/intersection-observer.component';
import { MainComponent } from './main/main.component';
import { MyContactComponent } from './my-contact/my-contact.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    MyWorkComponent,
    IntersectionObserverComponent,
    MainComponent,
    MyContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
