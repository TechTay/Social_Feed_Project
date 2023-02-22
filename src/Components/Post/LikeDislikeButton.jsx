import React, { useState } from 'react';
import "./LikeDislike.css"

const LikeDislikeButton = (props) => {
    
    const [disLikeButton, setDisLikeButton] = useState("inactive");
    const [likeButton, setLikeButton] = useState("inactive");

    function handleClick(){
        if(likeButton === "inactive"){
            setLikeButton("active");
        }
        else {
            likeButton("inactive");
        }
        if(disLikeButton === "inactive"){
            setDisLikeButton("active");
        }
        else {
            disLikeButton("inactive")
        }
    }

    return ( <div>
        <button className={props.like} onClick={handleClick}>Like</button>
        <button className={props.disLike} onClick={handleClick}>Dislike</button>
        </div>
    )
}



export default LikeDislikeButton