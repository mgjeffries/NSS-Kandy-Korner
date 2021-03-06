import React, { useContext } from "react"
import "./Product.css"
import { OrderContext } from "../orders/OrderProvider"

export const Product = ({ product, productType }) => {
  const { addOrder } = useContext(OrderContext)



  return <div className="product">
    <div className="product__name">{product.name}</div>
    <div className="product__type">Product Type: {productType.name}</div>
    <div className="product__price">${product.price}</div>
    <button className="product_order" onClick={
      () => {
        const order = {
          productId: product.id,
          customerId: parseInt(localStorage.getItem("kandy_customer"))
        }
        addOrder(order)
      }
    }>Add to Order</button>
  </div>
}
