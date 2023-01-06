import React from "react"
import ReactDOM from "react-dom"
import Router from "./router"

import Header from "./components/header"

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
