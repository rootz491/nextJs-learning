import Header from "./header";
import Head from "next/head";
import styles from "../styles/Home.module.css";


export default function Layout(props) {
    return (
        <div>
            <Head>
                <title>{props.title}</title>
            </Head>
            <Header />
            <div className={styles.container}>{props.children}</div>
        </div>
    )
}
