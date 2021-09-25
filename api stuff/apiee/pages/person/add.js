import Link from "next/link";
import route from "next/router";
import { useState } from "react";
import Layout from "../../components/layout";
import styles from "../../styles/Home.module.css";

export default function Mongo() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const pushData = async e => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const name = e.target.name.value;
        const age = e.target.age.value;

        const res = await fetch('/api/person', {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                name, age
            })
        })
        const data = await res.json();
        setLoading(false);
        if (res.status === 201) {
            console.log(data)
            route.push('/person/get-ssr');
        }
        else if (res.status > 400 && res.status < 500) {
            console.log(res.status);
        }
        else {
            setError(data.message);
        }
    }

    return (
        <Layout title="add person">
        
            <h1>Now, Let's push data to the cloud database, say MongoDB</h1>

            <form action="/api/person" method="post" onSubmit={pushData} >
                <span>{error}</span>
                <input type="text" name="name" placeholder="name" required />
                <input type="number" name="age" placeholder="age" required />
                <button disabled={loading} type="submit">push data</button>
            </form>

            <div>
                <Link href="/person/get-ssr">
                    <a className={styles.link}>back</a>
                </Link>
                <Link href="/">
                    <a className={styles.link}>next</a>
                </Link>
            </div>

            <style jsx>{`
                form {
                    display: grid;
                    gap: .3em;
                    margin: 2em 0;
                    width: 250px;
                }
                span {
                    color: red;
                    margin: 1em 0;
                    text-align: center;
                }
            `}</style>

        </Layout>
    )

}