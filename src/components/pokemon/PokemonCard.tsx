import { SmallPokemon } from "@/interfaces"
import { Grid, Card, Row, Text } from "@nextui-org/react"
import { useRouter } from 'next/router';

interface props {
    pokemon: SmallPokemon
}
export const PokemonCard = ({ pokemon }: props) => {

    const router = useRouter();

    const onClick = () => {
        router.push(`/pokemon/${pokemon.id}`)
    }


    return (
        <Grid xs={4} sm={3} md={2} xl={1} key={pokemon.name}>
            <Card
                isPressable
                isHoverable
                variant="bordered"
                onClick={onClick}
            >
                <Card.Header>
                    <Row justify='space-between'>
                        <Text>No.{pokemon.id}</Text>
                        <Text transform='capitalize'>{pokemon.name}</Text>
                    </Row>
                </Card.Header>
                <Card.Body css={{ p: 1 }}>
                    <Card.Image
                        src={pokemon.img}
                        alt={pokemon.name}
                        height={150}
                        width="100%" />
                </Card.Body>
            </Card>
        </Grid>
    )
}
