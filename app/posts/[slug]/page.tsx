import { getPostData } from '@/lib/post-utils';
import PostContent from 'components/posts/post-detail/post-content';

const SinglePostPage = (props) => {
  const myPost = getPostData(props.params.slug);
  return <PostContent post={myPost} />;
};

export default SinglePostPage;

export const metadata = {
  title: 'slug post',
};

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  console.log(slug);
  const postData = getPostData(slug);
  return {
    props: {
      post: postData,
    },
  };
}
