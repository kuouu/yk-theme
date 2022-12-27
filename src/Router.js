import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";

const Router = () => {

  const customRouter = [
    { path: "/", element: <Home />, exact: true },
    { path: "/about", element: <div>About Pageeee</div>, }
  ]

  return <RouterProvider router={createBrowserRouter(customRouter)} />
}

export default Router