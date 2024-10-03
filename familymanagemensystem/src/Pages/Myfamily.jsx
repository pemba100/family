import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
// import React, { useState, useEffect } from 'react';
 import axios from 'axios';

export default function Myfamily() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:1337/api/family-members')
      .then(response => {
        console.log(data)
        setData(response.data.data);  
      })
      .catch(error => {
        console.error('Error fetching data from Strapi:', error);
      });
  }, []);

  // const familyData = [
  //   { sn: 1, name: 'Jangbu sherpa', relation: 'Father', gender: 'Male', createdDate: '2024-03-10' },
  //   { sn: 2, name: 'dolma sherpa', relation: 'sister', gender: 'Female', createdDate: '2024-03-10' },
  //   { sn: 3, name: 'dorje sherpa', relation: 'brother', gender: 'Male', createdDate: '2024-03-10' },
  //   { sn: 4, name: 'Damu sherpa', relation: 'mother', gender: 'Female', createdDate: '2024-03-10' },
  // ];

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
            {/* yetavata */}
            <div className="container mt-4">
      <table className="table table-bordered">
        <thead>
          <tr>
            {/* <th>SN</th> */}
            <th>Name</th>
            <th>Relation</th>
            <th>Gender</th>
            {/* <th>Created Date</th> */}
          </tr>
        </thead>
        <tbody>
          {data.map((member) => (
            <tr>
              {/* <td>{member.sn}</td> */}
              <td>{member.Name}</td>
              <td>{member.relation}</td>
              <td>{member.gender}</td>
              {/* <td>{member.createdDate}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {/* sa */}
          </div>
          
        </div>
        
        <footer className="text-center py-1">
          <h3 className="mt-0">
            © 2024 Family Management System. All rights reserved.
          </h3>
        </footer>
      </div>
    </>
  );
}
