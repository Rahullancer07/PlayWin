import React from "react";
import "./Navbar.css";
import { useNavigate } from 'react-router-dom';

const Navbar = ({ user , setLogUser }) => {
  const navigate = useNavigate();
  const handleUserLogout = () => {
    setLogUser({});
    navigate('/');
  }
  return (
    <div>
      <nav className="navbar">
        <h1 className="navbar_username">{user.name}</h1>
        <h2>Total Rewards  : {user.rewards}$</h2>
        <button
          className="navbar_logoutBtn"
          onClick={handleUserLogout}
        >
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
