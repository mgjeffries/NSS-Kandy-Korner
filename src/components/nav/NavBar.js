import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
  return (
    <ul className="navbar">
      <li className="navbar__item active">
        <Link className="navbar__link" to="/">Home</Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/products">Products</Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/locations">Locations</Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/employees">employees</Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/logout">logout</Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/orders">My Order</Link>
      </li>
    </ul>
  )
}