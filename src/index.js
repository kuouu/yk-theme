import React from "react"
import ReactDOM from "react-dom"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";

const router = createBrowserRouter([
  { path: "/", element: <Home />, },
  { path: "/about", element: <div>About Page</div>, },
]);

if (document.querySelector("#root")) {
  ReactDOM.render(
    <RouterProvider router={router} />,
    document.querySelector("#root"))
}
