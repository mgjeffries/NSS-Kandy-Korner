import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { Employee } from "./Employee"

export const EmployeeList = (props) => {
  const { employees, getEmployees } = useContext(EmployeeContext)


  useEffect( () => {
    getEmployees()
  }, [])

  return (
    <>
      <button onClick={() => props.history.push("/employees/create")}>
        Add employee
      </button>
      <div className="employees">
        {
          employees.map( e => <Employee key={e.id} employee={e}/>)
        }
      </div>
    </>
  )
}