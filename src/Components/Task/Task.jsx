import React from "react";
import { useGlobalContext } from "../../Context/Context";

const Task = () => {
  const { tasks } = useGlobalContext();
  return (
    <section className="section mytasks">
      <p>My tasks</p>
      {tasks.map((task) => {
        return (
          <div className="task" key={task.tnum}>
            <div className="task-infos">
              <div>
                <p className="task-name">{task.tn} </p>
                <p className="task-state">{task.ts}</p>
                <p className="task-date">{task.td}</p>
              </div>
            </div>

            <>
              <hr style={{ color: "#272C36" }} />
              <div className="task-details">
                <div className="task-description">
                  <p>Task description</p>
                  {task.tdesc}
                </div>
                <div className="task-control">
                  <button className="btn delete">Delete</button>
                  <button className="btn modify">Modify</button>
                </div>
              </div>
            </>
          </div>
        );
      })}
    </section>
  );
};

export default Task;
