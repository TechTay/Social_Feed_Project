import CreatePostForm from "./Components/CreatePostForm/CreatePostForm";
import LikeDislikeButton from "./Components/Post/LikeDislikeButton";
import PostList from "./Components/PostList/PostList";
import NavBar from "./Components/NavBar/NavBar";
import React, { useState } from "react";

function App() {
  const [posts, setPosts] = useState([
    { name: "DeVante", date: "02/21/23 ", like: true, dislike: false, text: "I Love my Full Stack Instructors!" },
  ]);

  function addNewPost(newPost){
    let tempPosts = [...posts, newPost]
    setPosts(tempPosts)
    
  }

  return (
    <div>
      <NavBar />
      <CreatePostForm addNewPost={addNewPost}/>
      <PostList posts={posts}/>
     
    </div>
  );
}

export default App;
