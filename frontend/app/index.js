import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import i18next from "./translations/i18n"
import Axios from "axios"
Axios.defaults.baseURL = "http://agpo.cookietogo.site"

//    COMPONENTS
import HomePage from "./pages/Home.page"
import ViewPage from "./pages/View.page"
import EditPage from "./pages/Edit.page"
import CreatePage from "./pages/Create.page"
import Header from "./components/Header.component"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/view">
          <ViewPage />
        </Route>
        <Route exact path="/create">
          <CreatePage />
        </Route>
        <Route exact path="/application">
          <EditPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))

if (module.hot) module.hot.accept()
