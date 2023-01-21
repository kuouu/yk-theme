import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import building from "./assets/building.png";

const Router = () => {

  const customRouter = [
    { path: "/", element: <Home />, exact: true },
    {
      path: "/crowdfunding",
      element: <div><img src={building} /></div>
    }
  ]

  return <RouterProvider router={createBrowserRouter(customRouter)} />
}

export default Router