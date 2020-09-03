import React from "react"
import "./Product.css"

export const Product = ({product}) => (
  <div className="product">
    <div className="product__name">{product.name}</div>
    <div className="product__type">{product.productTypeId}</div>
    <div className="product__price">{product.price}</div>
  </div>
)