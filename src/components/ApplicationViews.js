import React from "react"
import { LocationPovider } from "./locations/LocationProvider"
import { ProductProvider } from "./Products/ProductProvider"
import { Route } from "react-router-dom"
import { LocationList } from "./locations/LocationList"
import { ProductList } from "./Products/ProductList"
import { ProductTypeProvider } from "./productTypes/ProductTypeProvider"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import { EmployeeList } from "./employees/EmployeeList"

export const ApplicationViews = (props) => {
  return (
    <>
      <LocationPovider>
        <Route exact path="/">
          <LocationList />
        </Route>
      </LocationPovider>
      
      <EmployeeProvider>
        <Route exact path="/employees" render={
          props => <EmployeeList {...props} />
        }>
        </Route>
      </EmployeeProvider>

      <LocationPovider>
        <Route exact path="/locations">
          <LocationList />
        </Route>
      </LocationPovider>

      <ProductProvider>
        <ProductTypeProvider>
          <Route path="/products">
            <ProductList />
          </Route>
        </ProductTypeProvider>
      </ProductProvider>
    </>
  )
}