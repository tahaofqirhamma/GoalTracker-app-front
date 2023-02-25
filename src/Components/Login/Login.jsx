import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import XNavbar from "../XNavbar/XNavbar";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../Context/Context";
import axios from "axios";

const Login = () => {
  const loginURL = "http://localhost/GoalTracker-app-back/api/login.php";

  const navigate = useNavigate();
  const { setEmail, setPassword, email, password } = useGlobalContext();

  const handelLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        loginURL,
        { email, password },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const token = response.data.token;

      localStorage.setItem("token", token);
      const loginState = response.data.isLoged;
      if (loginState) {
        navigate("/Home");
      } else {
        alert(response.data.message);
      }
      // console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <XNavbar />
      <section className="section login">
        <form className="form" onSubmit={handelLogin} method="POST">
          <div className="login-desc">
            <p className="titel">
              Log In To Goal<span>Tracker</span>
            </p>
          </div>
          <fieldset>
            <legend>Eamil</legend>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <legend>Password</legend>
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>
          <button className="btn" type="submit">
            Login
          </button>
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
