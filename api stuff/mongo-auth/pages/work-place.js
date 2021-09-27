import Route from 'next/router';
import { useUser } from '../services/hooks';
import { fetchJobs } from '../services/methods';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import JobTable from '../components/jobTable';

export default function Profile() {
    const [user, setUser] = useState({});
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function exec() {
            // fetch user
            const user = await useUser();
            setUser(user);
            // if user is valid
            if (user) {
                setLoading(false);
                // fetch job
                const jobs = await fetchJobs();
                setJobs(jobs);
            }
            else Route.push('/');
        }
        exec();
    }, [])

    return (
        <Layout title="Work Place">
        <div className={styles.container}>
            {
                user && !loading ?
                <>
                    <h1>Work Pool</h1> 
                    <JobTable jobs={jobs} />
                </>
                :
                <h1>Access Denied</h1>
            }
        </div>
        </Layout>
    )
}
