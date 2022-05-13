import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../pokemon";
import {Router} from "@angular/router";
import {Observable, Subject} from "rxjs";
import {debounceTime, distinctUntilChanged, switchMap} from "rxjs/operators";
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
})
export class SearchPokemonComponent implements OnInit {

   // flux de recherche ex: {..."a".."ab"..."abz".."ab"..."abc"......}
  searchsTerms = new Subject<string>();

  // flux de donnée miroir qui du coup arrivent dans le tempt et ce qui nous permet de construire le flux de données ex : {...pokemonList(a)....pokemonList(ab).....}
  pokemons$ : Observable<Pokemon[]>;

  constructor(
      private router: Router,
      private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
      this.pokemons$ = this.searchsTerms.pipe(
          debounceTime(300),
          distinctUntilChanged(),
          //deprecated voir ce qui le remplace sur les versions suivante
          switchMap((term) => this.pokemonService.searchPokemonList(term))
      )
  }

  search(term: string){
    this.searchsTerms.next(term);
  }

  goToDetail(pokemon: Pokemon){
      const link = ['/pokemon', pokemon.id];
      this.router.navigate(link);
  }

}
