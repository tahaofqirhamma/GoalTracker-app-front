import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MyTasks from "../Pages/MyTasks/MyTasks";
import CreateTask from "../Pages/CreateTask/CreateTask";
import Statistics from "../Pages/Statistics/Statistics";
import Login from "../Components/Login/Login";
import Signup from "../Components/Singup/Signup";
import Layout from "../Pages/Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Home",
    element: <Layout />,
    children: [
      {
        path: "CreateTask",
        element: <CreateTask />,
      },
      {
        path: "MyTasks",
        element: <MyTasks />,
      },
      {
        path: "Statistics",
        element: <Statistics />,
      },
    ],
  },
  // {
  //   path: "/Home/CreateTask",
  //   element: <CreateTask />,
  // },
  // {
  //   path: "/Home/MyTasks",
  //   element: <MyTasks />,
  // },
  {
    path: "/Home/Statistics",
    element: <Statistics />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Singup",
    element: <Signup />,
  },
]);
export default router;
