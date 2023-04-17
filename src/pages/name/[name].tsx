import pokeApi from "@/api/pokeApi"
import { Layout } from "@/components/layouts"
import { Pokemon, PokemonListResp } from "@/interfaces"
import { getPokemonInfo, localFavorites } from "@/utils";
import { Button, Card, Container, Grid, Text, Image } from '@nextui-org/react';
import { GetStaticProps, GetStaticPaths, NextPage } from "next"
import { useEffect, useState } from "react";
import confetti from 'canvas-confetti'

interface props {
  pokemon: Pokemon
}

export const PokemonPageByName: NextPage<props> = ({ pokemon }) => {

  const [isInFavorites, setIsInFavorites] = useState(false)


  useEffect(() => {
    setIsInFavorites(localFavorites.existInFavorites(pokemon.id))
  }, [])


  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id)
    setIsInFavorites(!isInFavorites)

    function randomInRange(min:number, max:number) {
      return Math.random() * (max - min) + min;
    }

    if (!isInFavorites) {
      confetti({
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        particleCount: randomInRange(50, 100),
        origin: { y: 0.6}
      });
    }
  }

  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image src={pokemon.sprites.other?.dream_world.front_default || './no-image.png'}
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text h1 transform="capitalize">{pokemon.id} - {pokemon.name} </Text>
              <Button
                color="gradient"
                ghost={!isInFavorites}
                onPress={onToggleFavorite}>
                {isInFavorites ? 'En favoritos' : 'Guardar en favoritos'}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container direction="row" display="flex">
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={150}
                  height={150}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={150}
                  height={150}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={150}
                  height={150}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={150}
                  height={150}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
}



export const getStaticPaths: GetStaticPaths = async (context) => {



  const { data } = await pokeApi.get<PokemonListResp>('/pokemon?limit=649')
  const pokemon151 = [...Array(649)].map((value, index) => data.results[index].name);



  return {
    paths: pokemon151.map(name => ({
      params: { name }
    })),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ( {params} ) => {

  const { name } = params as { name: string }

  const pokemon=await getPokemonInfo(name)

  if (!pokemon){
    return{
      redirect:{
        destination:'/',
        permanent:false
      }
    }
  }

  return {
    props: {
      pokemon
    }
  }
}



export default PokemonPageByName