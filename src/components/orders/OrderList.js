import React, { useContext, useEffect, useState } from "react"
import { ProductContext } from "../Products/ProductProvider"
import { Product } from "../Products/Product"
import { ProductTypeContext } from "../productTypes/ProductTypeProvider"
import { OrderContext } from "./OrderProvider"

export const OrderList = () => {
  const { products, getProducts } = useContext(ProductContext)
  const { productTypes, getProductTypes } = useContext(ProductTypeContext)
  const { orders, getOrders } = useContext(OrderContext)
  const [ orderedProducts, setOrderedProducts] = useState([])

  useEffect( () => {
    getProducts()
    getProductTypes()
    getOrders()
  }, [])

  useEffect( () => {
    const chosenProducts = orders.map(order => {
      return products.find(p => p.id === order.productId)
    })
    
    setOrderedProducts(chosenProducts)
  }, [orders])

  return <div className="products">
      {
        orderedProducts.map( p => {
        const productType = productTypes.find( productType => productType.id === p.productTypeId) || {} 
        return <Order key={p.id} product={p} productType={productType}/>
      })
      }
    </div>
  
}

const Order = ({ product, productType }) => {

  return <div className="product">
    <div className="product__name">{product.name}</div>
    <div className="product__type">Product Type: {productType.name}</div>
    <div className="product__price">${product.price}</div>
  </div>
}