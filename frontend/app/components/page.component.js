import React, { useEffect } from "react"
import Container from "./container.component"

//import styled from "styled-components"

const Page = props => {
  useEffect(() => {
    document.title = `${props.title} | Preact`
    window.scrollTo(0, 0)
  }, [])

  return <Container wide={props.wide}>{props.children}</Container>
}

export default Page
