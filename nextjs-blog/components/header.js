import style from "./layout.module.css"
import Link from "next/link";

export default function Header() {
    return (
        <div className={style.header}>
            <Link href="/">
                <a>home</a>
            </Link>
        </div>
    )
}
