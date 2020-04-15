import {Component, Input, OnInit} from '@angular/core';
import {Pokemon, PokemonDetails} from '../pokemon';
import {PokemonService} from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  providers: [PokemonService],
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  @Input()
  matchingValue: String = '';

  pokemons: Pokemon[];
  data: PokemonDetails;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemons();
  }
  getPokemons():void {
    this.pokemonService.fetchPokemon().subscribe(pokemons => this.pokemons = pokemons);
        this.pokemons.forEach(pokemon => {
          this.getDetails(pokemon);
        });
      }
  getDetails(pokemon: Pokemon) {
    this.pokemonService.getPokemonDetails(pokemon.id).subscribe(data => this.data = data);
    console.log(this.data.id);
  }
}
