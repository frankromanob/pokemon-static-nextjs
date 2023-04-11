import { ActiveLink } from "./ActiveLink"
import styles from './Navbar.module.css'
import NextLink from 'next/link';
import { Text, Image, Link } from "@nextui-org/react";

export const Navbar = () => {

  const menuItems = [
    {
      text: 'Home',
      href: '/'
    },
    {
      text: 'Favoritos',
      href: '/favorites'
    },
  ];


  // const theMenu=menuItems.map((menuItem) =>
  //     <ActiveLink key={menuItem.href} text={menuItem.text} href={menuItem.href} />
  // )

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      padding: '0x 10px',
      backgroundColor: 'brown',
      alignItems: 'start',
      justifyContent: 'start'

    }}>
      <div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'start' }}>
          <Image
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png'
            alt='Icono de la web'
            width={60}
            height={60}
          />
          <NextLink href="/" passHref legacyBehavior>
            <Link>
                <Text color="white" h1>P</Text>
                <Text color="white" h3>okemon</Text>
            </Link>
          </NextLink>

        </div>
      </div>
      <div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <nav className={styles['menu-container']}>
            {
              menuItems.map((menuItem) =>
                <ActiveLink key={menuItem.href} text={menuItem.text} href={menuItem.href} />)
            }
          </nav>
        </div>
      </div>
    </div>
  )
}
