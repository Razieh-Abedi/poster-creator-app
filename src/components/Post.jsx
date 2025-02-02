import PropTypes from 'prop-types';
import styles from './Post.module.css'

function Post({name, text}) {
    return <li className={styles.post}>
    <p className={styles.author}>{name}</p>
    <p className={styles.text}>{text}</p>
    </li>
}
Post.propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}
export default Post;
