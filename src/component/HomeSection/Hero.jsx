import React from 'react'
import { Link } from 'react-router-dom'
import {
    FaFacebook,
    FaLinkedin,
    FaInstagram,
    FaTwitter,
  } from "react-icons/fa";

function Hero() {
  return (
    <>
    <div className="hero_section">
        <div className="container">
        <div className="banner_content">
            <h1>
              Delivering Superior Services <br /> <span>IT Solutions.</span>
            </h1>
            <p>
              You can easily change any design to your own. It is also highly{" "}
              <br /> customizable SEO friendly template.
            </p>
            <div className="icon">
              <Link>
                <FaTwitter />
              </Link>
              <Link>
                <FaFacebook />
              </Link>
              <Link>
                <FaLinkedin />
              </Link>
              <Link>
                <FaInstagram />
              </Link>
            </div>
            <div className="box_flex">
              <Link>Get Quotes</Link>
              <Link>Get Started</Link>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Hero