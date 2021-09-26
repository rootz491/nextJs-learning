import { useSession, signIn, signOut } from "next-auth/client";
import styles from "../styles/Header.module.css";
import Link from "next/link";

export default function Header() {
    const [session, loading] = useSession();

    return (
        <header className={styles.header}>
            <div className={styles.btns}>
            {
                !loading && session ?
                    <>
                        <span className={styles.avatar}><Link href="profile"><a><img src={session.user.image} alt="avatar" /></a></Link></span>
                        <a 
                            href={`/api/auth/signOut`}
                            onClick={e => {
                                e.preventDefault();
                                signOut();
                            }}
                        >
                            sign out
                        </a>
                    </>
                :
                    <a 
                    href={`/api/auth/signIn`}
                    onClick={e => {
                        e.preventDefault();
                        signIn();
                    }}
                    >
                        sign in
                    </a>
            }
            </div>
        </header>
    )
}

/**
 * http://localhost:5000/auth/callback?error=redirect_uri_mismatch&error_description=The+redirect_uri+MUST+match+the+registered+callback+URL+for+this+application.&error_uri=https%3A%2F%2Fdocs.github.com%2Fapps%2Fmanaging-oauth-apps%2Ftroubleshooting-authorization-request-errors%2F%23redirect-uri-mismatch&state=55dcdf5724163860d54ca1e155e855a4086ae0063ffe3f7d89a5cda8eaa43597
 */