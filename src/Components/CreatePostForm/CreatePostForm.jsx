import React, { useState } from "react";
import PostList from "../PostList/PostList";
import Post from "../Post/Post";


const CreatePostForm = (props) => {
  const [name, setName] = useState([""]);
  const [text, setText] = useState([""]);
    let currentDate = new Date();
    let cDay = currentDate.getDate();
    let cMonth = currentDate.getMonth() + 1;
    let cYear = currentDate.getFullYear();

  const handleSubmit = (e) => {
      e.preventDefault()
      // Create a newPost object
      let newPost = {
        "name": name,
        "text": text,
        "date": cMonth + "/" + cDay + "/" + cYear
      }

      // use the addNewPost function
      props.addNewPost(newPost)
  }

  
  

  return (
  <div>
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" value ={name} onChange={(event) => setName(event.target.value)}/>
      </label>
      
      <label>
        Post
        <input type="text" value={text} onChange={(event) => setText(event.target.value)} />
      </label>
      <input type="submit" value="Create" />
    </form>
  </div>
)};
;

export default CreatePostForm;
