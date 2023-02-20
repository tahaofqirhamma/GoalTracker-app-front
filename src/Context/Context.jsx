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
  const [task, setTaskstate] = useState("");
  //   ===========================================

  // ==================== inputs handeling ==============================

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
