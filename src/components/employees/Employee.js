import React from "react"
import "./Employee.css"

export const Employee = ({employee}) => {
  return (
    <div className="employee" >
      <div className="employee__name">Name: {employee.name}</div>
      <div className="employee__location">Location: {employee.location.address}</div>
      <div className="employee__isManager">Manager: {employee.isManager ? "Yes" : "No"}</div>
      <div className="employee__isFullTime">Full Time: {employee.isFullTime ? "Yes" : "No"}</div>
      <div className="employee__hourlyRate">Hourly Rate: {employee.hourlyRate}</div>
    </div>
  )
}