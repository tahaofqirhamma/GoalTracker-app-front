import React from "react";
import "./Singup.scss";
import XNavbar from "../XNavbar/XNavbar";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../Context/Context";

const Signup = () => {
  const { setUsername, setSemail, setSpassword, handelSingup } =
    useGlobalContext();
  const navigate = useNavigate();
  const handler = (e) => {
    handelSingup(e);
    navigate("/login");
  };

  return (
    <>
      <XNavbar />
      <section className="section singup">
        <form className="from" onSubmit={handelSingup} method="POST">
          <div className="singup-desc">
            <p className="titel">
              Sing Up To Goal<span>Tracker</span>
            </p>
          </div>
          <fieldset>
            <legend>Username</legend>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </fieldset>
          <fieldset>
            <legend>Eamil</legend>
            <input
              type="email"
              name="semail"
              placeholder="Email"
              onChange={(e) => setSemail(e.target.value)}
              required
            />
          </fieldset>
          <fieldset>
            <legend>Password</legend>
            <input
              type="password"
              name="spassword"
              placeholder="Password"
              onChange={(e) => setSpassword(e.target.value)}
              required
            />
          </fieldset>

          <button
            className="btn"
            type="submit"
            onClick={() => {
              setTimeout(() => handler(), 5000);
            }}
          >
            Sing Up
          </button>
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
