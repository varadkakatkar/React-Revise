import MainHeader from "./components/MainHeader";
import Post from "./components/Post";
import PostsList from "./components/PostsList";
import { useState } from "react";

function App() {
  const [modalIsVisible, setIsModalVisible] = useState(true);
  const hideModalVisible = () => {
    setIsModalVisible(!modalIsVisible);
  };
  const showModalVisible = () => {
    setIsModalVisible(!modalIsVisible);
  };
  return (
    <>
      <MainHeader onCreatePost={showModalVisible} />

      <main>
        {/* <Post name="A" text="1" />
      <Post name="B" text="2" />
      <Post name="C" text="3" />
      <Post name="D" text="4" /> */}

        <PostsList
          isPosting={modalIsVisible}
          onStopPosting={hideModalVisible}
        />
      </main>
    </>
  );
}

export default App;
