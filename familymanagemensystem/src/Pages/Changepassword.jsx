import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default function Changepassword() {
  return (
    <>
    <div>
         <Navbar/>
       <div className="d-flex">
      <Sidebar/>
      <div className="container d-flex justify-content-center align-items-center " style={{height:"80vh"}}>
        <div className="center d-flex justify-content-center align-items-center" style={{height:"450px", width:"400px"}}>

            <form action="/">
            <label className='d-block fs-5'>Password</label>
            <input type='password' required style={{marginBottom:"18px"}} className='form-control rounded'/>

            <label className="d-block fs-5 "> New Password:</label>
            <input type="password" required  style={{marginBottom:'20px', marginTop:'15px'}} className='form-control rounded'/>  <br />
            <div className="btn">

            <button type='Cancel' className='btn btn-secondary me-3 px-4 py-2 fs-5'>Cancel</button>
            <button type='Submit' className='btn btn-primary px-4 py-2 fs-5'>Submit</button>
            </div>
             
            </form>
        </div>
      </div>
       </div>
      <footer className="text-center py-1">
         <h3 className="m-0">© 2024 Family Management System. All rights reserved.</h3>

         </footer>
    </div>
    </>
  )
}
