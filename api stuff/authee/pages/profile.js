import { useSession } from "next-auth/client";
import { useEffect, useState } from "react";
import Layout from "../components/layout";
import AccessDenied from "../components/accessDenied";

export default function profile() {
    const [session, loading] = useSession();
    const [content, setContent] = useState('');

    //  fetching content from protected route
    useEffect(() => {
        fetch('/api/protected')
            .then(res => res.json())
            .then(data => {
                if (data.content) setContent(data.content)
                else setContent("content can't be reached")
            });
    }, [session]);

    // When rendering client side don't display anything until loading is complete
    if (typeof window !== 'undefined' && loading) return null

    // If no session exists, display access denied message
    if (!session) return  <Layout title="Access denied"><AccessDenied/></Layout>

    return (
        <Layout title="profile">
            <main>
                <h1>Welcome<br/>{session.user.name}</h1>
                <div id="img"><img height={100} width={100} src={session.user.image} alt="user img"/></div>
                <small>{content}</small>
            </main>
            <style jsx>{`
                main {
                    display: grid;
                    justify-content: center;
                    gap: 1em;
                    text-align: center;
                }
                img {
                    border-radius: 999px;
                    border: 1px solid black;
                }
            `}</style>
        </Layout>
    )
}   
