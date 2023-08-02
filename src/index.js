import React from "react"
import ReactDOM from "react-dom"
import Router from "./router"

import Banner from "./components/category/Banner"

if (document.querySelector("#root")) {
  ReactDOM.render(
    <Router />,
    document.querySelector("#root"))
}

if (document.querySelector("#category-banner")) {
  const path = window.location.pathname.split("/")[2]
  ReactDOM.render(
    <Banner path={path}/>,
    document.querySelector("#category-banner"))
}