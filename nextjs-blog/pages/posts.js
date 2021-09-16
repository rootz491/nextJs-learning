import Link from 'next/link';
import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';

//  Static Generation (triggers at build time only)
export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: { allPostsData }
    }
}

export default function posts({ allPostsData }) {
    return (
        <Layout title="All posts" home={false}>
            <div className="main">
                <h1>all posts</h1>
                <h3>- Hardcoded (server-side) Posts</h3>
                <p>
                    <Link href="/posts/first-post">
                        <a>Hello World</a>
                    </Link>
                </p>
                <p>
                    <Link href="/posts/second-post">
                        <a>John Wick</a>
                    </Link>
                </p>
                <br/>
                <br/>
                <h3>- Static Generated posts</h3>
                <div>
                {allPostsData.map(({ id, date, title }) => (
                    <a href={"/posts/" + id} className="post" key={id}>
                        <span>{title}</span>
                        <span className="date">{date}</span>
                    </a>
                ))}
                </div>
            </div>

            <style jsx>{`
                .main {
                    min-width: 300px;
                }
                .post {
                    display: flex;
                    justify-content: space-between;
                    margin: 1em 0;
                }
                .date {
                    color: gray;
                }
            `}</style>
        </Layout>
    )
}
