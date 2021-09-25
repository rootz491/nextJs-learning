import Link from "next/link";
import Layout from "../../components/layout";
import styles from "../../styles/Home.module.css";
import { getPeople } from "../../middleware/crud";

//  fetching thru function and NOT thru api.
export async function getServerSideProps(context) {
    const {people} = await getPeople();
    return {
        props: {
            people: JSON.stringify(people)
        }
    }
}

export default function Mongo({people}) {
    return (
        <Layout title="get person">
        
            <h1>Now, Let's fetch data from cloud database, say MongoDB</h1>

            <div className="personWrapper">{ people ? (
                JSON.parse(people).map((p, i) => (
                    <div key={i} className="person">
                        <h3>Name: {p.name}</h3>
                        <p>Age: {p.age}</p>
                    </div>
                ))
            ) : "please wait, loading or maybe, error occured! try refreshing ~" }</div>

            <div>
                <Link href="/people/get-csr">
                    <a className={styles.link}>back</a>
                </Link>
                <Link href="/person/add">
                    <a className={styles.link}>next</a>
                </Link>
            </div>

            <style jsx>{`
                .person {
                    color: blue;
                    border: 2px solid lightblue;
                    padding: .3em .5em;
                }
                .personWrapper {
                    margin: 2em auto;
                    display: grid;
                    gap: .2em;
                    grid-template-columns: minmax(100px, max-content) repeat(auto-fill, 200px) 20%;
                }
            `}</style>

        </Layout>
    )

}