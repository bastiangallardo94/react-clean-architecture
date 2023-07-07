import {useEffect, useState} from "react";
import {PokemonLabelList} from "../pokemon/domain/interfaces";
import {getPokemon} from "../pokemon/infracestructure/Dependencies.ts";

const UsePokemon = () => {

    const [pokemonList, setPokemonList] = useState<PokemonLabelList[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<null | string>(null);
    const executeGetPokemon = async () => {
        await getPokemon.run().then(pokemonGetList => {
            setPokemonList(pokemonGetList);
        })
    }

    useEffect(() => {

        executeGetPokemon()
            .catch(() => { setError( 'Fallo en obtener la solicitud' ) })
            .finally(() =>setLoading(false))


    }, [])

    return (
        { pokemonList, loading, error }
    );
};

export default UsePokemon;