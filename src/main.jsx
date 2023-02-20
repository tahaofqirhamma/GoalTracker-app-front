import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Route from "./Routes/Route";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import { AppProvider } from "./Context/Context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <main>
        <RouterProvider router={Route} />
      </main>
    </AppProvider>
  </React.StrictMode>
);
