import React from "react"
import ReactDOM from "react-dom"
import Router from "./router"

if (document.querySelector("#root")) {
  ReactDOM.render(
    <Router />,
    document.querySelector("#root"))
}
