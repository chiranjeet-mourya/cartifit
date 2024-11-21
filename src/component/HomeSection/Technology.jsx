import React from 'react'
import "./homesection.css"  
import ServicesDesign from "../../assets/service-design.svg";
import Serviceshosting from "../../assets/service-hosting.svg";
import Servicessocial from "../../assets/service-social.svg";
import Servicesseo from "../../assets/service-seo.svg";
import Servicescloud from "../../assets/service-cloud.svg";
import Servicessecure from "../../assets/service-secure.svg";

function Technology() {
  return (
    <>
    <div className="technology_section">
          <div className="container">
            <div className="technology_box">
              <div className="box">
                <div className="icon">
                  <img src={ServicesDesign} alt="" />
                </div>
                <div className="title">
                  <h4>
                    <a href="/">Application Design</a>
                  </h4>
                  <p>
                    Ronsectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <img src={Serviceshosting} alt="" />
                </div>
                <div className="title">
                  <h4>
                    <a href="/">Web Hosting</a>
                  </h4>
                  <p>
                    Ronsectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <img src={Servicessocial} alt="" />
                </div>
                <div className="title">
                  <h4>
                    <a href="/">Social Media</a>
                  </h4>
                  <p>
                    Ronsectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>

              <div className="box">
                <div className="icon">
                  <img src={Servicesseo} alt="" />
                </div>
                <div className="title">
                  <h4>
                    <a href="/">SEO Optimization</a>
                  </h4>
                  <p>
                    Ronsectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <img src={Servicescloud} alt="" />
                </div>
                <div className="title">
                  <h4>
                    <a href="/">Cloud Server</a>
                  </h4>
                  <p>
                    Ronsectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <img src={Servicessecure} alt="" />
                </div>
                <div className="title">
                  <h4>
                    <a href="/">Data Secuity</a>
                  </h4>
                  <p>
                    Ronsectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Technology