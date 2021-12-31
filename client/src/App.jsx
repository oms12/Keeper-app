import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/Navbar/Header";
import Notes from "./components/Notes/Notes";
import Login from "./components/login/login.jsx";
import Register from "./components/Register/register.jsx";

function App()
{
    return (
    <div>
        <BrowserRouter>
            <Routes>
            <Route path="/home"  element= { <>  <Header /> <Notes /></>}   />
            <Route path="/" element= {<Login />} />
            <Route path="/signup" element= {<Register />} /> 
            </Routes>
        </BrowserRouter>
    </div>
    )
}
export default App;

