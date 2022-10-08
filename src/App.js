import React, {useState} from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom";
import Input from "./components/Input/Input.jsx";
import Posts from "./pages/Posts.jsx";
import "./styles/App.css";


function App() {
  const [query, setQuery] = useState("");
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/posts">
          <Input
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </Link>
        <Routes>
          <Route path="/posts" element={<Posts query={query}/>}/>
        </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default App;
