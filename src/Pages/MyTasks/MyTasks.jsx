import React, { useState } from "react";
import "./MyTasks.scss";

const MyTasks = () => {
  const [show, setShow] = useState(false);
  const test = () => {
    setShow(!show);
  };

  return (
    <section className="section mytasks">
      <p>My tasks</p>
      <div className="task">
        <div className="task-infos">
          <div>
            <p className="task-name">Task 1 </p>
            <p className="task-state">Completed</p>
            <p className="task-date">February 19th 2023 23:23</p>
          </div>
          <button className="btn" onClick={test}>
            {show ? "See less" : "See details"}
          </button>
        </div>
        {show && (
          <>
            <hr style={{ color: "#272C36" }} />
            <div className="task-details">
              <div className="task-description">
                <p>Task description</p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae doloribus nesciunt dolorum libero impedit ipsum nisi
                magnam corporis a qui molestias eaque consectetur explicabo
                recusandae exercitationem dolores, dicta reiciendis ipsa?
              </div>
              <div className="task-control">
                <button className="btn delete">Delete</button>
                <button className="btn modify">Modify</button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default MyTasks;
