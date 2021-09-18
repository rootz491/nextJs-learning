#   learning nextJs

ima just going with a simple project on official docs. It's a Blog app.

>   here's [link](https://next-learn-starter.vercel.app) of what they made in the tutorial.

This is a starter template for [Learn Next.js](https://nextjs.org/learn).

----

To start with nextJs project, and you need a template for beginner.   
Here's the command:

```bash
npx create-next-app project-name --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"
```

it'll create bunch of directories and files.

*   `/pages` contains pages for project.
*   `index.js` is start point or home page.
*   run dev server
    ```sh
    npm run dev
    ```
*   it'll start the site on port `3000` at `locahost`.

#### customizing <head> tag (metadata)

you can use different head tag for each component.



#### pages

NextJs page routing is relatively simpler.

*   `/pages/index.js` file represents `/` of website.
*   `/pages/posts/first-post.js` file represents `/posts/first-post`.

#### routing and navigation

>   `Link` is used to client side navigation b/w two pages of same next.js app.

Linking to these pages is also easy, very similar that **react-router-dom's** `Link` tag!

```js
import Link from "next/link";
...
<Link href="/posts/first">
   <a>first post</a>
</Link>
```

>   in a production build of Next.js, whenever Link components appear in the browser’s viewport, Next.js automatically prefetches the code for the linked page in the background. By the time you click the link, the code for the destination page will already be loaded in the background, and the page transition will be near-instant!


#### using optimized image tag

nextJs provided `Image` tag for adding optimized image to DOM with following features:

*   Ensuring your image is responsive on different screen sizes
*   Optimizing your images with a third-party tool or library
*   Only loading images when they enter the viewport

```js
import Image from 'next/image';
...
<Image
    src="/images/"
    height={200}    //  200 px
    width={80}      //  80 px
    alt="alternate name"
/>
```

#### customized 404 page

So nextJs provide a good 404 page right off-the-box, but if we can customize it by creating our own.

create `pages/404.js` file and it'll act as your 404 page!

>   server-rendering of 404 page is pretty useless as it will only increase workload. so 
    whenever we build our app for production, nextjs automatically pre-renders this page and later, serves it as a static page.

## rendering in nextJs

Default rendering mode in nextJs app is **pre-rendering**.  
That is, react pages gets converted to static HTML pages before serving to client.

>   lil Experiment: Try disabling js on pure react app and reload, it will show message: `You need to enable JavaScript to run this app.`
    One the other hand, do the same thing with nextJs app, it will work perfectly 😌


There are 2 types of rendering in NextJs, 
1.  post-rendering: start rendering on client-side
2.  pre-rendering: 
    *   Static Generation (render at build time into static pages and then serve those pages when needed)
    *   Server-side Rendering (render on each request on the server, then sends static HTML to client)

----

### Static Generation

Let's implement Static rendering for some posts.

>   `getStaticProps` is used to produce props for static rendering, it returns props to react component that react can use to set data for pre-rendering at build time.   

*   Here in this app, that "data" is just stored `posts` in `/posts` folder as `.md` file and can be parsed using `gray-matter` for getting post's metadata (read that markdown top lines for understanding).  

*   Code at `lib/posts.js` reads the data from markdown files and return it. 

*   in `pages/posts.js` file, `getStaticProps` is used and it's calling to a function from `lib/posts.js` file which loads meta about posts on `/posts` folder. After fetching those posts, `getStaticProps` returns data (those posts) as key-value pair.
    ```js
    export async function getStaticProps() {
        const allPostsData = getSortedPostsData();
        return {
            props: { allPostsData }
        }
    }
    ```

    *   This returned data is actual props, which are going to be used by react component on same file.

*   Now here `getStaticProps` function is only called once in production mode, that is, during **build** time of the app.    

*	`getStaticProps` can be used to communicate with external API to fetch data (that doesn't ofter change) and use it in static pages.

>   getStaticProps can only be exported from a page. You can’t export it from non-page files.

### Server-side rendering

In any jsx page file, you can use `getServerSideProps` function to generate custom code based based on user's request on server-side.

```js
export async function getServerSideProps(context) {
  return {
    props: {
      // props for your component
    }
  }
}
```

*   `context` parameter contains **request** specific parameters.

### Client-side rendering

it loads extenal data afer static HTML page loads on client side. 

you can use next.js's hook to fetch data called `swr`.   

> It handles caching, revalidation, focus tracking, refetching on interval, and more

```js
import useSWR from 'swr'

export default function Profile() {
  const { data, error } = useSWR('/api/user', fetch)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>hello {data.name}!</div>
}
```