import React, { useEffect, useState } from 'react'
import "./footer.css"
import Logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
import { FaFacebook, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { FaXTwitter , FaYoutube } from "react-icons/fa6";

function Footer() {

    const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  const styles = {
    scrollToTopButton: {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      backgroundColor: '#025ADD',
      color: '#fff',
      padding: '10px',
      borderRadius: '50%',
      cursor: 'pointer',
      zIndex: 1000,
    },
  };

  return (
    <>
     <footer>
        <div className="container">
            <div className="footer_content">
                <div className="box1">
                    <div className="footer_logo">
                        <Link><img src={Logo} alt="" /></Link>
                        <p>A patented, secure, and made-in-India solution for certified communication through email and SMS, empowering the masses through Digital India.</p>
                    </div>
                </div>
                <div className="box2">
                    <h2>Company</h2>
                    <span>Gurugram, Haryana, India</span>
                    <br />
                    <span>info@synerthinksolutions.com</span>
                </div>
                <div className="box3">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/privacy">Privacy policy</Link></li>
                        <li><Link to="/condition">Condition</Link></li>
                    </ul>
                </div>
                <div className="box4">
                    <h2>Contact Us</h2>
                    <div className="circle">
                        <div className="circle_icon"><FaFacebook className='icon'/></div>
                        <div className="circle_icon"><FaXTwitter className='icon'/></div>
                        <div className="circle_icon"><FaYoutube className='icon'/></div>
                        <div className="circle_icon"><FaLinkedin className='icon'/></div>
                    </div>
                </div>
            </div>
            {showButton && (
        <div className="toptobottom" onClick={scrollToTop} style={styles.scrollToTopButton}>
          <FaArrowUp />
        </div>
      )}
        </div>
    </footer>
    
    </>
  )
}

export default Footer