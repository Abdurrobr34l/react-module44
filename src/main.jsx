import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import SimpleForm from "./Components/simpleForm/SimpleForm.jsx";
import Home from "./Components/home/Home.jsx";
import FormAction from "./Components/formAction/FormAction.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "simple-form", Component: SimpleForm },
      { path: "form-action", Component: FormAction },
    ],
  },

  //* NOT FOUND PAGE
  {
    path: "*",
    element: <h1 className="text-7xl font-extrabold place-self-center place-content-center h-screen text-violet-600">Page Not Found: 404 Status</h1>,
  },
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
