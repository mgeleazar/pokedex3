import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PokemonPageComponent} from './pokemon-page/pokemon-page.component';
import {PokemonItemComponent} from './pokemon-item/pokemon-item.component';

export const routes: Routes = [
  { path: 'pokemon', component: PokemonItemComponent},
  { path: 'pokemon/:id', component: PokemonPageComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
