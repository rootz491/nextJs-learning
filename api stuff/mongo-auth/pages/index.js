import Layout from '../components/layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout title="home">
      <div className={styles.container}>
        <h1>Hello World!</h1>
      </div>
    </Layout>
  )
}
