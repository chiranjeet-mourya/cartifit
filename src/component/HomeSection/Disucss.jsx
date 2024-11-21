import React from 'react'
import { Link } from 'react-router-dom'

function Disucss() {
  return (
    <>
    <div className="discuss_section">
      <div className="container">
            <div className="content">
              <h3>Let's Discuss your Projects</h3>
              <p>We pride ourselves with our ability to perform and deliver results. Use the form below to discuss your project needs with our team, we will <br /> get back asap</p>
              <Link to="mailto:info@example.com">Contact Us</Link>
            </div>
      </div>
    </div>
    </>
  )
}

export default Disucss