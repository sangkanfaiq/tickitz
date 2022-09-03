import React, { useState } from "react";
import "./NavbarLogin.scss";
import { Link, useNavigate } from "react-router-dom";
import logo1 from "../../assets/tickitz-logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import profileIcon from "../../assets/profile/profile.png";
import { BiUser } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthLogout } from "../../redux/actions/Auth";

const NavbarLogin = () => {
  const [toggle, setToggle] = useState(false);
  const [panel, setPanel] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {isLogin} = useSelector((state) => state.auth);
  useEffect(()=> {
    if(isLogin == false) {
      navigate('/', {replace: true})
    }
  },[isLogin])
  return (
    <nav className="navbar-login">
      <div className="container">
        <div className="logo-login">
          <Link to="/">
            <div className="imgbox-login">
              <img src={logo1} alt="logo" title="Tickitz" />
            </div>
          </Link>
          <div className={toggle ? "navmenu-login active" : "navmenu-login"}>
            <div className="links-login">
              <Link to="/">
                <div className="navlinks-login active">Home</div>
              </Link>
              <Link to="/movies">
                <div className="navlinks-login">List Movies</div>
              </Link>
            </div>
            <div className="navbutton-login">
              <img src={profileIcon} alt="profile" onClick={()=> setPanel(!panel)}/>
              <div className={panel ? "profile-panel active" : "profile-panel"}>
                <div className="panel">
                  <BiUser className="profile-icon" />
                  Profile
                </div>
                <div className="panel" onClick={()=> {
                    alert('You has been logout')
                    dispatch(AuthLogout())
                }}>
                  <FiLogOut className="logout-icon" />
                  Logout
                </div>
              </div>
            </div>
          </div>
          <div className="nav-icon-login" onClick={() => setToggle(!toggle)}>
            {toggle ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarLogin;
