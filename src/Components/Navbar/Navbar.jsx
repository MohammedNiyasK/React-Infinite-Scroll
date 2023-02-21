import React, { useContext } from "react";
import { UserContext } from "../Context/LoginContext";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { setIsLogin } = useContext(UserContext);

  const clickHandler = () => {
    localStorage.removeItem('isLoggedIn')
    setIsLogin(false);
    navigate("/");
  };
  return (
    <div className="navbar">
      <div className="navbar__left">
        <h1>React Infinite Scroll</h1>
        
        </div>
      <div className="navbar__right">
        <button className="button" onClick={clickHandler}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
