import { useEffect } from 'react';
import Route from 'next/router';
import { useAuth } from '../services/hooks';
import Layout from '../components/layout';
import LoginForm from '../components/loginForm';
import styles from '../styles/Home.module.css';

export default function Home() {
    useEffect(() => {
        async function exec() {
            if (await useAuth()) Route.push('/profile');
        }
        exec();
    }, [])

  return (
    <Layout title="home">
      <div className={styles.container}>
        <h1>Login Form</h1>
        <LoginForm />
      </div>
    </Layout>
  )
}
