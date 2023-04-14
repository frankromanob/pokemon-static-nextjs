import { Grid, Card } from "@nextui-org/react";
import { useRouter } from "next/router";

interface props{
    pokemonId:number
}
export const FavoriteCardPokemon = ({pokemonId}: props) => {


    const router = useRouter();

    const onClickHandler = () => {
        router.push(`/pokemon/${pokemonId}`)
    }

    return (
        <Grid xs={6} sm={3} md={2} xl={1} key={pokemonId}>
            <Card
                isHoverable
                isPressable
                variant="bordered"
                onClick={onClickHandler}
                css={{ m: 2, p: 10, justify: 'space-between' }}
            >
                <Card.Body >
                    <Card.Image
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
                        alt="Pokemon id"
                        height='150px'
                        width='150px'
                    />
                </Card.Body>
            </Card>
        </Grid>
    )
}
