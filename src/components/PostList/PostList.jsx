import React from 'react';
import PostItem from '../PostItem/PostItem.jsx';
const PostList = ({posts}) => {
    return(
        <div>
            {posts.map((p, index) =>
               <PostItem number={index} post={p}></PostItem>
            )}
        </div>
    );
};

export default PostList;