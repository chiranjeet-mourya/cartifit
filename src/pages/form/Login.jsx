import React, { useState } from "react";
import "./form.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

function Login() {

    const [changePassword, setChangePassword] = useState(true);
    const changeIcon = changePassword === true ? false : true;

  return (
   <>
  <div className="form_main">
  <Link to="/" className="back"><FaArrowLeftLong/> Back</Link>
    <div className="login-page">
      <div className="form">
        <form className="login-form">
          <input type="email" placeholder="email" />
          <input type={changePassword ? "password" : "text"} placeholder="password" />
          <span onClick={()=> {setChangePassword(changeIcon)}}>
              {
                changeIcon ? <FaRegEye/> : <FaEyeSlash/>
              }</span>
          <button>login</button>
          <p className="message">
            Not registered? <Link to="/singup">Sing up</Link>
          </p>
        </form>
      </div>
    </div>
  </div>
   </>
  );
}

export default Login;
