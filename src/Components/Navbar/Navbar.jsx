import React from "react";
import CurrentDate from "../CurrentDate/CurrentDate";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <nav className="Mnavbar">
      <div className="user">
        <p>Welcome user !!!</p>
      </div>
      <CurrentDate />
    </nav>
  );
};

export default Navbar;
