import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{ PokemonService} from '../pokemon.service';
import{ Pokemon, PokemonDetails} from '../pokemon';



@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css']
})
export class PokemonPageComponent implements OnInit {
  public id;
  data: PokemonDetails;
  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) { }

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.getDetails();
  }
  getDetails() {
    this.pokemonService.getPokemonDetails(this.id).subscribe(data => this.data = data);
    console.log(this.data.id);
  }


}
