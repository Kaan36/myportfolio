import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { MyContactComponent } from './my-contact/my-contact.component';

const routes: Routes = [
  {
    path: 'main', component: MainComponent
  },
  {
    path: '', redirectTo: 'main', pathMatch: 'full'
  },
  {
    path: 'work', component: MyWorkComponent
  },
  {
    path: 'contact', component: MyContactComponent
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
