import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { I18nextProvider } from "react-i18next"
import i18next from "i18next"

import styled from "styled-components"
import global_en from "./translations/en/global.json"
import global_es from "./translations/es/global.json"
import global_fr from "./translations/fr/global.json"

//    COMPONENTS
import HomePage from "./pages/Home.page"
import ViewPage from "./pages/View.page"
import CreatePage from "./pages/Create.page"
import Header from "./components/Header.component"

const App = () => {
  i18next.init({
    interpolation: { escapeValue: false },
    lng: "en",
    resources: {
      en: {
        global: global_en
      },
      es: {
        global: global_es
      },
      fr: {
        global: global_fr
      }
    }
  })
  const Container = styled.div``
  return (
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
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
        </Switch>
      </I18nextProvider>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))

if (module.hot) module.hot.accept()
