import React from "react"
import { LocationPovider } from "./locations/LocationProvider"
import { LocationList } from "./locations/LocationList"
import "./KandyKorner.css"
import { ProductProvider } from "./Products/ProductProvider"
import { ProductList } from "./Products/ProductList"


export const KandyKorner = () => (
  <>
    <div className="kandy-korner">
      <div>Kandy Korner</div>

      <h2>Locations</h2>
      <LocationPovider>
        <LocationList />
      </LocationPovider>

      <h2>Products</h2>
      <ProductProvider>
        <ProductList />
      </ProductProvider>
    </div>
  </>
)