import React, { useState } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Switch, Route } from "react-router-dom"

//    COMPONENTS

const Main = () => {
  return (
    <BrowserRouter>
      <h1>hello jobapptracker</h1>
    </BrowserRouter>
  )
}

ReactDOM.render(<Main />, document.getElementById("app"))

if (module.hot) module.hot.accept()
