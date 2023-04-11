import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties } from "react";


const style_selected:CSSProperties ={
    color:'#000000',
    textDecoration: 'underline'
}

const style_normal:CSSProperties ={
    color:'white'
}

export const ActiveLink = (props: { href: string ; text: string }) => {

const {asPath} = useRouter();

  return (
    <Link style={asPath===props.href ? style_selected: style_normal} href={props.href}>
        {props.text}
    </Link>
  )
}
