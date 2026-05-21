import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostLists.module.css";
import { useState } from "react";

const PostsList = () => {
  const [enteredBody, setEnteredBody] = useState("");
  const [author, setAuthor] = useState("");
  const changeBodyHandler = (e) => {
    setEnteredBody(e.target.value);
  };
  const setAuthorName = (e) => {
    setAuthor(e.target.value);
  };

  return (
    <>
      <Modal>
        <NewPost
          enteredBody={enteredBody}
          setEnteredBody={changeBodyHandler}
          setAuthor={setAuthorName}
          author={author}
        />
      </Modal>
      <ul className={styles.posts}>
        <li>
          <Post author={author} body={enteredBody} />
        </li>
        <li>
          <Post author={author} body={enteredBody} />
        </li>
      </ul>
    </>
  );
};

export default PostsList;
