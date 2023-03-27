import { demos } from '@/lib/demos';
import Link from 'next/link';
import Hero from 'components/home/hero';
import FeaturedPosts from 'components/home/featured-posts';
import { getAllPosts, getFeaturedPosts } from '@/lib/post-utils';

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started With Nextjs',
    image: 'getting-started-nextjs.jpg',
    excerpt:
      'NextJS is a popular framework for incremental site. Which support fullstack react apps',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs1',
    title: 'Getting Started With Nextjs',
    image: 'getting-started-nextjs.jpg',
    excerpt:
      'NextJS is a popular framework for incremental site. Which support fullstack react apps',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'Getting Started With Nextjs',
    image: 'getting-started-nextjs.jpg',
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
  title: 'My Blog posts',
  description: 'I blog about programing and gaming',
};

export default function Page(props) {
  const myPosts = getFeaturedPosts();
  return (
    <>
      <Hero />
      <FeaturedPosts posts={myPosts} />
    </>
    // <div className="space-y-6">
    //   <div className="space-y-8 text-white">
    //     {demos
    //       .filter((section) =>
    //         section.items.some((x) => typeof x.isDisabled === 'undefined'),
    //       )
    //       .map((section) => {
    //         return (
    //           <div key={section.name} className="space-y-3">
    //             <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
    //               {section.name}
    //             </div>

    //             <div className="grid grid-cols-2 gap-5">
    //               {section.items
    //                 .filter((item) => !item.isDisabled)
    //                 .map((item) => {
    //                   return (
    //                     <Link
    //                       href={`/${item.slug}`}
    //                       key={item.name}
    //                       className="block space-y-1.5 rounded-lg border border-white/10 px-4 py-3 hover:border-white/20"
    //                     >
    //                       <div>{item.name}</div>

    //                       {item.description ? (
    //                         <div className="line-clamp-3 text-sm text-zinc-400">
    //                           {item.description}
    //                         </div>
    //                       ) : null}
    //                     </Link>
    //                   );
    //                 })}
    //             </div>
    //           </div>
    //         );
    //       })}
    //   </div>
    // </div>
  );
}

// export function getServerSideProps() {
//   const featuredPosts = getFeaturedPosts();
//   console.log('my features', featuredPosts);
//   return {
//     props: {
//       posts: featuredPosts,
//     },
//     params: { top: 'kappa' },
//   };
// }
