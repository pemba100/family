import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";


export default function Myfamily() {
  return (
    <>
      <div>
        <Navbar />
        <div className="d-flex">
          <Sidebar />
          <div className="container "style={{height:"80vh"}}>
            <div className="top-family d-flex justify-content-between mt-3 ">
               <h2>Family Member</h2>
               <button type="add" className=" btn btn-success px-4 py-2 me-3  ">Add</button>
            </div>
          </div>
        </div>
        <footer className="text-center py-1">
          <h3 className="m-0">
            © 2024 Family Management System. All rights reserved.
          </h3>
        </footer>
      </div>
    </>
  );
}
