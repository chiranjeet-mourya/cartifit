import React from 'react'
import Blog1 from "../../assets/blog-1.jpg"
import Blog2 from "../../assets/blog-2.jpg"
import Blog3 from "../../assets/blog-3.jpg"

function Blog() {
  return (
    <>
    <div className="blog_section">
      <div className="container">
      <div className="text">
          <h1>Blogs</h1>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div className="blog_flex_area">
          <div className="blog_box">
            <div className="blog_img">
              <img src={Blog1} alt="" />
            </div>
            <div className="content">
              <p className="para">Domain & Hosting</p>
              <h3>How to host website on any hosting provider?</h3>
              <div className="time">
                <p>William Bla</p>
                <p><time datetime="Feb 1, 2022">Feb 1, 2022</time></p>
              </div>
            </div>
          </div>
          <div className="blog_box">
          <div className="blog_img">
              <img src={Blog2} alt="" />
            </div>
            <div className="content">
              <p className="para">Advertisement</p>
              <h3>How to create add on google adwords?</h3>
              <div className="time">
                <p>Jobi Ret</p>
                <p><time datetime="Oct 5, 2022">Oct 5, 2022</time></p>
              </div>
            </div>
          </div>
          <div className="blog_box">
          <div className="blog_img">
              <img src={Blog3} alt="" />
            </div>
            <div className="content">
              <p className="para">Marketing</p>
              <h3>What is digital marketing and why is important?</h3>
              <div className="time">
                <p>Main Dow</p>
                <p><time datetime="Dec 22, 2022">Dec 22, 2022</time></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Blog