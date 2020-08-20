import React from "react"
import ReactDOM from "react-dom"

//    COMPONENTS
import HomePage from "./pages/home.page"

const App = () => {
  console.log("From index.js")
  return (
    <>
      <HomePage />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))

if (module.hot) module.hot.accept()
