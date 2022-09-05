import React, { useEffect, useState } from "react";
import logo from "../../assets/signup/bg-2.png";
import logo2 from "../../assets/tickitz-logo.png";
import "./signup.css";
import "./mobile.css";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { AuthRegister } from "../../redux/actions/Register";

const Signup = () => {
  const [password, setPassword] = useState(false);
  const togglePassword = () => {
    setPassword(!password);
  };

  const dispatch = useDispatch();
  const { error, loading, isRegister } = useSelector((state) => state.register);
  const [register, setRegister] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(AuthRegister(register));
  };

  let navigate = useNavigate();
  
  useEffect(() => {
    if (isRegister === true) {
      alert("Register success");
      navigate("/", { replace: true });
    } else {
      navigate("/signup", { replace: true });
    }
  }, [isRegister, navigate]);

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
          <form onSubmit={handleRegister}>
            <label htmlFor="">First Name</label>
            <br />
            <input
              type="text"
              placeholder="Enter your first name"
              required
              onChange={(e) => {
                setRegister((prevData) => ({
                  ...prevData,
                  firstName: e.target.value,
                }));
              }}
            />
            <br />
            <label htmlFor="">Last Name</label>
            <br />
            <input
              type="text"
              placeholder="Enter your last name"
              required
              onChange={(e) => {
                setRegister((prevData) => ({
                  ...prevData,
                  lastName: e.target.value,
                }));
              }}
            />
            <br />
            <label htmlFor="">Phone number</label>
            <br />
            <input
              type="text"
              placeholder="Enter your phone number"
              required
              onChange={(e) => {
                setRegister((prevData) => ({
                  ...prevData,
                  phoneNumber: e.target.value,
                }));
              }}
            />
            <br />
            <label htmlFor="">Email</label>
            <br />
            <input
              type="text"
              placeholder="Enter your email"
              required
              onChange={(e) => {
                setRegister((prevData) => ({
                  ...prevData,
                  email: e.target.value,
                }));
              }}
            />
            <br />
            <label htmlFor="">Password</label>
            <br />
            <input
              type={password ? "text" : "password"}
              placeholder="Enter your password"
              onChange={(e) => {
                setRegister((prevData) => ({
                  ...prevData,
                  password: e.target.value,
                }));
              }}
            />
            <AiOutlineEye className="icons" onClick={togglePassword} required />
            <br />
            {loading ? (
              <button className="btn btn-primary" disabled={true}>
                Loading...
              </button>
            ) : (
              <button onSubmit={handleRegister}>Sign Up</button>
            )}
            {error && (
              <div className="text-center mt-3" style={{ color: "red" }}>
                {error.message}
              </div>
            )}
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
