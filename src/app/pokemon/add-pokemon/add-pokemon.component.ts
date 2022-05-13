import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../pokemon";

class pokemon extends Pokemon {
}

@Component({
  selector: 'app-add-pokemon',
  template: `
    <h2 class="center">Ajouter un pokémon</h2>
    <app-pokemon-form [pokemon]="pokemon"></app-pokemon-form>
  `,
})
export class AddPokemonComponent implements OnInit {

  pokemon: Pokemon;

  ngOnInit(){
    this.pokemon = new pokemon();
  }

}
