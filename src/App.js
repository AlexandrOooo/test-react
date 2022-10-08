import React, {useState} from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom";
import Input from "./components/Input/Input.jsx";
import Posts from "./pages/Posts.jsx";
import "./styles/App.css";


function App() {
  const [query, setQuery] = useState("");
  console.log(query);
  return (
    <div className="App">
      <BrowserRouter>
        <Input
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <Routes>
          <Route path="/posts" element={<Posts/>}/>
        </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default App;
