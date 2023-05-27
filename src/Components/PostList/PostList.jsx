import Post from "../Post/Post";

const PostList = (props) => {
  return (
    <ul>
      {props.posts.map((post, index) => (
        <div key={index}>
          <Post post={post} />
        </div>
      ))}
    </ul>
  );
};

export default PostList;
