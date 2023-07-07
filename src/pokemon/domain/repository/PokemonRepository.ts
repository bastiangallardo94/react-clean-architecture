import {PokemonLabelList} from "../interfaces";

export interface PokemonRepository {

   getPokemonList(): Promise<PokemonLabelList[]>;
   find(id: string): PokemonLabelList;

}