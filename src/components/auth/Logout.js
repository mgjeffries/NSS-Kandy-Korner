import React from "react"

export const Logout = (props) => {
  localStorage.removeItem("kandy_customer")
  props.history.push("/login")

  return <></>
}