import React from "react";
import Buttons from "./Buttons";

const Post=(props) =>{
    return (
        <div>
            <p id='name'>{props.name}</p>
            <p id='message'>{props.name}</p>
            <Buttons/>
            <hr/>
        </div>
    );
}

export default Post;