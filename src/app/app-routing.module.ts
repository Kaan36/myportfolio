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
