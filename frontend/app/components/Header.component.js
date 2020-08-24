import React from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

import styled from "styled-components"

const Header = ({}) => {
  const [t, i18n] = useTranslation("global")
  const HeaderSection = styled.section`
    top: 0;
    width: 100vw;
    height: 60px;
    display: flex;

    background-color: blue;
  `
  const LangButton = styled.button`
    margin: auto 5px;
  `
  return (
    <header className="mb-auto">
      <div>
        <h3 className="float-md-left mb-0">{t("header.title")}</h3>
        <nav className="nav nav-masthead justify-content-center float-md-right">
          <Link className="nav-link active" aria-current="page" to="/">
            {t("header.home")}
          </Link>
          <Link className="nav-link" to="/view">
            {t("header.view")}
          </Link>
          <Link className="nav-link" to="/create">
            {t("header.create")}
          </Link>
          <LangButton onClick={() => i18n.changeLanguage("en")}>EN</LangButton>
          <LangButton onClick={() => i18n.changeLanguage("es")}>ES</LangButton>
          <LangButton onClick={() => i18n.changeLanguage("fr")}>FR</LangButton>
        </nav>
      </div>
    </header>
  )
}

export default Header
