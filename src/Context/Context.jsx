import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AppContext = React.createContext();

// ====================== API ========================

const singupURL = "http://localhost/GoalTracker-app-back/api/singup.php";
const createTaskURL =
  "http://localhost/goaltracker-app-back/api/createTask.php";
const userURL = "http://localhost/GoalTracker-app-back/api/login.php";
const AppProvider = ({ children }) => {
  // ============= Login infs ============
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   =====================================

  // ============ Sing up infos ==============
  const [susername, setUsername] = useState("");
  const [semail, setSemail] = useState("");
  const [spassword, setSpassword] = useState("");
  //   ======================================

  //   =============== Task info =================
  const [taskname, setTaskname] = useState("");
  const [taskdesc, setTaskdesc] = useState("");
  const [taskdate, setTaskdate] = useState("");
  const [taskstate, setTaskstate] = useState("");
  const [tasks, setTasks] = useState([
    {
      name: taskname,
      state: taskstate,
      desc: taskdesc,
      date: taskdate,
    },
  ]);
  //   ===========================================

  // ==================== inputs handeling ==============================

  const handelSingup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        singupURL,
        { susername, semail, spassword },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handelTask = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        createTaskURL,
        { taskname, taskdate, taskdesc, taskstate },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      setTasks(...tasks, {
        name: taskname,
        state: taskstate,
        desc: taskdesc,
        date: taskdate,
      });
      console.log(tasks);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        setEmail,
        setPassword,
        setUsername,
        setSemail,
        setSpassword,
        setTasks,
        setTaskname,
        setTaskdesc,
        setTaskdate,
        setTaskstate,
        tasks,
        taskname,
        taskdesc,
        taskdate,
        taskstate,
        taskstate,
        email,
        password,
        handelSingup,
        handelTask,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };
export const useGlobalContext = () => useContext(AppContext);
