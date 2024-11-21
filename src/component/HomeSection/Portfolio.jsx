import React from 'react'
import Product1 from "../../assets/product-1.jpg";
import Product2 from "../../assets/product-2.jpg";
import Product3 from "../../assets/product-3.jpg";
import Product4 from "../../assets/product-4.jpg";
import Product5 from "../../assets/product-5.jpg";
import Product6 from "../../assets/product-6.jpg";

function Portfolio() {
  return (
    <>
    <div className="portfolio">
          <div className="container">
            <div className="text">
              <h1>Our Portfolio</h1>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="category">
              <ul>
                <li>All</li>
                <li>App Design</li>
                <li>App Development</li>
                <li>Branding</li>
                <li>It Solutions</li>
              </ul>
            </div>
            <div className="portfolio_image">
              <div className="image_box">
                <img src={Product1} alt="" />
              </div>
              <div className="image_box">
                <img src={Product2} alt="" />
              </div>
              <div className="image_box">
                <img src={Product3} alt="" />
              </div>

              <div className="image_box">
                <img src={Product4} alt="" />
              </div>
              <div className="image_box">
                <img src={Product5} alt="" />
              </div>
              <div className="image_box">
                <img src={Product6} alt="" />
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Portfolio