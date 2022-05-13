import { Injectable } from '@angular/core';
import {Pokemon} from "./pokemon";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Injectable()
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemonList(): Observable<Pokemon[]> {

      // return POKEMONS;
      return this.http.get<Pokemon[]>('api/pokemons').pipe(
          tap((response) => this.log(response)),
          catchError((error) => this.handleError(error,  []))
      );
  }

  getPokemeonById(pokemonID: number): Observable<Pokemon|undefined>{

      return this.http.get<Pokemon>(`api/pokemons/${pokemonID}`).pipe(
          tap((response) => this.log(response)),
          catchError((error) => this.handleError(error,  undefined))
      );
  }

  // Amélioration à venir : Récupérer tous les types de pokémon, est supprimé les doublons afin de renvoyer une liste de type de pokémon dynamiquement.
  getPokemonTypeList(): string[]{
      return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol', 'Combat', 'Psy'];
  }

  // CRUD POKEMONS ( Sur une vrai api avec un vrai serveur distant le null de 'Observable<Pokemon|null>' ne serais en réalité qu'un retour de l'objet.

  addPokemon(pokemon: Pokemon): Observable<Pokemon>{
      const httpOptions = {
          headers: new HttpHeaders({'Content-Type': 'application/json'})
      };

      return this.http.post<Pokemon>('api/pokemons', pokemon, httpOptions).pipe(
          tap((response) => this.log(response)),
          catchError((error) => this.handleError(error, null))
      );
  }

  updatepokemon(pokemon: Pokemon): Observable<Pokemon|null>{
      const httpOptions = {
          headers: new HttpHeaders({'Content-Type': 'application/json'})
      };

      return this.http.put('api/pokemons', pokemon, httpOptions).pipe(
        tap((response) => this.log(response)),
          catchError((error) => this.handleError(error, null))
      );
  }

  deletePokemonById(pokemonID: number):Observable<null>{
      return this.http.delete(`api/pokemons/${pokemonID}`).pipe(
          tap((response) => this.log(response)),
          catchError((error) => this.handleError(error, null))
      );
  }

  // Gestion des erreurs
  private log(response: any){
      console.table(response);
  }

  private handleError(error: Error, errorValue: any){
      console.error(error);
      return of(errorValue);
  }

  //Search
  searchPokemonList(term: string): Observable<Pokemon[]>{
      // empecher la recherche vide ou monoligne.
      if (term.length <= 1){
          return of([]);
      }
      return this.http.get<Pokemon[]>(`api/pokemons/?name=${term}`).pipe(
          tap((response) => this.log(response)),
          catchError((error) => this.handleError(error, []))
      );
  }


}
