import Layout from "../../components/layout";

export default function firstPost() {
    return (
        <Layout title="First Post" home={false}>
            
            <div className="main">
                <h1>Hello World</h1>
                <p>This is my first post 😄</p>
                <p>Have fun!</p>
            </div>

            <style jsx>{`
                .main {
                    text-align: center;
                }
            `}</style>
        </Layout>
    )


}
