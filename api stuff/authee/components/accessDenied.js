import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function AccessDenied() {
    return (
        <div className={styles.container}>
            <h1>Access Denied</h1>
            <p>Try logging in first!</p>
            <Link href="/">
                <a>Back to Home page</a>
            </Link>

            <style jsx>{`
                a {
                    padding: 4px 9px;
                    margin: 1em 0;
                    border: 1px solid black;
                    border-radius: 3px;
                }
                a:hover {
                    color: white;
                    background: black;
                }
            `}</style>
        </div>
    )
}
