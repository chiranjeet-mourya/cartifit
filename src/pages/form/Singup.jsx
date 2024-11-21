import React, { useState } from 'react'
import "./form.css"
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Singup() {

    const [changePassword, setChangePassword] = useState(true);
    const changeIcon = changePassword === true ? false : true;

  return (
    <>
      <div className="form_main">
      <Link to="/" className="back"><FaArrowLeftLong/> Back</Link>
    <div className="login-page">
      <div className="form">
        <form className="login-form">
          <input type="text" placeholder="username" />
          <input type="text" placeholder="email" />
          <input type={changePassword ? "password" : "text"} placeholder="password" />
          <span className="icon" onClick={()=> {setChangePassword(changeIcon)}}>
              {
                changeIcon ? <FaRegEye/> : <FaEyeSlash/>
              }</span>
          <button>Sing Up</button>
          <p className="message">
            Not registered? <Link to="/login">login</Link>
          </p>
        </form>
      </div>
    </div>
  </div>
    </>
  )
}

export default Singup