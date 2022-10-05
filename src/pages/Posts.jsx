import React from 'react';
import MySelect from '../components/select/MySelect';
const Posts = () => {
    return (
        <div>
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