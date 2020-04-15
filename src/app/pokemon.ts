export class Pokemon {
  constructor(public id: Number, public name: String, public url: String)  {}
}
export interface Results {
  name: string;
  url: string;
  id?: string;
  details?: PokemonDetails;
  description?: string;
}

export interface PokeAPI {
  count: number;
  next: string;
  results: Results[];
}

export interface PokemonDetails {
  name: string;
  id: number;
  sprites: Sprites;
  abilities?: Array<any>;
  types?: Array<Type>;
  height: number;
  weight: number;
}

export interface Sprites {
  front_default: string;
}
export interface Type {
  name: string;
  url?: string;
}