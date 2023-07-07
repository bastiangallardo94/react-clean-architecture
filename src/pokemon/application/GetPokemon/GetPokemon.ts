import {PokemonRepository} from "../../domain/repository";
import {PokemonLabelList} from "../../domain/interfaces";

export class GetPokemon {
    constructor( private readonly pokemonRepository: PokemonRepository) {}
    async run(): Promise<PokemonLabelList[]> {
        return await this.pokemonRepository.getPokemonList();
    }
}