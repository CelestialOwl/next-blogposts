import styles from './all-posts.module.css';
import PostGrid from './post-grid';
function AllPosts(props: any) {
  return (
    <section className={styles.posts}>
      <h1>All posts</h1>
      <PostGrid posts={props.posts} />
    </section>
  );
}

export default AllPosts;
