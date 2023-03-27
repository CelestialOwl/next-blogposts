'use client';

import PostHeader from './post-header';
import styles from './post-content.module.css';
import ReactMarkDown from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/esm/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import Image from 'next/image';
const DUMMY_POST = {
  slug: 'getting-started-with-nextjs2',
  title: 'Getting Started With Nextjs',
  image: 'getting-started-nextjs.jpg',
  content: '# This is a first post',
  date: '2022-02-10',
};

SyntaxHighlighter.registerLanguage('js', js);

function PostContent({ post }) {
  const { title, image, slug, content } = post;
  const imagePath = `/images/posts/${slug}/${image}`;

  const customRenderes = {
    // img(image) {
    //   console.log('fileimage', image);
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={300}
    //       height={150}
    //     />
    //   );
    // },
    p(paragraph) {
      const { node } = paragraph;
      if (node.children[0].tagName === 'img') {
        const image = node.children[0].properties;
        return (
          <div className={styles.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },
    code(c) {
      const { className, children } = c;
      let language;
      switch (className) {
        case 'language-js':
          language = 'javascript';
          break;
        default:
          language = '';
      }
      console.log(language);
      return (
        <SyntaxHighlighter style={atomDark} language={language}>
          {children}
        </SyntaxHighlighter>
        // {children}
      );
    },
  };

  return (
    <article className={styles.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkDown components={customRenderes}>{content}</ReactMarkDown>
    </article>
  );
}

// export const getServerSideProps = (context) => {
//   console.log("contentxt,'", context.query);
// };

export default PostContent;
