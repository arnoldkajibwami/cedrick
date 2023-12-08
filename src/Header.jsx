import { useState, Fragment, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './header.css'
import Brandlogo from "./images/logo1.png"
import { useTranslation } from 'react-i18next'

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
    const navigate = useNavigate()
    window.scrollTo(0, 10)
    navigate(!showNavbar)
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

  const { t, i18n } = useTranslation();

  useEffect (() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  },[])

  const lng = navigator.language;

  return (
    <Fragment >
      <div className="hero_area">
        <nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
          <div className='container'>
            <div className=" Navcontainer">
              <div className="logo d-flex">
                <img style={{ height: "40px", width: "40px", borderRadius: "259px", marginRight: "5px", background: "transparent" }} src={Brandlogo} alt='logo' />
                <Link to="/" style={{ textDecoration: "none"}}><h4>B.E.E.P.M. </h4></Link>
              </div>
              <div className="menu-icon" onClick={handleShowNavbar}>
                <span> </span>
                <span id="spanleft"></span>
                <span> </span>
              </div>
              <div className={`mt-2 nav-elements  ${showNavbar && 'active'}`} checked>
                <div className='menu-closed' onClick={handleShowNavbar}>

                  <button class="Buttonclose">
                    <span class="X"></span>
                    <span class="Y"></span>
                    <div class="closebutton">Close</div>
                  </button>

                </div>
                <ul>
                  <li>
                    {/* <NavLink to="/home" onClick={handleShowNavbar}>{t('keywords.Accueil')}</NavLink> */}
                    <NavLink to="/home" onClick={handleShowNavbar}>Accueil</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about" onClick={handleShowNavbar}>Apropos</NavLink>
                  </li>
                  <li>
                    <NavLink to="/service" onClick={handleShowNavbar}>Service</NavLink>
                  </li><li>
                    <NavLink to="/gallery" onClick={handleShowNavbar}>Gallerie</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact" onClick={handleShowNavbar}>contact</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact" style={{ display: "none" }} onClick={handleShowNavbar}>Contact</NavLink>
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