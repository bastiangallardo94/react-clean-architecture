import {GetPokemonResult, PokemonLabelList} from "../../domain/interfaces";

interface PokemonApiToListParams {
    pokemonList: GetPokemonResult;
}

export const pokemonApiToList: (props: PokemonApiToListParams) => PokemonLabelList[] = (props) => {
    return props.pokemonList.results;
}
