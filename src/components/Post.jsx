import classes from "./Post.module.css";

const Post = (props) => {
  const { author, body } = props;
  return (
    <div className={classes.post}>
      <p className={classes.author}>{body}</p>
      <p className={classes.text}>{author}</p>
    </div>
  );
};

export default Post;
