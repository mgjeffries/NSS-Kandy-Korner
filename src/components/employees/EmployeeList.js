import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { Employee } from "./Employee"

export const EmployeeList = () => {
  const { employees, getEmployees } = useContext(EmployeeContext)


  useEffect( () => {
    getEmployees()
  }, [])

  return (
    <div className="employees">
      {
        employees.map( p => <Employee key={p.id} employee={p}/>)
      }
    </div>
  )
}