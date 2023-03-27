import { getAllPosts } from '@/lib/post-utils';
import AllPosts from 'components/posts/all-posts';
import Head from 'next/head';

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started With Nextjs',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is a popular framework for incremental site. Which support fullstack react apps',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs1',
    title: 'Getting Started With Nextjs',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is a popular framework for incremental site. Which support fullstack react apps',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'Getting Started With Nextjs',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is a popular framework for incremental site. Which support fullstack react apps',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs3',
    title: 'Getting Started With Nextjs',
    image: 'getting-started-nextjs.jpg',
    excerpt:
      'NextJS is a popular framework for incremental site. Which support fullstack react apps',
    date: '2022-02-10',
  },
];

export const metadata = {
  title: 'all post',
};

const AllPostsPage = () => {
  const myPosts = getAllPosts();
  return (
    <>
      <AllPosts posts={myPosts} />
    </>
  );
};

export default AllPostsPage;
