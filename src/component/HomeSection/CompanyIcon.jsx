import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Client1 from "../../assets/client-1.png";
import Client2 from "../../assets/client-2.png";
import Client3 from "../../assets/client-3.png";
import Client4 from "../../assets/client-4.png";
import Client5 from "../../assets/client-5.png";

function CompanyIcon() {

  const settings2 = {
    dots: false, // No dots for navigation
    infinite: true, // Infinite loop of slides
    speed: 500, // Speed of transitions
    slidesToShow: 5, // Number of slides to show at once
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Autoplay slider
    autoplaySpeed: 3000, // Autoplay every 3 seconds
    responsive: [
      // Responsive breakpoints
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4, // Show 4 slides on medium screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4, // Show 3 slides on smaller screens
        },
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 3, // Show 3 slides on smaller screens
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1, // Show 2 slides on mobile
        },
      },
    ],
  };

  return (
    <>
    <div className="company_icon">
          <div className="container">
            <Slider {...settings2} className="flex_icon">
              <div>
                <img src={Client1} alt="Client 1" />
              </div>
              <div>
                <img src={Client2} alt="Client 2" />
              </div>
              <div>
                <img src={Client3} alt="Client 3" />
              </div>
              <div>
                <img src={Client4} alt="Client 4" />
              </div>
              <div>
                <img src={Client5} alt="Client 5" />
              </div>
            </Slider>
          </div>
        </div>
    </>
  )
}

export default CompanyIcon