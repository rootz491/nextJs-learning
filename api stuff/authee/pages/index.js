import styles from "../styles/Home.module.css";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout title="home">
		<div className={styles.container}>
			<h1>hello world</h1>
		</div>
    </Layout>
  )
}
