import Link from "next/link";
import { getPeople } from "../../lib/mongo";
import Layout from "../../components/layout";
import styles from "../../styles/Home.module.css";

export async function getServerSideProps(context) {
    console.log(context);
    const data = await getPeople();
    return {
        props: {
            data,
        }
    }
}

export default function Mongo({ data }) {

    return (
        <Layout title="get person">
        
            <h1>Now, Let's fetch data from cloud database, say MongoDB</h1>

            <p>{ data ? console.log(data.people) : "please wait, loading or maybe, error occured! try refreshing ~" }</p>

            <div>
                <Link href="/hello">
                    <a className={styles.link}>back</a>
                </Link>
                <Link href="/person/add">
                    <a className={styles.link}>next</a>
                </Link>
            </div>

        </Layout>
    )

}