import Route from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useReset, useAuth } from "../services/hooks";

export default function Header() {
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        async function exec() {
            const auth = await useAuth();
            setAuth(auth);
        }
        exec();
    }, [])
    const logout = () => {
        useReset();
        Route.push('/login');
    }

    return (
        <header>
            {
                auth ?
                <>
                    <Link href="/profile"><a>profile</a></Link>
                    <Link href="/work-place"><a>work place</a></Link>
                    <a href="#" onClick={logout}>logout</a>
                </>
                :
                <>
                    <Link href="/login"><a>login</a></Link>
                    <Link href="/employee/register"><a>employee register</a></Link>
                    <Link href="/employer/register"><a>employer register</a></Link>
                </>
            }
            

            <style jsx>{`
                header {
                    display: flex;
                    margin: 1em;
                    justify-content: right;
                }
                a {
                    padding: 4px 9px;
                    margin: 5px 1em;
                    color: white;
                    background: #444;
                    border-radius: 4px;
                    transition: all .3s ease;
                }
                a:hover {
                    color: #444;
                    background: #FFF;
                    text-decoration: underline;
                }
            `}</style>
        </header>
    )
}
