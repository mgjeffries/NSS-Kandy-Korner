import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import { Product } from "./Product"

export const ProductList = () => {
  const { products, getProducts } = useContext(ProductContext)

  useEffect( () => {getProducts()}, [])

  return (
    <div className="products">
      {
        products.map( p => <Product key={p.id} product={p}/>)
      }
    </div>
  )
}