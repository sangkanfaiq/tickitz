import React from "react";
import logo2 from "../../assets/tickitz-logo.png";
import "./styles.css";
import "./mobile.css";
import { Link } from "react-router-dom";
import logo1 from "../../assets/signup/bg-2.png";
import line from "../../assets/icons/line.png"

const ForgotPassword = () => {
  return (
    <>
      <div className="split-fp left-fp">
        <div className="logo-fp">
          <Link to="/">
            <img src={logo1} alt="tickitz" />
          </Link>
          <h1>Lets reset your password</h1>
          <p>
            To be able to use your account again, please complete the following
            steps
          </p>
          <div className="rounded-box">
            <div className="round active">1</div>
            <p className="active">Fill your complete email</p>
          </div>
          <img src={line} alt="" />
          <div className="rounded-box">
            <div className="round">2</div>
            <p>Check your email</p>
          </div>
          <img src={line} alt="" />
          <div className="rounded-box">
            <div className="round">3</div>
            <p>Enter your new password</p>
          </div>
          <img src={line} alt="" />
          <div className="rounded-box">
            <div className="round">4</div>
            <p>Done</p>
          </div>
        </div>
      </div>

      <div className="split-fp right-fp">
        <div className="right-box-fp">
          <img src={logo2} alt="" />
          <h4>Fill your complete email</h4>
          <h4>Forgot Password</h4>
          <h3>We'll send a link to your email shortly</h3>
          <form>
            <label htmlFor="">Email</label>
            <br />
            <input type="text" placeholder="Enter your email" />
            <br />
            <br />
            <Link to="/updatepassword"><button>Send</button></Link>
            <br />
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
