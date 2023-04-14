import {  Grid } from "@nextui-org/react"
import { FavoriteCardPokemon } from "../pokemon"


interface props {
    pokemonsFav: number[]
}

export const FavoritePokemons = ({pokemonsFav}: props) => {



    return (
        <Grid.Container gap={4} direction='row' justify='flex-start'>
            {
                pokemonsFav.map((index) => (
                  <FavoriteCardPokemon key={index} pokemonId={index} />
                ))
            }
        </Grid.Container>
    )
}
