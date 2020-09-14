import React from "react"

export const Order = ({ product, productType }) => {
  return <div className="order">
    <div className="order__name">{product.name}</div>
    <div className="order__type">Product Type: {productType.name}</div>
    <div className="order__price">${product.price}</div>
    <div className="order_quantity">Quantity ordered: {product.quantity}</div>
    <div className="order_linePrice">Line Price: {product.linePrice}</div>
  </div>
}