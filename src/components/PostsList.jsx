import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostLists.module.css";
import { useState } from "react";

const PostsList = ({ isPosting, onStopPosting }) => {
  const [enteredBody, setEnteredBody] = useState("");
  const [author, setAuthor] = useState("");
  const changeBodyHandler = (e) => {
    setEnteredBody(e.target.value);
  };
  const setAuthorName = (e) => {
    setAuthor(e.target.value);
  };

  /* let modalContent;
   if (modalIsVisible) {
     modalContent = (
       <Modal onClose={hideModalVisible}>
         <NewPost
           enteredBody={enteredBody}
           setEnteredBody={changeBodyHandler}
           setAuthor={setAuthorName}
           author={author}
         />
       </Modal>
     );
   } */
  return (
    <>
      {/* {modalContent} */}
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            enteredBody={enteredBody}
            setEnteredBody={changeBodyHandler}
            setAuthor={setAuthorName}
            author={author}
          />
        </Modal>
      )}
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
