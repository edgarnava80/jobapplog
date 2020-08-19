import React from "react"
import { Button, DatePicker } from "antd"
import "antd/dist/antd.css"

//import styled from "styled-components"

const AntPage = ({}) => {
  return (
    <>
      <h1>antd example</h1>
      <DatePicker />
      <Button type="primary" style={{ marginLeft: 8 }}>
        Primary Button
      </Button>
    </>
  )
}

export default AntPage
