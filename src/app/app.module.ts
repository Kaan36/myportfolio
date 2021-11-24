import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { IntersectionObserverComponent } from './intersection-observer/intersection-observer.component';
import { MainComponent } from './main/main.component';
import { MyContactComponent } from './my-contact/my-contact.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { MyAboutComponent } from './my-about/my-about.component';
import { ProjectFirstComponent } from './project-first/project-first.component';
import { AngularTiltModule } from 'angular-tilt';


@NgModule({
  declarations: [
    AppComponent,
    MyWorkComponent,
    IntersectionObserverComponent,
    MainComponent,
    MyContactComponent,
    MyAboutComponent,
    ProjectFirstComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: true}),
    AngularTiltModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
