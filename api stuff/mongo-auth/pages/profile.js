import Link from 'next/link';
import { useUser } from '../services/hooks';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';

export default function Profile() {
    const [user, setUser] = useState({})

    useEffect(() => {
        async function exec() {
            const user = await useUser();
            setUser(user);
        }
        exec();
    }, [])

    return (
        <Layout title="home">
        <div className={styles.container}>
            {
                user ?
                <>
                    <h1>Welcome {user.username}</h1> 
                    <p>You are registered as <strong>{user.type}</strong></p>
                    <Link href="/work-place"><a>view jobs</a></Link>
                </>
                :
                <h1>Access Denied</h1>
            }
            <style jsx>{`
                p {
                    color: grey;
                    margin: 1em 0;
                }
                a {
                    padding: 4px 9px;
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
        </div>
        </Layout>
    )
}
