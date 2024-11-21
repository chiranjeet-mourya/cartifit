import React, { useEffect, useState } from 'react'
import "./header.css"
import Logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
import MenuIcon from "../../assets/menu_icon.png"
// import { FaXmark } from "react-icons/fa6";

function Header() {

  // State for toggling mobile menu
  const [isMobile, setIsMobile] = useState(true);

  const [isSticky, setIsSticky] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>

<header className={isSticky ? 'sticky' : ''}>
      <div className="container">
        <div className="flex">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </div>

          {/* Main Navigation Menu */}
          <nav className={isMobile ? 'nav-links-mobile' : 'nav-links'} onClick={() => setIsMobile(false)}>
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/privacy">Privacy</Link></li>
              <li><Link to="/condition">Condition</Link></li>
            </ul>
          </nav>
            <Link to="/login" className="login" activeClassName="active">Login</Link>

          {/* Mobile Menu Icon */}
          <div className="mobile" onClick={() => setIsMobile(!isMobile)}>
            <img src={MenuIcon} alt="Menu Icon" />
          </div>
        </div>
      </div>
    </header>

    
    </>
  )
}

export default Header