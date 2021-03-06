import React from "react"
import { LocationPovider } from "./locations/LocationProvider"
import { ProductProvider } from "./Products/ProductProvider"
import { Route } from "react-router-dom"
import { LocationList } from "./locations/LocationList"
import { ProductList } from "./Products/ProductList"
import { ProductTypeProvider } from "./productTypes/ProductTypeProvider"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import { EmployeeList } from "./employees/EmployeeList"
import { EmployeeForm } from "./employees/EmployeeForm"
import { Logout } from "./auth/Logout"
import { OrderProvider } from "./orders/OrderProvider"
import { OrderList } from "./orders/OrderList"

export const ApplicationViews = (props) => {
  return (
    <>
      <LocationPovider>
        <Route exact path="/">
          <LocationList />
        </Route>
      </LocationPovider>
      
      <EmployeeProvider>
        <LocationPovider>
          <Route exact path="/employees" render={
            props => <EmployeeList {...props} />
          }/>
          <Route exact path="/employees/create" render={
            props => <EmployeeForm {...props} />
          }>
          </Route>
        </LocationPovider>
        
      </EmployeeProvider>

      <LocationPovider>
        <Route exact path="/locations">
          <LocationList />
        </Route>
      </LocationPovider>

      <ProductProvider>
        <ProductTypeProvider>
          <OrderProvider>
            <Route path="/products">
              <ProductList />
            </Route>
          </OrderProvider>
        </ProductTypeProvider>
      </ProductProvider>

      <Route path="/logout" render={
        props => <Logout {...props} />
      }/>

      <ProductTypeProvider>
        <ProductProvider>
          <OrderProvider>
            <Route path="/orders">
              <OrderList />
            </Route>
          </OrderProvider>
        </ProductProvider>
      </ProductTypeProvider>
    </>
  )
}