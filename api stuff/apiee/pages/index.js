import Layout from "../components/layout";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  //  this will be pre-rendered on server-side
  useEffect(() => {
    fetch('/api/hello?name=karan', {
      method: "POST"
    })
    .then(res => res.json())
    .then(data => setMessage(data.message))
    .finally(() => setLoading(false))
  }, []);

  return (
    <Layout title="API stuff">

      <h1>So i'm working with API now, it's nextJs thing 🙃</h1>
      <h2> { loading ? "please wait, fetching data ..." : message  } </h2>

      <Link href="/hello"><a className={styles.link}>next</a></Link>
      
    </Layout>
  )
}
