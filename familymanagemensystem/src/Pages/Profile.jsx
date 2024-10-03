import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
// import axios from 'axios';

export default function MyProfile() {
  //   const [data, setData] = useState([]);
  
  // useEffect(() => {
  //     axios.get('http://localhost:1337/api/profiles')


  //       .then(response => {
  
  //         setData(response);
  //       })
  //       .catch(error => {
  //         console.error('Error :', error);
  //       });
  //   }, []);
    // console.log(data.data.data[0])
   const user = {
    name: 'Pemba Sherpa',
    email: 'pembas650@gmail.com',
    userId: '001'
  };

  return (
    <>
    <div>
      <Navbar/>
       <div className="d-flex">
      <Sidebar/>
      <div className="container " style={{height:"80vh"}}>
       <h1>My profile</h1>
  {/* yeta */}
  <div className="container mt-4">
      <div className="card" style={{ width: '300px' }}>
        <div className="card-body">
          {/* <h5 className="card-title">Name:{data.data.data[0].name}</h5>
          <p className="card-text">Email: {data.data.data[0].email}</p> */}
          <h5 className="card-title">Name:{user.name}</h5>
          <p className="card-text">Email: {user.email}</p>
          
        </div>
      </div>
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

