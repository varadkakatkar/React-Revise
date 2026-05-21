import classes from "./NewPost.module.css";

function NewPost(props) {
  const { enteredBody, setEnteredBody, author, setAuthor, onCancel } = props;

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={3}
          value={enteredBody}
          onChange={setEnteredBody}
        />
      </p>
      <p>{enteredBody}</p>
      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="author"
          id="name"
          required
          value={author}
          onChange={setAuthor}
        />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
