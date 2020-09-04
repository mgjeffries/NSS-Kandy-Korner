import React from "react"
import { LocationPovider } from "./locations/LocationProvider"
import { ProductProvider } from "./Products/ProductProvider"
import { Route } from "react-router-dom"
import { LocationList } from "./locations/LocationList"
import { ProductList } from "./Products/ProductList"

export const ApplicationViews = (props) => {
  return (
    <>
      <LocationPovider>
        <Route exact path="/">
          <LocationList />
        </Route>
        <Route exact path="/locations">
          <LocationList />
        </Route>
      </LocationPovider>
      <ProductProvider>
        <Route path="/products">
          <ProductList />
        </Route>
      </ProductProvider>
    </>
  )
}