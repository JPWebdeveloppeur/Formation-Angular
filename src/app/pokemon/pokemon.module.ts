import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListPokemonComponent} from "./list-pokemon/list-pokemon.component";
import {DetailPokemonComponent} from "./detail-pokemon/detail-pokemon.component";
import {BorderCardDirective} from "./border-card.directive";
import {PokemeonTypeColorPipe} from "./pokemeon-type-color.pipe";
import {RouterModule, Routes} from "@angular/router";
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";
import {PokemonService} from "./pokemon.service";

const pokemonRoutes: Routes = [
    { path: 'pokemons', component: ListPokemonComponent },
    { path: 'pokemon/:id', component: DetailPokemonComponent },
];

@NgModule({
  declarations: [
      ListPokemonComponent,
      DetailPokemonComponent,
      BorderCardDirective,
      PokemeonTypeColorPipe
  ],
  imports: [
    CommonModule,
      RouterModule.forChild(pokemonRoutes)
  ],
  providers: [PokemonService]
})
export class PokemonModule { }
