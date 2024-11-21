import React from 'react'
import HappyClient from "../../assets/happy-clients.svg";
import Completed from "../../assets/complete-projects.svg";
import Support from "../../assets/hours-support.svg";

function Client() {
  return (
    <>
    <div className="client_section">
          <div className="container">
            <div className="client_flex">
              <div className="client_box">
                <div className="circle_img">
                  <img src={HappyClient} alt="" />
                </div>
                <span>232</span>
                <p>
                  <span>Happy Clients</span> <br /> consequuntur quae diredo
                </p>
              </div>
              <div className="client_box">
                <div className="circle_img">
                  <img src={Completed} alt="" />
                </div>
                <span>521</span>
                <p>
                  <span>Completed Projects</span> <br /> adipisci atque quia aut
                </p>
              </div>
              <div className="client_box">
                <div className="circle_img">
                  <img src={Support} alt="" />
                </div>
                <span>453</span>
                <p>
                  <span>Hours Of Support</span> <br /> aut commodi quaerat
                </p>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Client