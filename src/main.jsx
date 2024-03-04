import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./views/home.jsx";
import WeightConverterView from "./views/weightConverterView.jsx";
import SizeConverterView from "./views/sizeConverterView.jsx";
import ErrorPage from "./views/errorView.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./scss/styles.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "weightConverter",
        element: <WeightConverterView />,
      },
      {
        path: "sizeConverter",
        element: <SizeConverterView />,
      },
      //ErrorPage displayed as a catch all * route since adding it as an attribute to the parent (commented out above) lost the styling. Plus displaying the error page in the outlet looks better.
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
