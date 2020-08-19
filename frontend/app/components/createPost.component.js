import React, { useEffect, useState, useContext } from "react"
import axios from "axios"
import { withRouter } from "react-router-dom"

import Page from "./page.component"
import ExampleContext from "../ExampleContext"

const CreatePost = props => {
  const [title, setTitle] = useState()
  const [body, setBody] = useState()
  const { addFlashMessage } = useContext(ExampleContext)
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const response = await axios.post("/create-post", { title, body, token: localStorage.getItem("preactToken") })
      //  Redirect to new post url
      addFlashMessage("New post successfuly created!")
      props.history.push(`/post/${response.data}`)
      console.log("The new post was created")
    } catch (err) {
      console.log("There was an error: " + err)
    }
  }
  return (
    <Page title="Create New Post">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="post-title" className="text-muted mb-1">
            <small>Title</small>
          </label>
          <input onChange={e => setTitle(e.target.value)} autoFocus name="title" id="post-title" className="form-control form-control-lg form-control-title" type="text" placeholder="" autoComplete="off" />
        </div>

        <div className="form-group">
          <label htmlFor="post-body" className="text-muted mb-1 d-block">
            <small>Body Content</small>
          </label>
          <textarea onChange={e => setBody(e.target.value)} name="body" id="post-body" className="body-content tall-textarea form-control" type="text"></textarea>
        </div>

        <button className="btn btn-primary">Save New Post</button>
      </form>
    </Page>
  )
}

export default withRouter(CreatePost)
