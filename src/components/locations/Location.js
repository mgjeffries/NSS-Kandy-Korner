import React from "react"
import "./Location.css"

export const Location = ({location}) => {
  return (
    <div className="location">
      <h3 className="location__Address">LocationAddress: {location.address}</h3>
    </div>
  )
}