import React from "react";
import './Login.css';
import { Link } from "react-router-dom";



export default function Login() {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center " style={{height : "100vh"}} >
        <form method="" className="center" style={{width:"400px"}}>
          <div className="log">

          <h1 style={{textAlign : "center" , marginBottom : "50px" }}>Login</h1>
          <label style={{width: "110px"}}>Email Address:</label>
          <input type="text" required style={{marginBottom: '20px'}} className="form-control rounded " />
          <br />

          <label style={{width:"110px"}}>Password:</label>
          <input type="password" required  style={{marginBottom:'20px'}}  className="form-control rounded"/>
          <br />

          </div>
          <div style={{textAlign:"center"}}>
            {/* <button> */}
          <Link to="/Dashboard" className="btn btn-padding-x-2 border-primary" style={{marginBottom: "15px"}}>Login</Link>

            {/* </button> */}

          </div>
        </form>
      </div>
    </> 
  );
}

