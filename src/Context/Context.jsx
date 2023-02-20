import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AppContext = React.createContext();

// ====================== API ========================

const singupURL = "http://localhost/GoalTracker-app-back/api/singup.php";

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
  const [taksdate, setTaskdate] = useState("");
  const [taskstate, setTaskstate] = useState("");
  const [tasks, setTasks] = useState([
    {
      aname: taskname,
      state: taskstate,
      desc: taskdesc,
      date: taskstate,
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
      console.log(response.data);
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
        taksdate,
        taskstate,
        handelSingup,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };
export const useGlobalContext = () => useContext(AppContext);
