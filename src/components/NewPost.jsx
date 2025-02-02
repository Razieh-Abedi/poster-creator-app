import PropTypes from 'prop-types';
import classes from './NewPost.module.css';

function NewPost(props) {

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={props.changeBodyHandler} />
      </p>
      
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required  onChange={props.changeAuthorHandler}/>
      </p>
    </form>
  );
}
NewPost.propTypes = {
    changeBodyHandler: PropTypes.func.isRequired,
    changeAuthorHandler: PropTypes.func.isRequired,
}

export default NewPost;