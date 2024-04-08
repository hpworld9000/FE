import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = async () => {
        let result = await fetch("http://localhost:5000/login", { 
            method: "post", 
            body: JSON.stringify({email, password}),
            headers: {
                "Content-Type": "application/json"
            }
        });
        result = await result.json();
        if(result.token){
            localStorage.setItem("user", JSON.stringify(result.result));
            localStorage.setItem("token", JSON.stringify(result.token));
            navigate("/");
        } else {
            alert(result.error)
        }
    }

    return(
        <div className="login singup">
        <h1>Login Form</h1>
        {/* <form autoComplete="off"> */}
            <input className="input-box" defaultValue={email} type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
            <input className="input-box" defaultValue={password} type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
            <button className="sign-button" onClick={loginUser}>Login</button>
        {/* </form> */}
        </ div>
    )
}

export default Login;