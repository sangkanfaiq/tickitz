import React, { useEffect, useState } from "react";
import logo from "../../assets/signup/bg-2.png";
import logo2 from "../../assets/tickitz-logo.png";
import "./styles.css";
import "./mobile.css";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { AuthLogin } from "../../redux/actions/Auth";
import { useDispatch, useSelector } from "react-redux";

const Signin = () => {
  const [password, setPassword] = useState(false);
  const togglePassword = () => {
    setPassword(!password);
  };

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, loading, isLogin } = useSelector((state) => state.auth);
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(AuthLogin(formLogin));
  };
  
  useEffect(() => {
    if (isLogin === true) {
      navigate("/", { replace: true }); //kita menghapus routing login dari browser
    } else {
      navigate("/signin", { replace: true });
    }
  }, [isLogin]);

  return (
    <>
      <div className="split-si left-si">
        <div className="logo-si">
          <Link to="/">
            <img src={logo} alt="tickitz" />
          </Link>
          <h1>wait, watch, wow!</h1>
        </div>
      </div>

      <div className="split-si right-si">
        <div className="right-box-si">
          <img src={logo2} alt="" />
          <h4>Sign In</h4>
          <h3>
            Sign in with your data that you entered during your registration
          </h3>

          <form onSubmit={handleLogin}>
            <label htmlFor="">Email</label>
            <br />
            <input type="email" name='email' placeholder="Enter your email" required
              onChange={(e) => {
                setFormLogin((prevData) => ({
                  ...prevData,
                  email: e.target.value,
                }));
              }}
            />
            <br />
            <label htmlFor="">Password</label>
            <br />
            <input type={password ? "text" : "password"} placeholder="Enter your password" required
              onChange={(e) => {
                setFormLogin((prevData) => ({
                  ...prevData,
                  password: e.target.value,
                }));
              }}
            />
            <AiOutlineEye className="icons" onClick={togglePassword} />
            <br />
            {loading ? (
              <button className="btn btn-primary" disabled={true}>
                Loading...
              </button>
            ) : (
              <button>Sign In</button>
            )}
            {error && <div className="text-center mt-3" style={{color: 'red'}}>{error.message}</div>}
            <br />
            <p className="bottom">Forgot your password? <Link to="/forgotpassword">Reset now</Link></p>
            <p className="bottom">Don't have and account? <Link to="/signup">Sign Up</Link></p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
