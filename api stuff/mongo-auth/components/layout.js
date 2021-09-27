import Head from 'next/head';
import Header from './header';

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
      </Head>
      <Header />
      {props.children}
    </div>
  )
}
