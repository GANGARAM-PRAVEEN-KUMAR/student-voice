import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.css';
import loginGif from './stu login.gif';

function LoginComponent() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        console.log("start");
        try {
            const response = await axios.post("http://localhost:4000/login", {
                email: email,
                password: password,
            });

            if (response.data.status === "success") {
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("role", response.data.role);
                localStorage.setItem("username", response.data.username);
                localStorage.setItem("userId", response.data.userId);
                toast.success("Login Successful");
                navigate((response.data.role === "admin") ? "/adminhome" : "/userhome");
            } else {
                toast.error("User Not Found");
                // navigate("/signup")
            }
        } catch (error) {
            toast.error("Internal Error");
            navigate("/signup")
        }
    };

    return (
        <>
            <div className="login">
                <div className="container">
                    <p>Welcome, Please sign-in</p>
                    <form onSubmit={handleLogin}>
                        <p>Email</p>
                        <input 
                            type="email" 
                            placeholder="Enter email" 
                            id="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <hr />
                        <p>Password</p>
                        <input 
                            type="password" 
                            placeholder="Enter user password" 
                            id="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <hr />
                        <input type="checkbox" id="checkbox" />Remember me
                        <button type="submit" id="button"><span>Log in</span></button>
                    </form>
                    <div className="signup">
                        <span>Don't have an account? <NavLink to="/signup" id="signup-text">Sign up</NavLink></span>
                    </div>
                </div>
                <div className="image">
                    <img src={loginGif} alt="Login illustration" id="com-img" />
                </div>
            </div>
            <ToastContainer />
        </>
    );
}

export default LoginComponent;
