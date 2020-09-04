import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import { Product } from "./Product"
import { ProductTypeContext } from "../productTypes/ProductTypeProvider"

export const ProductList = () => {
  const { products, getProducts } = useContext(ProductContext)
  const { productTypes, getProductTypes } = useContext(ProductTypeContext)


  useEffect( () => {
    getProducts()
    getProductTypes()
  }, [])

  return (
    <div className="products">
      {
        products.map( p => {
        const productType = productTypes.find( productType => productType.id === p.productTypeId) || {}
        return <Product key={p.id} product={p} productType={productType}/>
      })
      }
    </div>
  )
}