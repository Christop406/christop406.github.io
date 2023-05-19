import { createRoot } from "react-dom/client";
import { App } from "./App";
import React from "react";
import "./index.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Homepage />,
      },
    ],
  },
]);

const rootElement = document.getElementById("app");

createRoot(rootElement!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
