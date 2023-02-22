import LikeDislikeButton from "./LikeDislikeButton"



const Post = (props) => {

    let currentDate = new Date();
    let cDay = currentDate.getDate();
    let cMonth = currentDate.getMonth() + 1;
    let cYear = currentDate.getFullYear();
    console.log("" + cDay + "/" + cMonth + "/" + cYear + "");

    return (<div>
        <div>{props.post.name}</div>
        <div>{props.post.text} <LikeDislikeButton/></div>
        
    </div>)
}

export default Post