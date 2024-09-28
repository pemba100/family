import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
// import React m 'react'

export default function Homepage() {
  return (
    <>
         
        <Navbar/>
         <div className="d-flex">
        <Sidebar />
          <div className="container" style={{height:"80vh"}}>
            <h1 className="font-weight-bold d-flex justify-content-center align-items-center" style={{height:"180px"}}>Welcome Pemba Sir</h1>
          </div>
         </div>
         <footer className="text-center py-1">
         <h3 className="m-0">© 2024 Family Management System. All rights reserved.</h3>

         </footer>
      
    </>
  )
}
