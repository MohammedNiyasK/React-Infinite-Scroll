import React, { useState, useContext,useEffect } from "react";
import Input from "../Input/Input";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/LoginContext";

const Login = () => {
  const navigate = useNavigate();
  const { isLogin, setIsLogin } = useContext(UserContext);

  useEffect(() => {
    const userLog = localStorage.getItem('isLoggedIn')

    if(userLog === '1'){
      setIsLogin(true)
      navigate('/home')
    }

  },[])
  

  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const onChange = (e) => {
    setValues((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = values;

    if (username === "foo" && password === "bar") {
      setIsLogin(true);

      localStorage.setItem('isLoggedIn','1')
      navigate("/home");
    } else {
      console.log("incorrect");
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="username"
          name="username"
          onChange={onChange}
        />
        <Input
          type="password"
          placeholder="password"
          name="password"
          onChange={onChange}
        />
        <button className="button">Login</button>
      </form>
    </div>
  );
};

export default Login;
