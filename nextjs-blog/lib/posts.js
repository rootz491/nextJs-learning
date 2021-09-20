import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

//  return metadata about stored posts using `gray-matter` to parse that metadata.
export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post's metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  // Sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}

//  return array of object that contain `params` which contains `id` (or filename)
  //  each object has it's `param` in it.
  //  { { params: { id: "filename_1" } }, { params: { id: "filename_2" } }, { params: { id: "filename_3" } }, ... }
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

//  return post data of post whose id is given as arg
export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const file = fs.readFileSync(fullPath, "utf-8");

  //  gray-matter to parse thru file and get data
  const postContent = matter(file);

  // remark to convert markdown into html string
  const processedContent = await remark()
    .use(html)
    .process(postContent.content)
  
  const contentHtml = processedContent.toString()
  console.log(remark);
 return {
    id,
    ...postContent.data,
    contentHtml
  }
}