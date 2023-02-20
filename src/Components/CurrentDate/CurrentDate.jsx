import React, { useState, useEffect } from "react";
import moment from "moment";
import "./CurrentDate.scss";
const CurrentDate = () => {
  const [CurrentDate, setCurrentDate] = useState(moment());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(moment()); //
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="date">
      <i>
        {CurrentDate.format("MMMM Do YYYY")}
        <br />
        {CurrentDate.format("HH:mm")}
      </i>
    </div>
  );
};

export default CurrentDate;
