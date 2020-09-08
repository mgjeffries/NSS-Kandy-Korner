import React from "react"
import "./Employee.css"

export const Employee = ({employee, location}) => {
  return (
    <div className="employee" >
      <div className="employee__name">Name: {employee.name}</div>
      <div className="employee__location">Location: {location.address}</div>
      <div className="employee__isManager">Manager: {employee.isManager}</div>
      <div className="employee__isFullTime">Full Time:{employee.isFullTime}</div>
      <div className="employee__hourlyRate">Hourly Rate: {employee.hourlyRate}</div>
    </div>
  )
}