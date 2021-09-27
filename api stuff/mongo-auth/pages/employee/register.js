import SignupForm from '../../components/signupForm';
import Layout from '../../components/layout';
import styles from '../../styles/Home.module.css';

export default function Home() {
  return (
    <Layout title="Employee Register">
      <div className={styles.container}>
        <h1>Employee Register</h1>
        <SignupForm type="employee" />
      </div>
    </Layout>
  )
}
