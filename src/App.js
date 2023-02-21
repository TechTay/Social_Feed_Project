import CreatePostForm from "./Components/CreatePostForm/CreatePostForm";
import PostList from "./Components/PostList/PostList";
import NavBar from "./Components/NavBar/NavBar";
import React, { useState } from "react";

function App() {
  const [posts, setPosts] = useState([
    { name: "", Date: " ", Like: true, Dislike: false, Text: "" },
  ]);

  return (
    <div>
      <NavBar />
      <CreatePostForm/>
      <PostList parentEntries={posts} />
    </div>
  );
}

export default App;
