import React from "react";
import { Link } from "react-router-dom";
import XNavbar from "../XNavbar/XNavbar";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handelLog = (e) => {
    e.preventDefault();
    navigate("/Home/CreateTask");
  };
  return (
    <>
      <XNavbar />
      <section className="section login">
        <form className="form" onSubmit={handelLog}>
          <div className="login-desc">
            <p className="titel">
              Log In To Goal<span>Tracker</span>
            </p>
          </div>
          <fieldset>
            <legend>Eamil</legend>
            <input type="email" name="email" />
          </fieldset>
          <fieldset>
            <legend>Password</legend>
            <input type="password" name="password" />
          </fieldset>
          <button className="btn">Login</button>
          <div className="singuping">
            <div className="choice">
              <hr />
              or
              <hr />
            </div>
            <p>New to GoealTracker ?</p>
            <Link to={`/Singup`} className="btn">
              Sing Up
            </Link>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;