import { Injectable } from '@angular/core';
import {Pokemon} from "./pokemon";
import {POKEMONS} from "./mock-pokemon";

@Injectable()
export class PokemonService {

  constructor() { }

  getPokemonList(): Pokemon[] {
      return POKEMONS;
  }

  getPokemeonById(pokemonID: number): Pokemon|undefined{
      return POKEMONS.find(pokemon => pokemon.id == pokemonID);
  }

  // Amélioration à venir : Récupérer tous les types de pokémon, est supprimé les doublons afin de renvoyer une liste de type de pokémon dynamiquement.
  getPokemonTypeList(): string[]{
      return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol', 'Combat', 'Psy'];
  }

}
