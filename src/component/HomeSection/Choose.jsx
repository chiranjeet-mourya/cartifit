import React from 'react'
import Icon1 from "../../assets/icon-1.svg";
import Icon2 from "../../assets/icon-2.svg";
import Icon3 from "../../assets/icon-3.svg";
import Icon4 from "../../assets/icon-4.svg";
import Icon5 from "../../assets/icon-5.svg";
import Icon6 from "../../assets/icon-6.svg";
import feature from "../../assets/features.jpg";

function Choose() {
  return (
    <>
    <div className="choose_section">
          <div className="container">
            <div className="text">
              <h1>Why Choose Us</h1>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="choose_flex">
              <div className="content_box">
                <div className="box_text">
                  <div className="title">
                    <h4>Experience</h4>
                    <p>
                      Ronsectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                  <img src={Icon1} alt="" />
                </div>
                <div className="box_text">
                  <div className="title">
                    <h4>Products</h4>
                    <p>
                      Ronsectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                  <img src={Icon2} alt="" />
                </div>
                <div className="box_text">
                  <div className="title">
                    <h4>Approach</h4>
                    <p>
                      Ronsectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                  <img src={Icon3} alt="" />
                </div>
              </div>

              <div className="content_box">
                <div className="image">
                  <img src={feature} alt="" />
                </div>
              </div>

              <div className="content_box">
                <div className="box_text box_text2">
                  <img src={Icon4} alt="" />
                  <div className="title">
                    <h4>Pricing</h4>
                    <p>
                      Ronsectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
                <div className="box_text box_text2">
                  <img src={Icon5} alt="" />
                  <div className="title">
                    <h4>Delivery</h4>
                    <p>
                      Ronsectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
                <div className="box_text box_text2">
                  <img src={Icon6} alt="" />
                  <div className="title">
                    <h4>Support</h4>
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

export default Choose