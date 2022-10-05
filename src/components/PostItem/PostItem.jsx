import React from 'react';
import cl from "./PostItem.module.css";
const PostItem = (props) => {
    return(
        <div className={cl.post}>
            <h2 className={cl.post__title}>{props.number + 1}. {props.post.title}</h2>
            <p className={cl.post__text}>{props.post.body}</p>
        </div>
    );
};

export default PostItem;