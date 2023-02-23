import React, { useState } from 'react';
import "./LikeDislike.css"

const LikeDislikeButton = () => {
    
    const [disLikeButton, setDisLikeButton] = useState("inactive");
    const [likeButton, setLikeButton] = useState("inactive");

    function handleClick(){
        if(likeButton === "inactive"){
            setLikeButton("active");
        }
        else {
            setLikeButton("inactive");
        }
        if(disLikeButton === "inactive"){
            setDisLikeButton("active");
        }
        else {
            setDisLikeButton("inactive")
        }
    }

    return ( <div>
        <button className={likeButton} onClick={handleClick}>Like</button>
        <button className={disLikeButton} onClick={handleClick}>Dislike</button>
        </div>
    )
}



export default LikeDislikeButton