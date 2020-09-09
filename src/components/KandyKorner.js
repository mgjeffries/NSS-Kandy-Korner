import React from "react"
import "./KandyKorner.css"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Route, Redirect } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"

export const KandyKorner = () => (
  <>
    <Route render={() =>{
      if (localStorage.getItem("kandy_customer")) {
        return (
          <>
            <Route render={props => <NavBar {...props}/>} />
            <Route render={props => <ApplicationViews {...props}/>} />
          </>
        )
      }
      else {
        return <Redirect to="/login"/>
      }
    }} />
    <Route path="/login" render={props => <Login {...props} /> } />
    <Route path="/register" render={props => <Register {...props} /> } />
  </>
)