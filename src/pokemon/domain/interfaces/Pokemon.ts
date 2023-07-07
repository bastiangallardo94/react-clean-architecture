export interface GetPokemonResult {
    count: number;
    next: string;
    previous: string;
    results: PokemonLabelList[];
}

export interface PokemonLabelList {
    name: string;
    url: string;
}