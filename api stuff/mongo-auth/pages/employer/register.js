import SignupForm from '../../components/signupForm';
import Layout from '../../components/layout';
import styles from '../../styles/Home.module.css';

export default function Home() {
  return (
    <Layout title="Employer Register">
      <div className={styles.container}>
        <h1>Employer Register</h1>
        <SignupForm type="employer" />
      </div>
    </Layout>
  )
}
