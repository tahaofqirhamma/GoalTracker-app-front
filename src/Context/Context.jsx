import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // ============= Login infs ============
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   =====================================

  // ============ Sing up infos ==============
  const [username, setUsername] = useState("");
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };
export const useGlobalContext = () => useContext(AppContext);
