import React from 'react'
import Team1 from "../../assets/team-1.jpg"
import Team2 from "../../assets/team-2.jpg"
import Team3 from "../../assets/team-3.jpg"
import Team4 from "../../assets/team-4.jpg"
import {
    FaFacebook,
    FaLinkedin,
    FaInstagram,
    FaTwitter,
  } from "react-icons/fa";

function Team() {
  return (
    <>
    <div className="team_content">
          <div className="container">
            <div className="text">
              <h1>Team</h1>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="team_images_flex">
              <div className="img_content">
                    <img src={Team1} alt="" />
                    <div className="content">
                      <h4>Jhone Bi</h4>
                      <span>Application Manager</span>
                      <div className="social_icon">
                        <div className="icon"><FaTwitter/></div>
                        <div className="icon"><FaFacebook/></div>
                        <div className="icon"><FaLinkedin/></div>
                        <div className="icon"><FaInstagram/></div>
                      </div>
                    </div>
              </div>
              <div className="img_content">
              <img src={Team2} alt="" />
                    <div className="content">
                      <h4>Sani Awesome</h4>
                      <span>Social Media</span>
                      <div className="social_icon">
                      <div className="icon"><FaTwitter/></div>
                        <div className="icon"><FaFacebook/></div>
                        <div className="icon"><FaLinkedin/></div>
                        <div className="icon"><FaInstagram/></div>
                      </div>
                    </div>
              </div>
              <div className="img_content">
              <img src={Team3} alt="" />
                    <div className="content">
                      <h4>Andrio Willi</h4>
                      <span>Content Writer</span>
                      <div className="social_icon">
                      <div className="icon"><FaTwitter/></div>
                        <div className="icon"><FaFacebook/></div>
                        <div className="icon"><FaLinkedin/></div>
                        <div className="icon"><FaInstagram/></div>
                      </div>
                    </div>
              </div>
              <div className="img_content">
              <img src={Team4} alt="" />
                    <div className="content">
                      <h4>Afa Jonson</h4>
                      <span>Business Manager</span>
                      <div className="social_icon">
                      <div className="icon"><FaTwitter/></div>
                        <div className="icon"><FaFacebook/></div>
                        <div className="icon"><FaLinkedin/></div>
                        <div className="icon"><FaInstagram/></div>
                      </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Team