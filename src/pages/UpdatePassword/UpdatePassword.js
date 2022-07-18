import React, { useState } from "react";
import logo2 from "../../assets/tickitz-logo.png";
import "./updatepassword.css";
import "./mobile.css";
import { Link } from "react-router-dom";
import logo1 from "../../assets/signup/bg-2.png";
import line from "../../assets/icons/line.png";
import { AiOutlineEye } from "react-icons/ai";

const UpdatePassword = () => {
  const [password, setPassword] = useState(false);
  const togglePassword = () => {
    setPassword(!password);
  };
  return (
    <>
      <div className="split left-up">
        <div className="logo-up">
          <Link to="/">
            <img src={logo1} alt="tickitz" />
          </Link>
          <h1>Lets reset your password</h1>
          <p>
            To be able to use your account again, please complete the following
            steps
          </p>
          <div className="rounded-box">
            <div className="round">1</div>
            <p>Fill your complete email</p>
          </div>
          <img src={line} alt="" />
          <div className="rounded-box">
            <div className="round">2</div>
            <p>Check your email</p>
          </div>
          <img src={line} alt="" />
          <div className="rounded-box">
            <div className="round active">3</div>
            <p className="active">Enter your new password</p>
          </div>
          <img src={line} alt="" />
          <div className="rounded-box">
            <div className="round">4</div>
            <p>Done</p>
          </div>
        </div>
      </div>

      <div className="split right-up">
        <div className="right-box-up">
          <img src={logo2} alt="" />
          <h4>Fill your complete password</h4>
          <h4>Set Password</h4>
          <h3>Set your new password</h3>
          <form>
            <label htmlFor="">Password</label>
            <br />
            <input
              type={password ? "text" : "password"}
              placeholder="Enter your password"
            />
            <AiOutlineEye className="icons" onClick={togglePassword} />
            <br />
            <label htmlFor="">Confirm Password</label>
            <br />
            <input
              type={password ? "text" : "password"}
              placeholder="Enter your confirm password"
            />
            <AiOutlineEye className="icons" onClick={togglePassword} />
            <br />
            <Link to="/updatepassword">
              <button>Submit</button>
            </Link>
            <br />
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdatePassword;
