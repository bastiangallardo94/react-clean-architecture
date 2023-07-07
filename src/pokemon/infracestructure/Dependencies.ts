import {GetPokemon} from "../application/GetPokemon/GetPokemon.ts";
import {PokemonRepositoryImpl} from "./PokemonRepositoryImpl.ts";
import {GetPokemonById} from "../application/GetPokemon/GetPokemonById.ts";

const pokemonAxiosRepository = new PokemonRepositoryImpl()

export const getPokemon  = new GetPokemon(pokemonAxiosRepository);
export const getpokemonById  = new GetPokemonById(pokemonAxiosRepository);
