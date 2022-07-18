import React from 'react'
import './styles.css'
import './mobile.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/tickitz-logo.png'
import ebu from '../../assets/sponsor/ebu-id.png'
import co21 from '../../assets/sponsor/co21.png'
import hiflix from '../../assets/sponsor/hiflix.png'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
    <footer className="footer container">
      <div className="row">
        <div className="col-md-4 footer-logo">
          <img src={logo} alt="tickitz" />
          <p>Stop waiting in line. Buy tickets conveniently, watch movies quietly.</p>
        </div>
        <div className="col-md-2 explore">
          <h3>Explore</h3>
          <div className="exp-list">
            <p>Home</p>
            <p>List Movies</p>
          </div>
        </div>
        <div className="col-md-3">
          <h3>Our Sponsor</h3>
          <div className="spons-list">
            <div className="sponsor"><img src={ebu} alt="ebu-id" /></div>
            <div className="sponsor"><img src={co21} alt="cineone21" /></div>
            <div className="sponsor"><img src={hiflix} alt="hiflix" /></div>
          </div>
        </div>
        <div className="col-md-3">
          <h3>Follow us</h3>
          <div className="social-list">
          <div className="social d-flex">
            <FaFacebookF className='icon'/>
            <Link to="/">Tickitz Cinema Id</Link>
          </div>
          <div className="social d-flex">
            <FaInstagram className='icon'/>
            <Link to="/">Tickitz Cinema Id</Link>
          </div>
          <div className="social d-flex">
            <FaTwitter className='icon'/>
            <Link to="/">tickitz.id</Link>
          </div>
          <div className="social d-flex">
            <FaYoutube className='icon'/>
            <Link to="/">Tickitz Cinema Id</Link>
          </div>
          </div>
          
        </div>
      </div>
      <div className="footer-copyright">
        <p>© 2020 Tickitz. All Rights Reserved</p>
      </div>
    </footer>
    </>
  )
}

export default Footer