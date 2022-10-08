import React, {useState} from 'react';
import MySelect from '../components/select/MySelect';
import axios from "axios";
import PostList from '../components/PostList/PostList';
const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [sort, setSort] = useState("");

    async function fetchPosts() {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPosts(response.data);
    }

    return (
        <div>
            <MySelect
                value={sort}
                onChange={e => setSort(e.target.value) }
                defaultValue="sort"
                options={[
                    { value: "title", name: "Name" },
                    { value: "body", name: "Description" }
                ]}
            />
            <PostList posts={posts}></PostList>
        </div>
    );
};

export default Posts;