import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signin.css";

export default function Signin(){

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const navigate = useNavigate();

// LOGIN
const handleLogin = () => {

if(email && password){

const user = { email };
localStorage.setItem("user", JSON.stringify(user));

alert("Login Successful");

// reload for navbar update
window.location.href = "/";

}else{
alert("Enter all fields");
}

};

//  LOGOUT (optional inside page)
const handleLogout = () => {
localStorage.removeItem("user");
alert("Logged Out");
window.location.reload();
};

return(

<div className="auth-container">

<div className="auth-box">

<h2>Sign In</h2>

<input
type="email"
placeholder="Enter Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Enter Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button className="signin-btn" onClick={handleLogin}>
Sign In
</button>

{/* OPTIONAL SIGNOUT BUTTON */}
<button className="signout-btn" onClick={handleLogout}>
Sign Out
</button>

</div>

</div>

);

}