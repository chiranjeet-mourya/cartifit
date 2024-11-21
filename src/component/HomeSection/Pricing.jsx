import React from 'react'
import {  FaRegCheckCircle} from "react-icons/fa";
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <>
    <div className="pricing_section">
          <div className="container">
            <div className="text">
              <h1>Pricing Plans</h1>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="pricing_box_flex">
              <div className="pricing_box">
                <div className="title">
                  <h2>Basic</h2>
                </div>
                <div className="price">
                  <h4>
                    <sup>$</sup>25
                  </h4>
                </div>
                <div className="option">
                  <ul>
                    <li>
                      <FaRegCheckCircle /> Unlimited GB Space
                    </li>
                    <li>
                      <FaRegCheckCircle /> 30 Domain Names
                    </li>
                    <li>
                      <FaRegCheckCircle /> Free SSL
                    </li>
                    <li>
                      <FaRegCheckCircle /> Daily Backup
                    </li>
                    <li>
                      <FaRegCheckCircle /> Free Templates
                    </li>
                    <li>
                      <FaRegCheckCircle /> Free Email
                    </li>
                    <li>
                      <FaRegCheckCircle /> 10 Databases
                    </li>
                    <li>
                      <FaRegCheckCircle /> Unlimited Email Address
                    </li>
                    <li>
                      <FaRegCheckCircle /> Live Support
                    </li>
                  </ul>
                </div>
                <Link to="#">Order Now</Link>
              </div>
              <div className="pricing_box">
                <div className="title">
                  <h2>Standard</h2>
                </div>
                <div className="price">
                  <h4>
                    <sup>$</sup>50
                  </h4>
                </div>
                <div className="option">
                  <ul>
                    <li>
                      <FaRegCheckCircle /> Unlimited GB Space
                    </li>
                    <li>
                      <FaRegCheckCircle /> 30 Domain Names
                    </li>
                    <li>
                      <FaRegCheckCircle /> Free SSL
                    </li>
                    <li>
                      <FaRegCheckCircle /> Daily Backup
                    </li>
                    <li>
                      <FaRegCheckCircle /> Free Templates
                    </li>
                    <li>
                      <FaRegCheckCircle /> Free Email
                    </li>
                    <li>
                      <FaRegCheckCircle /> 10 Databases
                    </li>
                    <li>
                      <FaRegCheckCircle /> Unlimited Email Address
                    </li>
                    <li>
                      <FaRegCheckCircle /> Live Support
                    </li>
                  </ul>
                </div>
                <Link to="#">Order Now</Link>
              </div>
              <div className="pricing_box">
                <div className="title">
                  <h2>Premium</h2>
                </div>
                <div className="price">
                  <h4>
                    <sup>$</sup>100
                  </h4>
                </div>
                <div className="option">
                  <ul>
                    <li>
                      <FaRegCheckCircle /> Unlimited GB Space
                    </li>
                    <li>
                      <FaRegCheckCircle /> 30 Domain Names
                    </li>
                    <li>
                      <FaRegCheckCircle /> Free SSL
                    </li>
                    <li>
                      <FaRegCheckCircle /> Daily Backup
                    </li>
                    <li>
                      <FaRegCheckCircle /> Free Templates
                    </li>
                    <li>
                      <FaRegCheckCircle /> Free Email
                    </li>
                    <li>
                      <FaRegCheckCircle /> 10 Databases
                    </li>
                    <li>
                      <FaRegCheckCircle /> Unlimited Email Address
                    </li>
                    <li>
                      <FaRegCheckCircle /> Live Support
                    </li>
                  </ul>
                </div>
                <Link to="#">Order Now</Link>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Pricing