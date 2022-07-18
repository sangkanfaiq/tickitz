import React, { useState } from "react";
import logo from "../../assets/signup/bg-2.png";
import logo2 from "../../assets/tickitz-logo.png";
import "./signup.css";
import "./mobile.css"
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

const Signup = () => {
  const [password, setPassword] = useState(false);
  const togglePassword = () => {
    setPassword(!password)
  }
  
  return (
    <>
      <div className="split-su left-su">
        <div className="logo-su">
          <Link to="/">
            <img src={logo} alt="tickitz" />
          </Link>
          <h1>wait, watch, wow!</h1>
        </div>
      </div>

      <div className="split-su right-su">
        <div className="right-box-su">
          <img src={logo2} alt="" />
          <h4>Sign Up</h4>
          <h3>Fill your additional details</h3>
          <form>
            <label htmlFor="">First Name</label>
            <br />
            <input type="text" placeholder="Enter your first name" required/>
            <br />
            <label htmlFor="">Last Name</label>
            <br />
            <input type="text" placeholder="Enter your last name" required/>
            <br />
            <label htmlFor="">Phone number</label>
            <br />
            <input type="text" placeholder="Enter your phone number" required/>
            <br />
            <label htmlFor="">Email</label>
            <br />
            <input type="text" placeholder="Enter your email" required/>
            <br />
            <label htmlFor="">Password</label>
            <br />
            <input type={password ? "text" : "password"} placeholder="Enter your password"/>
           <AiOutlineEye className="icons" onClick={togglePassword} required/>
            <br />
            <button>Sign Up</button>
            <br />
            <p className="bottom">
              Already have account? <Link to="/signin">Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
