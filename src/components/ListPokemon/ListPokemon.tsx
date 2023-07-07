import {Box, Grid, Typography} from "@mui/material";
import usePokemon from "../../Hooks/UsePokemon.tsx";


const ListPokemon = () => {

    const { pokemonList, loading, error} = usePokemon();

    if(error){
        return (
            <Box display="flex" flexDirection="column">
                <Typography variant="h2" align="center">{error}</Typography>
            </Box>
        )
    }


    if(loading){
        return (
            <Box display="flex" flexDirection="column">
                <Typography variant="h2" align="center">Loading...</Typography>
            </Box>
        )
    }


    return (
        <Box display="flex" flexDirection="column">
            <Grid item xs={12}>
                <Typography variant="h2" align="center">List Pokemon</Typography>
            </Grid>
           <Grid container spacing={2} direction="row" sx={{ marginTop:"50px"}}>
               {pokemonList.map(pokemon => (
                   <Grid item xs={3}>
                       <Typography variant="h5" align="center">{pokemon.name}</Typography>
                   </Grid>
               ))}
           </Grid>
        </Box>
    );
};

export default ListPokemon;