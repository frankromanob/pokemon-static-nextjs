import Head from "next/head"

import { PropsWithChildren } from "react";
import { Navbar } from "../ui";


interface LosProps {
  title?: string;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const Layout = ({ children, title }: PropsWithChildren<LosProps>) => {


  return (
    <>
      <Head>
        <title>{title || 'RomApps - Pokemon App'}</title>
        <meta name="author" content="Francisco Romano" />
        <meta name="description" content={`Informacion sobre el pokemon ${title}`} />
        <meta name="keywords" content="pokemon, pokedex, Romapps" />

        <meta property="og:title" content={`Informacion sobre el pokemon ${title}`} />
        <meta property="og:description" content="Catalogo de Pokemon - Proyecto del curso de NextJs de Fernando Herrera en DevTalles" />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar />

      <main>
        {children}
      </main>
    </>
  )
}
