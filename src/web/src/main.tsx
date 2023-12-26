import React from "react";
import ReactDOM from "react-dom/client";
import router from "./router";
import AppProvider from "./contexts";
import { RouterProvider } from "react-router-dom";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="app">
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </div>
  </React.StrictMode>
);
