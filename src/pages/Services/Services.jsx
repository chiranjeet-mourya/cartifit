import React from 'react'
import "./services.css"
import ServicesDesign from "../../assets/service-design.svg";
import Serviceshosting from "../../assets/service-hosting.svg";
import Servicessocial from "../../assets/service-social.svg";
import Servicesseo from "../../assets/service-seo.svg";
import Servicescloud from "../../assets/service-cloud.svg";
import Servicessecure from "../../assets/service-secure.svg";

function Services() {
  return (
    <>
    <div className="services_main">
    <div className="services">
      <div className="container">
        <div className="text">
        <h1>Services</h1>
          <div className="div">
            <a href="/">Home &nbsp;</a>
            <span>/ &nbsp; services</span>
          </div>
          
        </div>
      </div>
    </div>

    <div className="services_content">
      <div className="container">
          <div className="content">
            <h1>What makes us different?</h1>
            <p>At our core, what sets us apart is our unwavering commitment to the reliability and security of our clients’ communications. We understand the critical importance of effective communication in today’s digital world, and we go above and beyond to ensure that every message is delivered safely and securely.</p>
            <p>Our dedication to innovation enables us to stay ahead of emerging threats and challenges, providing our clients with peace of mind, knowing that their communication strategies are in capable hands.</p>
            <p>Furthermore, our customer-centric approach means that we tailor our services to meet the unique needs and requirements of each client, offering personalized solutions and unparalleled support every step of the way.</p>
            <p>With our focus on reliability, security, innovation, and customer satisfaction, we are proud to be the trusted partner for businesses and individuals seeking to enhance their communication strategies with SMS and email certification services.</p>
          </div>
      </div>
    </div>

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
    </div>
    </>
  )
}

export default Services