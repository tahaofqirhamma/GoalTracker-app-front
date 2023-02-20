import React from "react";
import "./Singup.scss";
import XNavbar from "../XNavbar/XNavbar";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const handelSing = (e) => {
    e.preventDefault();
    navigate("/Login");
  };
  return (
    <>
      <XNavbar />
      <section className="section singup">
        <form className="from" onSubmit={handelSing}>
          <div className="singup-desc">
            <p className="titel">
              Sing Up To Goal<span>Tracker</span>
            </p>
          </div>
          <fieldset>
            <legend>Username</legend>
            <input type="text" name="username" placeholder="Username" />
          </fieldset>
          <fieldset>
            <legend>Eamil</legend>
            <input type="email" name="email" placeholder="Email" />
          </fieldset>
          <fieldset>
            <legend>Password</legend>
            <input type="password" name="password" placeholder="Password" />
          </fieldset>

          <button className="btn">Sing Up</button>
          <div className="singuping">
            <div className="choice">
              <hr />
              or
              <hr />
            </div>
            <Link to={`/Login`} className="btn">
              Login
            </Link>
          </div>
        </form>
      </section>
    </>
  );
};

export default Signup;
