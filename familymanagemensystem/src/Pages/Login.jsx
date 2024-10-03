
import React, { useState } from "react"; 
import './Login.css';
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');

    const login = (e) => {
        e.preventDefault(); 
        const Email = "pembas650@gmail.com";
        const Password = "jamesbond007";

        if (email === Email && password === Password) {
            navigate("/Homepage");
        } else {
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                <form onSubmit={login} className="center" style={{ width: "400px" }}>
                    <div className="log">
                        <h1 style={{ textAlign: "center", marginBottom: "50px" }}>Login</h1>
                        <label style={{ width: "110px" }}>Email Address:</label>
                        <input 
                            type="text" 
                            required 
                            style={{ marginBottom: '20px' }} 
                            className="form-control rounded" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                        <br />
                        <label style={{ width: "110px" }}>Password:</label>
                        <input 
                            type="password" 
                            required 
                            style={{ marginBottom: '20px' }} 
                            className="form-control rounded" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        <br />
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <button type="submit" className="btn btn-padding-x-2 border-primary" style={{ marginBottom: "15px" }}>Login</button>
                    </div>
                </form>
            </div>
        </>
    );
}







