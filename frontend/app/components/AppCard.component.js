import React from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

const AppCard = ({ app }) => {
  const [t, i18n] = useTranslation("global")
  const dateAttributes = { weekday: "long", year: "numeric", month: "long", day: "numeric" }
  return (
    <div key={app._id} className="card">
      <div className="card-header text-center">{app.company.toUpperCase()}</div>
      <div className="card-body">
        <h5 className="card-title">{app.position}</h5>
        <p className="card-text"> </p>
        <Link to="/application" className="btn btn-primary">
          {t("viewAllPage.button")}
        </Link>
      </div>
      <div className="card-footer text-muted">{new Date(app.date).toLocaleDateString(t("viewAllPage.date"), dateAttributes)} </div>
    </div>
  )
}

export default AppCard
