import { useState, Fragment } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './header.css'
import Brandlogo from "./images/logo1.png"


const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
      setColorchange(true);
    }
    else {
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);


  return (
    <Fragment >
      <div className="hero_area ">
        <nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
          <div className='container '>
            <div className=" Navcontainer">
              <div className="logo d-flex">
                <img style={{ height: "40px", width: "40px", borderRadius: "259px", marginRight: "5px", background: "transparent" }} src={Brandlogo} alt='logo' />
                <Link to="/" style={{ textDecoration: "none", color: "#4b208c" }}><h4 style={{ color: "#4b208c", fontSize: "22px", fontWeight: "700", marginTop: "3px" }}>B.E.E.P.M. ASBL</h4></Link>
              </div>
              <div className="menu-icon" onClick={handleShowNavbar}>
                {/* <button className='btn btn-danger'>Back</button> */}
                <span> </span>
                <span id="spanleft"></span>
                <span> </span>
              </div>
              <div className={`mt-2 nav-elements  ${showNavbar && 'active'}`} checked>
                <div className='menu-closed' onClick={handleShowNavbar}>
                  <span>X</span>
                </div>
                <ul>
                  <li>
                    <NavLink to="/home">Accueil</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">Apropos</NavLink>
                  </li>
                  <li>
                    <NavLink to="/service">Service</NavLink>
                  </li><li>
                    <NavLink to="/gallery">Gallerie</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">contact</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact" style={{ display: "none" }}>Contact</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>

    </Fragment>
  )
}

export default Header