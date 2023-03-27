import fs from 'fs';
import path from 'path';
import matter = require('gray-matter');

const postDirectory = path.join(process.cwd(), '/posts');

export function getPostData(postIdentifier: string) {
  const postSlug = postIdentifier.replace(/\.md$/, '');
  const filePath = path.join(postDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  interface DataObject {
    date?: string;
    title?: string;
    excerpt?: string;
    isFeatured?: boolean;
    image?: string;
  }
  // @ts-ignore
  const postData: { slug: string; content: string; data: DataObject } = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = fs.readdirSync(postDirectory);

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });
  // console.log('all posts', allPosts);

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1,
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}

export function getPostBySlug(idSlug) {
  const allPosts = getAllPosts();

  const selectedPost = allPosts.filter((post) => post.slug === idSlug);
  return selectedPost;
}
