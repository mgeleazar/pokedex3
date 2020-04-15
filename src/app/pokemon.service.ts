import { Injectable } from '@angular/core';
import {Pokemon, PokemonDetails} from './pokemon';
import {Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/internal/operators';

interface PokemonSpecies {
  name: string;
}
interface PokedexEntry {
  entry_number: number;
  pokemon_species: PokemonSpecies;
  url: String;
}

interface Pokedex {
  pokemon_entries: PokedexEntry[];
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokeAPI:string = 'https://pokeapi.co/api/v2/pokemon';
  constructor(private http: HttpClient) { }

   fetchPokemon(): Observable<Pokemon[]> {
      return this.http
        .get<Pokedex>('https://pokeapi.co/api/v2/pokedex/1/')
        .pipe(
          map(pokedex =>
            pokedex.pokemon_entries
              .slice(0, 721)
              .map((pokedexEntry: PokedexEntry) => new
              Pokemon(pokedexEntry.entry_number, pokedexEntry.pokemon_species.name, pokedexEntry.url)))
        );
  }
  getPokemonDetails(id): Observable<PokemonDetails> {
    return this.http
      .get<PokemonDetails>(`${this.pokeAPI}/${id}`)
}
}
