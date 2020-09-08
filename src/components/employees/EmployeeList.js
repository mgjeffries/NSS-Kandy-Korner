import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { Employee } from "./Employee"
import { LocationContext } from "../locations/LocationProvider"

export const EmployeeList = (props) => {
  const { employees, getEmployees } = useContext(EmployeeContext)
  const { locations, getLocations } = useContext(LocationContext)


  useEffect( () => {
    getEmployees()
    getLocations()
  }, [])

  return (
    <>
      <button onClick={() => props.history.push("/employees/create")}>
        Add employee
      </button>
      <div className="employees">
        {
          employees.map( e => {
            const location = locations.find(location => e.locationId === location.id) || {}
            return <Employee key={e.id} employee={e} location={location}/>
        })
        }
      </div>
    </>
  )
}