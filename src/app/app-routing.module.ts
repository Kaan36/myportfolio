import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { MyContactComponent } from './my-contact/my-contact.component';
import { MyAboutComponent } from './my-about/my-about.component';
import { ProjectFirstComponent } from './project-first/project-first.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { TictactoeComponent } from './tictactoe/tictactoe.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { ImprintComponent } from './imprint/imprint.component';
import { AgbComponent } from './agb/agb.component';
import { HotelBookingComponent } from './hotel-booking/hotel-booking.component';
import { CanvasParticleComponent } from './canvas-particle/canvas-particle.component';
import { CalculatorJsComponent } from './calculator-js/calculator-js.component';
import { CanvasStrokeComponent } from './canvas-stroke/canvas-stroke.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { PersonalTodoComponent } from './personal-todo/personal-todo.component';
import { IntersectionObserverComponent } from './intersection-observer/intersection-observer.component';
import { SimpleCrmComponent } from './simple-crm/simple-crm.component';

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
  {
    path: 'pokedex', component: PokedexComponent
  },
  {
    path: 'tictactoe', component: TictactoeComponent
  },
  {
    path: 'bitcoin', component: BitcoinComponent
  },
  {
    path: 'hotel-booking', component: HotelBookingComponent
  },
  {
    path: 'canvas-particle', component: CanvasParticleComponent
  },
  {
    path: 'calculator-js', component: CalculatorJsComponent
  },
  {
    path: 'canvas-stroke', component: CanvasStrokeComponent
  },
  {
    path: 'image-gallery', component: ImageGalleryComponent
  },
  {
    path: 'personal-todo', component: PersonalTodoComponent
  },
  {
    path: 'intersection-observer', component: IntersectionObserverComponent
  },
  {
    path: 'simple-crm', component: SimpleCrmComponent
  },
  {
    path: 'data-protection', component: DataProtectionComponent
  },
  {
    path: 'imprint', component: ImprintComponent
  },
  {
    path: 'agb', component: AgbComponent
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
