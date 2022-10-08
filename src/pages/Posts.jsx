import React, {useEffect, useState} from 'react';
import MySelect from '../components/select/MySelect';
import axios from "axios";
import PostList from '../components/PostList/PostList';
import { useSortAndFilter } from '../hooks/useSortAndFilter';
const Posts = ({query}) => {

    async function fetchPosts() {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPosts(response.data);
    }

    const [posts, setPosts] = useState([]);
    const [sort, setSort] = useState("");

    const sortedAndFilteredPosts = useSortAndFilter(posts, sort, query);
    useEffect(()=>{
        fetchPosts()
    }, [query, sort]);


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
            <PostList posts={sortedAndFilteredPosts}></PostList>
        </div>
    );
};

export default Posts;