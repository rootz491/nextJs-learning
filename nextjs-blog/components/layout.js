import Head from "next/head";
import style from './layout.module.css';
import Footer from "./footer";
import Header from "./header";

export default function Layout(props) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>{props.title}</title>
                <meta
                name="description"
                content="Learning how to build a personal website using Next.js"
                />
            </Head>

            <div className={style.container}>
                { props.home ? null : <Header/> }
                
                <div className={style.main}>
                    {props.children}
                </div>

                { props.home ? null : <Footer/> }
            </div>
        </>
    )
}
