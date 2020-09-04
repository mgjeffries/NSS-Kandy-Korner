import React from "react"
import "./KandyKorner.css"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Route } from "react-router-dom"

export const KandyKorner = () => (
  <>
    <NavBar />
    <ApplicationViews />
  </>
)