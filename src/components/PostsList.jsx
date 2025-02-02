import styles from './PostsList.module.css';
import Post from './Post';
function PostsList() {
    return <ul className={styles.posts}>
       <Post name="Razi" text="this is post 1"/>
       <Post name="Razi2" text="this i post2"/>
    </ul>
}
export default PostsList;