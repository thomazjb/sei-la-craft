import * as React from "react";
import { useSession, getSession } from "next-auth/react"
import Link from 'next/link'
import {useRouter} from "next/router";

export default function Wrapper(props)
{
    const { data: session, status } = useSession()
    const router = useRouter();

    if (status === "loading") {
        return <p>Loading...</p>
      }
    
    if ((session !== null && status === "authenticated") ||
        (router.pathname === "/" || router.pathname === '/register' || router.pathname === '/login'))
    {
        return (
            props.children
        )
    }

    if (status === "unauthenticated") {
        
        return (
            <>
            <h1>Você precisa se autenticar para ver esta página!</h1>

            <Link href='/login'>voltar ao login</Link>
            </>
        )
      }

}