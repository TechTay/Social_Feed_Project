import React, { useState } from "react";
import PostList from "../PostList/PostList";
import Post from "../Post/Post";


const CreatePostForm = () => {
  const [names, setName] = useState([""]);
  const [body, setBody] = useState([""]);

  const handleSubmit = (e) => {
      e.preventDefault()
      setName([...names, body])
  }

  const handlechange = (e) => {
      setBody(e.target.value)
      console.log(e.target.value)
  }

  return (
  <div>
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" value = {body} onChange={handlechange}/>
      </label>
      
      <label>
        Post
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Create" />
    </form>
    {names.map(el => <Post post={el}/>)}
  </div>
  );
};

export default CreatePostForm;
