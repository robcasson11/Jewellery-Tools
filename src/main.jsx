import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import WeightConverterView from "./features/weightConverterView.jsx";
import SizeConverterView from "./features/sizeConverterView.jsx";
import ErrorPage from "./features/errorView.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./scss/styles.scss";
import * as bootstrap from "bootstrap";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "weightConverter",
        element: <WeightConverterView />,
      },
      {
        path: "sizeConverter",
        element: <SizeConverterView />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
