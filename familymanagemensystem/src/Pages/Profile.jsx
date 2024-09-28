import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

export default function Profile() {
  return (
    <>
    <div>
      <Navbar/>
       <div className="d-flex">
      <Sidebar/>
      <div className="container " style={{height:"80vh"}}>
       <h1>My profile</h1>
        </div>
       </div>
      <footer className="text-center py-1">
         <h3 className="m-0">© 2024 Family Management System. All rights reserved.</h3>

         </footer>
    </div>
    </>
  )
}

