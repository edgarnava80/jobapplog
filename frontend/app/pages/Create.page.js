import React, { useEffect, useState } from "react"
import Axios from "axios"
import { useTranslation } from "react-i18next"

import Page from "../components/Page.component"

const CreatePage = () => {
  const [application, setApplication] = useState()
  const [t, i18n] = useTranslation("global")
  const createApplication = async () => {
    try {
      const response = await Axios.post("/api/v1/applications")
      if (response.data) {
        setApplications(response.data.data.applications)
        console.log("API call successfull!")
      } else {
        console.log("Empty response.")
      }
    } catch (err) {
      console.log("There was an error in the API call: " + err)
    }
  }

  return (
    <Page page="createPage">
      <h2>{t("createPage.title")}</h2>
    </Page>
  )
}

export default CreatePage
