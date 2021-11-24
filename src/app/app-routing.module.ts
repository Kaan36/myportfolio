import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { MyContactComponent } from './my-contact/my-contact.component';
import { MyAboutComponent } from './my-about/my-about.component';
import { ProjectFirstComponent } from './project-first/project-first.component';

const routes: Routes = [
  {
    path: 'main', component: MainComponent
  },
  {
    path: '', redirectTo: 'main', pathMatch: 'full'
  },
  {
    path: 'about', component: MyAboutComponent
  },
  {
    path: 'work', component: MyWorkComponent
  },
  {
    path: 'contact', component: MyContactComponent
  },
  {
    path: 'flow', component: ProjectFirstComponent
  },
]

@NgModule({
  imports: [
  RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
