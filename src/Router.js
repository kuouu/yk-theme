import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";

const Router = () => {

  const customRouter = [
    { path: "/", element: <Home />, exact: true },
    {
      path: "/crowdfunding",
      element: <div><img src={'https://yourknowledge.online/wp-content/uploads/2023/01/comingsoon.png'} /></div>
    }
  ]

  return <RouterProvider router={createBrowserRouter(customRouter)} />
}

export default Router