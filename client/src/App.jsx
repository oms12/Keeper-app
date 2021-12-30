import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes,useRoutes } from 'react-router-dom';
import Header from "./components/Navbar/Header";
import Footer from "./components/Navbar/Footer";
import Notes from "./components/Notes/Notes";
import axios from "axios";
import Login from "./components/login/login.jsx";
import Register from "./components/Register/register.jsx";

function App()
{
 //const [login,setlogin]  = useState(false);
 /*useEffect(async()=>{
   const data = await axios.get("/isloggedIn/?token=" + token);
   if(data.status === 200) setlogin(true);
   else setlogin(false);
 },[]);*/
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

