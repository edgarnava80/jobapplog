import React from "react"

const AppCard = ({ app }) => {
  const dateAttributes = { weekday: "long", year: "numeric", month: "long", day: "numeric" }

  return (
    <div className="card">
      <div className="card-header text-center">{app.company.toUpperCase()}</div>
      <div className="card-body">
        <h5 className="card-title">{app.position}</h5>
        <p className="card-text"> </p>
        <a href="#" className="btn btn-primary">
          View application
        </a>
      </div>
      <div className="card-footer text-muted">{new Date(app.date).toLocaleDateString("en-US", dateAttributes)} </div>
    </div>
  )
}

export default AppCard
