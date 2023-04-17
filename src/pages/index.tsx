import { GetStaticProps } from 'next'
import { Grid } from "@nextui-org/react";
import { Layout } from '@/components/layouts'
import { pokeApi } from '@/api'
import { PokemonListResp, SmallPokemon } from '@/interfaces'
import { PokemonCard } from '@/components/pokemon';

interface props {
  pokemons: SmallPokemon[]
}

export default function HomePage(props: props) {
  return (
    <Layout title='RomApps - Listado de Pokemons'>
      <>
        <Grid.Container gap={4} justify='flex-start'>
          {
            props.pokemons.map((pokemon) => (
              <PokemonCard key={pokemon.name} pokemon={pokemon} />
            ))
          }
        </Grid.Container>
      </>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {

  const { data } = await pokeApi.get<PokemonListResp>('/pokemon?limit=649')

  const pokemons: SmallPokemon[] =
    data.results.map(
      (poke, index) => ({
        name: poke.name,
        url: poke.url,
        id: index + 1,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`
      })
    );



  return {
    props: {
      pokemons: pokemons
    },
    revalidate:86400
  }
}
