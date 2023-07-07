import {PokemonRepository} from "../../domain/repository";
import {PokemonLabelList} from "../../domain/interfaces";

export class GetPokemonById {
    constructor( private readonly pokemonRepository: PokemonRepository) {}
    run(id: string): PokemonLabelList {
        console.log(id)
        return this.pokemonRepository.find("pikachu");
    }
}