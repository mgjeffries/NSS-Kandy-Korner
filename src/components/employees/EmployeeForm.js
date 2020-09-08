import React, { useContext, useRef, useEffect } from "react"
import { LocationContext } from "../locations/LocationProvider"
import { EmployeeContext } from "./EmployeeProvider"

export const EmployeeForm = (props) => {
  const { addEmployee } = useContext(EmployeeContext)
  const { locations, getLocations } = useContext(LocationContext)

  /*
      Create references that can be attached to the input
      fields in the form. This will allow you to get the
      value of the input fields later when the user clicks
      the save button.

      No more `document.querySelector()` in React.
  */
  const name = useRef(null)
  const location = useRef(null)
  const rate = useRef(null)
  const isFullTime = useRef(null)
  const isManager = useRef(null)

  /*
      Get animal state and location state on initialization.
  */
  useEffect(() => {
     getLocations()
  }, [])

  const constructNewEmployee = () => {
      /*
          The `location` and `animal` variables below are
          the references attached to the input fields. You
          can't just ask for the `.value` property directly,
          but rather `.current.value` now in React.
      */
      const locationId = parseInt(location.current.value)

      if (locationId === 0) {
          window.alert("Please select a location")
      } else {          
          addEmployee({
              name: name.current.value,
              hourlyRate: parseInt(rate.current.value),
              locationId,
              isFullTime: isFullTime.current.checked,
              isManager: isManager.current.checked
          })
          .then(() => props.history.push("/employees"))
      }
  }

  return (
      <form className="employeeForm">
          <h2 className="employeeForm__title">New Employee</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="employeeName">Employee name: </label>
                  <input type="text" id="employeeName" ref={name} required autoFocus className="form-control" placeholder="Employee name" />
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="location">Assign to location: </label>
                  <select defaultValue="" name="location" ref={location} id="employeeLocation" className="form-control" >
                      <option value="0">Select a location</option>
                      {locations.map(e => (
                          <option key={e.id} value={e.id}>
                              {e.address}
                          </option>
                      ))}
                  </select>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="employeeIsFullTime">Full Time: </label>
                  <input type="checkbox" id="employeeIsFullTime" ref={isFullTime} required  className="form-control" />
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="employeeIsManager">Manager: </label>
                  <input type="checkbox" id="employeeIsManager" ref={isManager} required  className="form-control" />
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="employeeRate">Employee rate: </label>
                  <input type="number" id="employeeRate" ref={rate} required autoFocus className="form-control" placeholder="15" />
              </div>
          </fieldset>
          <button type="submit"
              onClick={evt => {
                  evt.preventDefault() // Prevent browser from submitting the form
                  constructNewEmployee()
              }}
              className="btn btn-primary">
              Save Employee
          </button>
      </form>
  )
}