import React, {useState} from 'react';
import MySelect from '../components/select/MySelect';
import axios from "axios";
const Posts = () => {

    const [posts, setPosts] = useState([]);

    async function fetchPosts() {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPosts(response.data);
    }

    fetchPosts();

    return (
        <div>
            <PostList posts={posts}></PostList>
            <MySelect
                defaultValue="sort"
                options={[
                    { value: "title", name: "Name" },
                    { value: "body", name: "Description" }
                ]}
            ></MySelect>
        </div>
    );
};

export default Posts;