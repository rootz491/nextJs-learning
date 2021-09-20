---
title: 'NextJs has this weird hook'
date: '2021-07-14'
---

NextJs supports **pre** as well as **post** rendering.

Post-rendering is rendering on client-side.
To render data, first website need to fetch data from some API.

NextJs provide a *hook* to do the job, known as **SWR**.

hooks's format is:

---
```js
import useSWR from 'swr'
...
function comp() {
    const {data, error} = useSWR(URL, fetcher);
}
```
---

Here are few things to note:

*   `data` is returned response
*   `error` is message, in case fetching fails
*   `URL` is just url of API to fetch data from
*   `fetcher` is function which takes *url* as argument and return response data.
    *   can use **native fetch** or tool like **axios** to perfom fetching inside *fetcher* method.

here's the implementation: [link](/random_person)

That's it for now,
*~ adios*