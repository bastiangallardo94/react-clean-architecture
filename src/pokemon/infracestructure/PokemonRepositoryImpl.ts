import {PokemonRepository} from "../domain/repository";
import {GetPokemonResult, PokemonLabelList,} from "../domain/interfaces";
import axios from "axios";
import {pokemonApiToList} from "./adapter/PokemonApiToList.ts";

export class PokemonRepositoryImpl implements PokemonRepository {
    async getPokemonList(): Promise<PokemonLabelList[]> {
        console.log('con axios')
        const pokemonList        = await axios.get<GetPokemonResult>("https://pokeapi.co/api/v2/pokemon?limit=20");
        return pokemonApiToList({pokemonList: pokemonList.data});
    }
    find(id: string): PokemonLabelList{
        console.log(id)
        return { name: 'pikachu', url: "acasf" }
    }
}