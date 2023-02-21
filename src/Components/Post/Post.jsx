import CreatePostForm from "../CreatePostForm/CreatePostForm"



const Post = (props) => {

    const likeEntry = [true]
    const dislikeEntry = [false]

    return (<div>
        <h1>{props.post.name}</h1>
    </div>)
}

export default Post