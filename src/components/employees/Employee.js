import React from "react"

export const Employee = ({employee}) => {
  return (
    <div className="employee__name">{employee.name}</div>
  )
}