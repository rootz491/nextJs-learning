import Date from "../../components/Date";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

//  implementing static page using dynamic route

//  contains all possible values for `id` param of url path (dynamic part of URL)
export function getStaticPaths() {
    //  get list of values of `id` param in as array of object in unique format thru external function.
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false        
    }
}

// `params` contains `id` which is dynamic part of url path.
export async function getStaticProps({ params }) {
    //  that `id` is used to get actual post data thru external function
    const postData = await getPostData(params.id);
    //  return post data as `prop` to this page's react function
    return {
        props: {
            postData
        }
    }
}

export default function Post({ postData }) {
    return (
        <Layout home={false} title={postData.title}>
            <div className="main">
                <h1>{postData.title}</h1>
                <span><Date dateString={postData.date} /></span>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
            </div>
            <style jsx>{`
                .main {
                    width: clamp(70%, 800px, 95%);
                    margin: auto;
                }
                .main > h1, .main > span {
                    text-align: center;
                }
                .main > div a {
                    color: blue;
                }
            `}</style>
        </Layout>
    )
}
