// App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import Homepage from "./Pages/Homepage";
import MyProfile from "./Pages/MyProfile";  // Corrected import to match the path
import Myfamily from "./Pages/Myfamily";
import Login from "./Pages/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Changepassword from "./Pages/Changepassword";
import Dashboard from "./Pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <div>
        <Router>
          {/* <Homepage/> */}
          <Routes> 
            <Route path="/" element={<Login />} />
            <Route path="/Homepage" element={<Homepage />} />
            <Route path="/Homepage" element={<Dashboard />} /> 

            <Route path="/MyProfile" element={<MyProfile />} />
            <Route path="/Changepassword" element={<Changepassword />} />
            <Route path="/Myfamily" element={<Myfamily />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}
