import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const registerUser = async () => {
        let result = await fetch("http://localhost:5000/register", { 
            method: "post", 
            body: JSON.stringify({name, email, password}),
            headers: {
                "Content-Type": "application/json"
            }
        });
        result = await result.json();
        localStorage.setItem("user", JSON.stringify(result.result));
        localStorage.setItem("token", JSON.stringify(result.token));
        if(result){
            setTimeout(() => navigate("/"), 1000);
        }
    }

    return(
        <div className="signup">
            <h1>Sign Up Form</h1>
            <form autoComplete="off">
                <input className="input-box" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
                <input className="input-box" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
                <input className="input-box" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
                <button className="sign-button" onClick={registerUser}>Sign Up</button>
            </form>
        </ div>
    )
}

export default Signup;