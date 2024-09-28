import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import Homepage from "./Pages/Homepage";
import Profile from "./Pages/Profile";
import Myfamily from "./Pages/Myfamily";
import Login from "./Pages/Login";

import Changepassword from "./Pages/Changepassword";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from "./Pages/Dashboard";



export default function App() {
  return (
    <>
    <div>
      <Router>
      {/* <Login/> */}
        
        <Routes> 
        {/* <Route path="/" element={<Homepage/>} */}
        {/* <Route path="/Dashboard" element={<Dashboard />} />   */}

        <Route path="/Homepage" element={<Homepage/>}/>  
       <Route path="/Profile" element={< Profile/>}/> 
       <Route path="/Changepassword" element={<Changepassword/>}/> 
       <Route path="/Myfamily" element={<Myfamily />} />  
      </Routes> 
      </Router>
    </div>
</>
  );
}
