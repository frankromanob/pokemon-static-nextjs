import Head from "next/head"

import { PropsWithChildren } from "react";
import { Navbar } from "../ui";

interface LosProps {
    title?:string;
}

export const Layout = ({children,title}:PropsWithChildren<LosProps>) => {
  return (
    <>
        <Head>
            <title>{ title || 'RomApps - Pokemon App'}</title>
            <meta name="author" content="Francisco Romano" />
            <meta name="description" content="Informacion sobre el pokemon xx" />
            <meta name="keywords" content="pokemon, pokedex, Romapps" />
        </Head>

        <Navbar/>

        <main>
            { children }
        </main>
    </>
  )
}
