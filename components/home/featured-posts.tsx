import PostGrid from 'components/posts/post-grid';
import styles from './featured-posts.module.css';

const FeaturedPosts = (props: { posts: [] }) => {
  return (
    <section className={styles.latest}>
      <h2>Featured Posts</h2>
      <PostGrid posts={props.posts} />
    </section>
  );
};

export default FeaturedPosts;
