import { Layout } from "@/components/layouts"
import { NoFavorites } from "@/components/ui"
import { useState, useEffect } from "react"
import { localFavorites } from "@/utils"
import { FavoritePokemons } from "@/components/ui";


export const FavoritesPage = () => {

  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritesPokemons(localFavorites.pokemons())
  }, [])


  return (
    <Layout title="Favorites Pokemons" >
      {
        favoritesPokemons.length === 0
          ? (<NoFavorites />)
          : (<FavoritePokemons pokemonsFav={favoritesPokemons}/>)
      }
    </Layout>
  )
}

export default FavoritesPage