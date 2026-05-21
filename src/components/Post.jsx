import classes from "./Post.module.css";

const Post = (props) => {
  const { author, body } = props;
  return (
    <div className={classes.post}>
      <p>{author}</p>
      <p>{body}</p>
    </div>
  );
};

export default Post;
