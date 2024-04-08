import * as React from 'react';

import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
  let auth = localStorage.getItem("user");

  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
    return false;
  }

  return (
    <>
      <ul className='nav-bar'>
        <li><Link to="/" >Products</Link></li>
        <li><Link to="/add-product" >Add Product</Link></li>
        {!auth && <li><Link className='public-links' to="/signup" >Sign Up</Link></li>}
        {!auth && <li><Link className='public-links' to="/login" >Login</Link></li>}
        {auth && <li><button className='public-links' onClick={logoutUser} >Logout</button></li>}
      </ul>
    </>
  );
}