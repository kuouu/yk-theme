import React from "react"
import ReactDOM from "react-dom"
import Router from "./router"

import Header from "./components/header"
import Banner from "./components/category/Banner"

if (document.querySelector("#root")) {
  ReactDOM.render(
    <Router />,
    document.querySelector("#root"))
}

if (document.querySelector("#header")) {
  ReactDOM.render(
    <Header />,
    document.querySelector("#header"))
}

if (document.querySelector("#category-banner")) {
  const path = window.location.pathname.split("/")[2]
  ReactDOM.render(
    <Banner path={path}/>,
    document.querySelector("#category-banner"))
}