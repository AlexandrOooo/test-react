import React, {useState} from "react";
import Input from "./components/Input/Input.jsx";
import axios from "axios";
import "./styles/App.css";


function App() {
  const [posts, setPosts] = useState([]);

  async function fetchPosts() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPosts(response.data);
  }

  fetchPosts();

  return (
    <div className="App">
      <Input></Input>
    </div>
  );
}

export default App;
