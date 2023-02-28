import React from "react";
import "./CreateTask.scss";
import addTask from "../../assets/images/add_tasks.svg";
import { useGlobalContext } from "../../Context/Context";

const CreateTask = () => {
  const {
    setTaskname,
    setTaskdesc,
    setTaskdate,
    setTaskstate,
    handelTask,
    taskname,
    taskdate,
    taskstate,
  } = useGlobalContext();

  return (
    <section className="section tasks">
      <form className="from taks-from" method="POST" onSubmit={handelTask}>
        <p>Create Your Task</p>
        <fieldset>
          <legend>Task name</legend>
          <input
            type="text"
            name="taskname"
            placeholder="Task name"
            onChange={(e) => setTaskname(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <legend>Task description</legend>
          <textarea
            type="text"
            name="taskdesc"
            placeholder="Task description"
            onChange={(e) => setTaskdesc(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <legend>TasK date</legend>
          <input
            name="taskdate"
            type="datetime-local"
            value={taskdate}
            onChange={(e) => setTaskdate(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <legend>Task state</legend>
          <select
            name="taskstate"
            placeholder="Set task state"
            onChange={(e) => setTaskstate(e.target.value)}
          >
            <option value="Running">Running</option>
            <option value="Cancelled">Cancelled</option>
            <option value="Completed">Completed</option>
          </select>
        </fieldset>
        <input
          type="hidden"
          name="currentUser"
          value={localStorage.getItem("username")}
        ></input>
        <div className="from-control">
          <button className="btn a" type="reset">
            Cleare all
          </button>
          <button className="btn b" type="submit">
            Create
          </button>
        </div>
      </form>
      <div className="additonal">
        <img src={addTask} alt="" />
        <div className="quote">
          <div className="quote-c">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="#fff"
              class="bi bi-quote"
              viewBox="0 0 16 16"
            >
              <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
            </svg>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="#fff"
              class="bi bi-quote"
              viewBox="0 0 16 16"
            >
              <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
            </svg>
            <p>Quote of the day</p>
          </div>
          <p>
            Setting goals is the first step in turning the invisible into the
            visible.<br></br> <br />
            <span>- Tony Robbins -</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CreateTask;
