import React from "react";
import ReactDOM from "react-dom/client";

//
import Login from "./views/Login.jsx";
import HomeScreen from "./views/HomeScreen.jsx";

//
import "./index.css";

//
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <HomeScreen />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
