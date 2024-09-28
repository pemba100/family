import React from 'react'
import './Sidebar.css';
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
      <>
    <div className="sidebar">
        <div className="container-fluid"style={{height:"80vh"}}>

        <ul className=" ul list-unstyled bg-secondary ">
            <li><Link to="/Homepage" className="text-decoration-none p-5" style={{color: "white"}}>Dashboard</Link></li>
            <li><Link to="/Profile" className="text-decoration-none p-5 "style={{color: "white"}} >My profile</Link></li>
            <li><Link to="/ChangePassword" className="text-decoration-none p-5 " style={{color: "white"}}>Change password</Link></li>
            <li><Link to="/Myfamily" className="text-decoration-none p-5 " style={{color: "white"}}>Myfamily</Link></li>
        
        </ul>
        </div>
    </div>
      </>
  )
}
