import {useState} from 'react';

import styles from './PostsList.module.css';
import Post from './Post';
import NewPost from './NewPost';
function PostsList() {
const [enteredText, setEnteredText] = useState('');
const [enteredName, setEnteredName] = useState('')

function changeBodyHandler(event) {
    setEnteredText(event.target.value);
}

function changeAuthorHandler(event) {
    setEnteredName(event.target.value);
}


    return <>
    <NewPost changeBodyHandler={changeBodyHandler} changeAuthorHandler={changeAuthorHandler}/>
    <ul className={styles.posts}>
       <Post name={enteredName} text={enteredText}/>
       <Post name="Razi2" text="this i post2"/>
    </ul>
    </>
    
}
export default PostsList;