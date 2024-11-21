import React from 'react'
import "./about.css"
import Vision from "../../assets/vision.jpg"
import Mission from "../../assets/mission.png"

function About() {
  return (
    <>
    <div className="about_main">
    <div className="about_section">
      <div className="container">
        <div className="text">
          <h1>About</h1>
          <div className="div">
            <a href="/">Home &nbsp;</a>
            <span>/ &nbsp; About</span>
          </div>
        </div>
      </div>
    </div>

    <div className="about_content">
      <div className="container">
        <div className="content">
          <h2>About Us</h2>
          <p>Synerthink delivers trusted data solutions for the connected world. Co-founded by entrepreneurs with vast experience in the global telecom ecosystem, communications are in the company’s DNA. Certifi, a product of Synerthink, is an authentic and reliable Digital Electronic Communication platform. As a new initiative of Digital India, Certifi sets a benchmark for secure, efficient, and eco-friendly communication. It ensures privacy and authenticity through features like time stamping, content certification, and message encryption, catering to both modern and traditional users while aligning with the relevant provisions of the Laws of India for proof of electronic communication.</p>
        </div>
      </div>
    </div>

    <div className="about_img_content">
      <div className="container">
        <div className="flex">
          <div className="content_box">
            <div className="image">
              <img src={Vision} alt="" />
            </div>
            <div className="div">
            <h3>Vision</h3>
            <p>Our vision is to be the leading provider of Certified Communication Services globally, recognized for our commitment to service & product excellence, innovation, and customer satisfaction. We aim to continuously adapt to meet the evolving needs of our clients in an ever-changing digital landscape. </p>
            </div>
          </div>
          <div className="content_box">
          <div className="image">
              <img src={Mission} alt="" />
            </div>
            <div className="div">
            <h3>Mission</h3>
            <p>Our mission is to empower businesses and individuals with reliable and secure communication solutions through our Certified Communication Service. We strive to enhance their effectiveness.  </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default About