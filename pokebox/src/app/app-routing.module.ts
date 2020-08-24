import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children:[
      /* {
        path: '', component: PokemonListComponent,
      } */
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
