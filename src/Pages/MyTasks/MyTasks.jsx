import React, { useState } from "react";
import "./MyTasks.scss";
import { useGlobalContext } from "../../Context/Context";

const MyTasks = () => {
  const { tasks } = useGlobalContext();
  const [show, setShow] = useState(false);
  const test = () => {
    setShow(!show);
  };

  return (
    <section className="section mytasks">
      <p>My tasks</p>
      {tasks.map((task) => {
        return (
          <div className="task">
            <div className="task-infos">
              <div>
                <p className="task-name">{task.name} </p>
                <p className="task-state">{task.state}</p>
                <p className="task-date">{task.date}</p>
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
                    {task.desc}
                  </div>
                  <div className="task-control">
                    <button className="btn delete">Delete</button>
                    <button className="btn modify">Modify</button>
                  </div>
                </div>
              </>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default MyTasks;
