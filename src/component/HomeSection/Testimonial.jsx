import React from 'react'
import "./homesection.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { FaStar } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import Testimonials1 from "../../assets/testimonial-1.jpg";
import Testimonials2 from "../../assets/testimonial-2.jpg";
import Testimonials3 from "../../assets/testimonial-3.jpg";
import Testimonials4 from "../../assets/testimonial-4.jpg";


function Testimonial() {
 
  const settings = {
    dots: true, // Enable dot indicators
    infinite: true, // Loop the slider
    speed: 500, // Transition speed
    slidesToShow: 3, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Automatically slide
    autoplaySpeed: 2000, // Slide every 2 seconds
    responsive: [
      // Responsive breakpoints
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4, // Show 4 slides on medium screens
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1, // Show 3 slides on smaller screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 3 slides on smaller screens
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Show 2 slides on mobile
        },
      },
    ],
  };
    
  return (
    <>
    <div className="testimonials">
          <div className="container">
            <div className="text">
              <h1>Testimonials</h1>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <Slider {...settings} className="testimonials_slider">
              {/* Testimonial 1 */}
              <div className="slider_box">
                <div className="img_content">
                  <div className="image">
                    <img src={Testimonials1} alt="Testimonial 1" />
                  </div>
                  <div className="content">
                    <h3>Jhone Doe</h3>
                    <h4>CFO</h4>
                    <div className="star">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
                <p>
                  <FaQuoteLeft className="color" />
                  &nbsp; Proin iaculis purus consequat sem cure dignissim donec
                  porttitora entum suscipit rhoncus. &nbsp;{" "}
                  <FaQuoteRight className="color" />
                </p>
              </div>

              {/* Testimonial 2 */}
              <div className="slider_box">
                <div className="img_content">
                  <div className="image">
                    <img src={Testimonials2} alt="Testimonial 2" />
                  </div>
                  <div className="content">
                    <h3>Afa Rose</h3>
                    <h4>Web Designer</h4>
                    <div className="star">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
                <p>
                  <FaQuoteLeft className="color" />
                  &nbsp; Proin iaculis purus consequat sem cure dignissim donec
                  porttitora entum suscipit rhoncus. &nbsp;{" "}
                  <FaQuoteRight className="color" />
                </p>
              </div>

              {/* Testimonial 3 */}
              <div className="slider_box">
                <div className="img_content">
                  <div className="image">
                    <img src={Testimonials3} alt="Testimonial 3" />
                  </div>
                  <div className="content">
                    <h3>Jhone Doe</h3>
                    <h4>Store Owner</h4>
                    <div className="star">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
                <p>
                  <FaQuoteLeft className="color" />
                  &nbsp; Proin iaculis purus consequat sem cure dignissim donec
                  porttitora entum suscipit rhoncus. &nbsp;{" "}
                  <FaQuoteRight className="color" />
                </p>
              </div>
              
              {/* Testimonial 4 */}
              <div className="slider_box">
                <div className="img_content">
                  <div className="image">
                    <img src={Testimonials4} alt="Testimonial 3" />
                  </div>
                  <div className="content">
                    <h3>Fizzi Brandon</h3>
                    <h4>Freelancer</h4>
                    <div className="star">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
                <p>
                  <FaQuoteLeft className="color" />
                  &nbsp; Proin iaculis purus consequat sem cure dignissim donec
                  porttitora entum suscipit rhoncus. &nbsp;{" "}
                  <FaQuoteRight className="color" />
                </p>
              </div>
            </Slider>
          </div>
        </div>
    </>
  )
}

export default Testimonial