import Layout from "../../components/layout";
import { getAllPostIds } from "../../lib/posts";

export function getStaticProps() {

}

export function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false        
    }
}

export default function Post() {
    return (
        <Layout home={false} title="post">
            
        </Layout>
    )
}
