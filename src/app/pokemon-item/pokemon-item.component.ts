import {Component, Input, OnInit} from '@angular/core';
import {Pokemon,PokemonDetails} from '../pokemon';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css']
})
export class PokemonItemComponent implements OnInit {
  @Input()
  pokemon: Pokemon;
  data: PokemonDetails;

  constructor() { }

  ngOnInit() {
  }

}
