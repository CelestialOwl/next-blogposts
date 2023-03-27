import PostItem from './post-item';
import styles from './post-grid.module.css';

function PostGrid(props: any) {
  const { posts } = props;
  return (
    <ul className={styles.grid}>
      {posts.map((post: any) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}

export default PostGrid;
