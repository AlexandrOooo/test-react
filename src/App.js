import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom";
import Input from "./components/Input/Input.jsx";
import Posts from "./pages/Posts.jsx";
import "./styles/App.css";


function App() {
  const routes = [{ path: '/posts', element: <Posts/> }];     
  return (
    <div className="App">
      <BrowserRouter>
        <Input></Input>
        <Routes>
          <Route path="/posts" element={<Posts/>}/>
        </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default App;
