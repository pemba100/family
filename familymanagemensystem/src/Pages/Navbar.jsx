import React from 'react'
import { FaUser } from "react-icons/fa";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import './Navbar.css';

export default function Navbar() {
  return (
    <>
    <div>
        <div className="container-fluid" >
         <div className="nav-bar text-white d-flex justify-content-between align-items-center p-3 ">

          <div className="left-nav">
          <MdOutlineFamilyRestroom  className='fs-1 ps-2' />
           </div>
          <div className="right-nav d-flex align-items-center">
            <FaUser  />
            <h4>Login </h4>
          </div>
        </div>
        </div>
    </div>
    </>
  )
}
