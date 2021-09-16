import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/layout';

// server-side rendering (triggers at each user request)
export async function getServerSideProps(context) {
  if (context.query.name) {
    const name = context.query.name;
    const res = await fetch(`https://avatars.dicebear.com/api/human/${name}.svg?mood[]=happy`);
    const avatar = await res.text();
    return {
      props: {
        name,
        avatar
      }
    }
  }
  else return {
    props: {
      name: null,
      avatar: null
    }
  }
}

export default function Home({ name, avatar }) {
  return (
    <Layout title="rootz' blog" home={true} >
        
      <div className="main">
        <Image className="me" src="/rootz.jpeg" width={180} height={180} priority />
        <h2>Karan Sharma</h2>
        <p>
          Hii, My name is <strong>Karan</strong>. 
          I'm under-graduate student in Graphic Era Uni, who's also learning web development and Weekly bug bounty hunting.
          <br/>
          I love trying out new technologoes and discussing them with my friends. I also play CTF most of my weekends.
        </p>
        <Link href="/posts">
          <a className="txt">checkout my posts</a>
        </Link>
        <div className="ssr">
          <p>💡 Try adding name to query parameter on this page and see the magic of Server-side rendering</p>
          {
            name ?
            <>
              <div className="svg" style={{width: "70px"}} dangerouslySetInnerHTML={{__html: avatar}}></div>
              <h4>Hii {name}!</h4> 
            </> : null
          }
        </div>
      </div>

      <style jsx>{`
        .main {
          text-align: center;
        }
        .main > p {
          letter-spacing: 1.2px;
          width: 50%;
          margin: 1em auto;
        }
        @media screen and (max-width: 900px) {
          .main > p {
            letter-spacing: 1.1px;
            width: 95%;
          }
        }
        .me {
          border-radius: 9999px;
        }
        a {
          color: white;
          background: black;
          padding: 3px 8px;
          border-radius: 3px;
        }
        a:hover {
          background-color: rgba(0, 0, 0, .7);
        }
        .ssr {
          margin-top: 4em;
        }
        .ssr > p {
          font-size: 20px;
        }
        .svg {
          margin: auto;
        }
        h4 {
          margin: 4px;
        }
      `}</style>

    </Layout>
  )
}
