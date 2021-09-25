import useSWR from "swr";
import Link from "next/link";
import { useState } from "react";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

export default function person() {
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState("");

    const {_, error} = useSWR('/api/hello?name=karan+sharma', async url => {
        const res = await fetch(url);
        const data = await res.json();
        setLoading(false);
        setMessage(data.message);
        return data;
    })

    return (
        <Layout title="greetings">

            <h2>Let's call API from client-side</h2>
            <p> {!loading ? message : error ? "error occured!" : "please wait, loading!" } </p>
            
            <div>
                <Link href="/">
                    <a className={styles.link}>back</a>
                </Link>
                <Link href="/person/get-csr">
                    <a className={styles.link}>next</a>
                </Link>
            </div>

        </Layout>
    )
}
