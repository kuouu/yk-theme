import { useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import axios from "axios";

import Home from "./pages/Home";

const Router = () => {
  const [wpRouter, setWpRouter] = useState([]);
  const ErrorElement = () =>
    <div className="h-screen flex flex-col justify-center items-center gap-4">
      <svg class="animate-spin h-5 w-5 mr-3 text-slate-900" viewBox="0 0 24 24">
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
      </svg>
      <span>Loading...</span>
    </div>;
  const customRouter = [
    { path: "/", element: <Home />, exact: true },
    { path: "/about", element: <div>About Pageeee</div>, },
    { path: "*", element: <ErrorElement /> }
  ]

  useEffect(() => {
    const getAllPages = async () => { // TODO: store this in a cache
      const baseUrl = window.location.href;
      let res = await axios.get(
        `${baseUrl}?rest_route=/wp/v2/pages`
      );
      let { data } = await res;

      setWpRouter(data.map(page => {
        return {
          path: page.slug,
          element: <div
            className="h-screen flex justify-center items-center"
            dangerouslySetInnerHTML={{ __html: page.content?.rendered }}
          />,
        }
      }));
    };
    getAllPages();
  }, []);

  return <RouterProvider router={createBrowserRouter([...customRouter, ...wpRouter])} />
}

export default Router