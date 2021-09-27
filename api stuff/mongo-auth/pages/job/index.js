import { useEffect } from 'react';
import Route from 'next/router';
import { useUser } from '../../services/hooks';
import Layout from '../../components/layout';
import PostForm from '../../components/postForm';
import styles from '../../styles/Home.module.css';

export default function Home() {
    useEffect(() => {
        async function exec() {
            const user = await useUser()
            if (user.type === 'employee') Route.push('/profile');
        }
        exec();
    }, [])

  return (
    <Layout title="home">
      <div className={styles.container}>
        <h1>Post your Job</h1>
        <PostForm />
      </div>
    </Layout>
  )
}
